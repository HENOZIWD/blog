import Link from 'next/link';
import Image from 'next/image';
import { PostCardProps } from '@/types/post';

export default function PostCard({
  id, title, description, createdAt, thumbnail,
}: PostCardProps) {
  return (
    <div className="flex flex-row gap-4 max-lg:flex-col-reverse">
      <section className="lg:w-1/2">
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
      <div className="w-0 border-l border-l-newspaper-darkgray/20 max-lg:hidden" />
      <div className="relative aspect-video lg:aspect-[4/3] lg:w-1/2">
        {thumbnail ? (
          <Link href={`/post/${id}`}>
            <Image
              className="object-cover"
              src={thumbnail}
              alt="thumbnail"
              fill
            />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
