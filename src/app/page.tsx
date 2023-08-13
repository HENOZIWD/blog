import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const md = `
# 소개

**Hello, World!**

## 개요

[배포 링크](https://www.google.com/)

*기울임*

- 리스트

## 주요 피드백 반영 내용

\`\`\`TypeScript
/* src/components/atoms/button.tsx */
import { ButtonHTMLAttributes } from 'react';
import Loader from './loader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export default function Button({
  children,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
}
\`\`\`

`;

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between p-24
      max-lg:block"
    >
      <div className="prose prose-indigo w-[48rem] max-w-[48rem]">
        <ReactMarkdown>{md}</ReactMarkdown>
      </div>
    </main>
  );
}
