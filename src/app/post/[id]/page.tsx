import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllPostId, getPost } from '@/lib/post';

export async function generateStaticParams() {
  const postIds = await getAllPostId();

  return postIds.map((id) => ({
    id,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    return (
      <div>
        there is no post.
      </div>
    );
  }

  return (
    <div className="prose prose-indigo max-w-[64rem] p-6
      prose-code:mx-[0.125rem] prose-code:rounded prose-code:bg-[#1f2937]
      prose-code:px-[0.375rem] prose-code:py-[0.125rem] prose-code:text-white
      prose-code:before:content-[''] prose-code:after:content-['']"
    >
      <h1>{post.title}</h1>
      <p>{post.createdAt}</p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {post.content}
      </ReactMarkdown>
    </div>
  );
}
