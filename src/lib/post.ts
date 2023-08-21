import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PostCard {
  id: string;
  title: string;
  createdAt: string;
}

interface Post {
  title: string;
  createdAt: string;
  content: string;
}

const postDir = path.join(process.cwd(), path.join('public', 'post'));

export async function getAllPostCard() {
  const fileNames = fs.readdirSync(postDir);
  const postsData: PostCard[] = fileNames.map((fileName) => {
    const fullPath = path.join(postDir, fileName);
    const post = fs.readFileSync(fullPath, 'utf-8');
    const matterResult = matter(post);

    return {
      id: fileName.replace(/\.md$/, ''),
      title: matterResult.data.title,
      createdAt: matterResult.data.createdAt,
    };
  });

  return postsData;
}

export async function getPost(fileName: string): Promise<Post> {
  const fullPath = path.join(postDir, `${fileName}.md`);
  const post = fs.readFileSync(fullPath, 'utf-8');
  const matterResult = matter(post);

  return {
    title: matterResult.data.title,
    createdAt: matterResult.data.createdAt,
    content: matterResult.content,
  };
}

export async function getAllPostId() {
  const fileNames = fs.readdirSync(postDir);

  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}
