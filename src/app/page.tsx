import { getAllPostCard } from '@/lib/post';
import PostList from '@/components/postList';
import PostCard from '@/components/postCard';

export default async function Home() {
  const posts = await getAllPostCard();

  return (
    <PostList>
      {posts.map((post, index) => (
        <>
          {index === 0
            ? null
            : <div className="h-0 w-full border-t border-t-newspaper-darkgray" />}
          <li key={post.id}>
            <PostCard
              id={post.id}
              title={post.title}
              description={post.createdAt}
              image="image link"
            />
          </li>
        </>
      ))}
    </PostList>
  );
}
