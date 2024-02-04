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
    <div className="prose prose-indigo min-h-[60rem] w-[64rem] max-w-[64rem] p-6
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
