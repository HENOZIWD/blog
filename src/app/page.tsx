import { getAllPostCard } from '@/lib/post';
import PostList from '@/components/postList';

export default async function Home() {
  const posts = await getAllPostCard();

  return (
    <PostList posts={posts} />
  );
}
