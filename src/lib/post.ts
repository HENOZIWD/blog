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

export async function getAllPostCard() {
  const directories = fs.readdirSync(postDir, { withFileTypes: true });
  const postsData = directories.filter((dir) => dir.isDirectory())
    .reduceRight<PostCardProps[]>((acc, cur) => {
    const postPath = path.join(postDir, cur.name, `${cur.name}.md`);
    if (fs.existsSync(postPath)) {
      const post = fs.readFileSync(postPath, 'utf-8');
      const matterResult = matter(post);

      const thumbnailPath = path.join(postDir, cur.name, 'images');
      const images = fs.existsSync(thumbnailPath) ? fs.readdirSync(thumbnailPath) : null;

      acc.push({
        id: cur.name,
        title: matterResult.data.title,
        description: matterResult.data.description,
        createdAt: matterResult.data.createdAt,
        thumbnail: images && images.length > 0 ? `/post/${cur.name}/images/${images[0]}` : null,
      });
    }

    return acc;
  }, []);

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
