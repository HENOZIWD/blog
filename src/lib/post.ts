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
  const postsData: PostCard[] = [];
  directories.filter((dir) => dir.isDirectory()).forEach((dir) => {
    const postPath = path.join(postDir, dir.name, `${dir.name}.md`);
    if (fs.existsSync(postPath)) {
      const post = fs.readFileSync(postPath, 'utf-8');
      const matterResult = matter(post);

      postsData.push({
        id: dir.name,
        title: matterResult.data.title,
        createdAt: matterResult.data.createdAt,
      });
    }
  });

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
