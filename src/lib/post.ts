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
  const directories = fs.readdirSync(postDir, { withFileTypes: true });
  const postsData: PostCard[] = directories.filter((dir) => dir.isDirectory()).map((dir) => {
    const postPath = path.join(postDir, dir.name, `${dir.name}.md`);
    const post = fs.readFileSync(postPath, 'utf-8');
    const matterResult = matter(post);

    return {
      id: dir.name,
      title: matterResult.data.title,
      createdAt: matterResult.data.createdAt,
    };
  });

  return postsData;
}

export async function getPost(postName: string): Promise<Post> {
  const postPath = path.join(postDir, postName, `${postName}.md`);
  const post = fs.readFileSync(postPath, 'utf-8');
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
