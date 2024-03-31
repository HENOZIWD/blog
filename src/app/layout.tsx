import type { Metadata } from 'next';
import Title from '@/components/title';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog-henoziwd.vercel.app/'),
  title: {
    template: '%s | HENOZIWD',
    default: 'HENOZIWD\'s blog',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <main className="mx-auto my-0 flex min-h-screen flex-col gap-4 py-4 lg:w-[1024px]">
          <Title />
          {children}
        </main>
      </body>
    </html>
  );
}
