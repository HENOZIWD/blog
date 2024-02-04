export default function PostList({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ul className="flex flex-col gap-8">
      {children}
    </ul>
  );
}
