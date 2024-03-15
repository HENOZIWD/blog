import { getAllPostId, getPost } from '@/lib/post';
import CustomMarkdown from '@/components/customMarkdown';

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
    <div className="prose prose-indigo max-w-[64rem] p-6 prose-pre:bg-inherit prose-pre:p-0">
      <h1>{post.title}</h1>
      <p>{post.createdAt}</p>
      <CustomMarkdown markdown={post.content} />
    </div>
  );
}
