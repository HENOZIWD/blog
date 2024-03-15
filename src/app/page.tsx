import { getAllPostCard } from '@/lib/post';
import PostList from '@/components/postList';
import PostCard from '@/components/postCard';

export default async function Home() {
  const posts = await getAllPostCard();

  return (
    <PostList>
      {posts.map(({
        id, title, description, createdAt, thumbnail,
      }, index) => (
        <>
          {index === 0
            ? null
            : (
              <div
                key={id}
                className="h-0 w-full border-t border-t-newspaper-darkgray"
              />
            )}
          <li key={id}>
            <PostCard
              id={id}
              title={title}
              description={description}
              createdAt={createdAt}
              thumbnail={thumbnail}
            />
          </li>
        </>
      ))}
    </PostList>
  );
}
