import Link from 'next/link';

interface PostCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

export default function PostCard({
  id, image, title, description,
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
      </section>
      <div className="w-0 border-l border-l-newspaper-darkgray/20" />
      <div className="min-h-[331px] w-1/2">
        image
      </div>
    </div>
  );
}
