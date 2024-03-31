import { Metadata } from 'next';
import { getAllPostId, getPost, getPostCard } from '@/lib/post';
import CustomMarkdown from '@/components/customMarkdown';

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  const post = await getPostCard(id);

  return {
    title: post?.title,
    description: post?.description,
  };
}

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
