'use client';

import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface CustomMarkdownProps {
  markdown: string;
}

export default function CustomMarkdown({ markdown }: CustomMarkdownProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({
          node, className, children, style, ref, ...props
        }) {
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              {...props}
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
              children={String(children).replace(/\n$/, '')}
            />
          ) : (
            <code
              {...props}
              className="mx-[0.125rem] rounded bg-[#1e1e1e] px-[0.375rem] py-[0.125rem]
              text-white before:content-[''] after:content-['']"
              children={children}
            />
          );
        },
      }}
    >
      {markdown}
    </Markdown>
  );
}
