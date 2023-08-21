import Link from 'next/link';
import { getAllPostCard } from '@/lib/post';

export default async function Home() {
  const posts = await getAllPostCard();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <section>
            <h2><Link href={`/post/${post.id}`}>{post.title}</Link></h2>
            <p>{post.createdAt}</p>
          </section>
        </li>
      ))}
    </ul>
  );
}
