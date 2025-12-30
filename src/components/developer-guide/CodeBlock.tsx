"use client";

import CopyButton from "./CopyButton";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language = "css", title }: CodeBlockProps) {
  return (
    <div className="relative group rounded-xl overflow-hidden border border-dark-200 dark:border-dark-700">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-dark-100 dark:bg-dark-800 border-b border-dark-200 dark:border-dark-700">
          <span className="text-xs font-medium text-dark-500 dark:text-dark-400">{title}</span>
          <CopyButton text={code} label="Copy Code" />
        </div>
      )}
      {!title && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <CopyButton text={code} label="Copy" />
        </div>
      )}
      <pre className="bg-dark-900 dark:bg-dark-950 p-4 overflow-x-auto text-sm">
        <code className={`language-${language} text-dark-100 whitespace-pre`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
