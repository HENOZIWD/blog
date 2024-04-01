import { Fragment } from 'react';
import { PostCardProps } from '@/types/post';
import PostCard from './postCard';

interface PostListProps {
  posts: PostCardProps[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <ul className="flex flex-col gap-8 px-4">
      {posts.map(({
        id, title, description, createdAt, thumbnail,
      }, index) => (
        <Fragment key={id}>
          {index === 0
            ? null
            : (
              <div
                key={`divline-${id}`}
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
        </Fragment>
      ))}
    </ul>
  );
}
