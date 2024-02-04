import Link from 'next/link';
import Image from 'next/image';
import { PostCardProps } from '@/types/post';

export default function PostCard({
  id, title, description, createdAt, thumbnail,
}: PostCardProps) {
  return (
    <div className="flex gap-4">
      <section className="w-1/2">
        <h2 className="break-normal text-[40px] font-bold text-newspaper-dark">
          <Link href={`/post/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="text-newspaper-darkgray">
          {description}
        </p>
        <p className="text-newspaper-darkgray">
          {createdAt}
        </p>
      </section>
      <div className="w-0 border-l border-l-newspaper-darkgray/20" />
      <div className="relative min-h-[331px] w-1/2">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt="thumbnail"
            fill
          />
        ) : null}
      </div>
    </div>
  );
}
