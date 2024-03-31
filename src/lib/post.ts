import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostCardProps } from '@/types/post';

interface Post {
  title: string;
  createdAt: string;
  content: string;
}

const postDir = path.join(process.cwd(), path.join('public', 'post'));

export async function getPostCard(id: string): Promise<PostCardProps | null> {
  const postPath = path.join(postDir, id, `${id}.md`);
  if (fs.existsSync(postPath)) {
    const post = fs.readFileSync(postPath, 'utf-8');
    const matterResult = matter(post);

    const thumbnailPath = path.join(postDir, id, 'images');
    const images = fs.existsSync(thumbnailPath) ? fs.readdirSync(thumbnailPath) : null;

    return {
      id,
      title: matterResult.data.title,
      description: matterResult.data.description,
      createdAt: matterResult.data.createdAt,
      thumbnail: images && images.length > 0 ? `/post/${id}/images/${images[0]}` : null,
    };
  }

  return null;
}

export async function getAllPostCard() {
  const directories = fs.readdirSync(postDir, { withFileTypes: true });
  const postsData = directories.filter((dir) => dir.isDirectory())
    .reduceRight<Promise<PostCardProps[]>>(async (accPromise, cur) => {
    const acc = await accPromise;
    const currentPostCard = await getPostCard(cur.name);

    return currentPostCard ? [...acc, currentPostCard] : acc;
  }, Promise.resolve([]));

  return postsData;
}

export async function getPost(postName: string): Promise<Post | null> {
  const postPath = path.join(postDir, postName, `${postName}.md`);
  if (!fs.existsSync(postPath)) {
    return null;
  }

  const post = fs.readFileSync(postPath, 'utf-8');
  const matterResult = matter(post);

  return {
    title: matterResult.data.title,
    createdAt: matterResult.data.createdAt,
    content: matterResult.content,
  };
}

export async function getAllPostId() {
  return fs.readdirSync(postDir);
}
