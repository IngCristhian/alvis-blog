import type { MDXComponents as MDXComponentsType } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export const MDXComponents: MDXComponentsType = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="my-4 text-gray-700 dark:text-gray-300 leading-relaxed">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <Link
      href={href || '#'}
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside my-4 text-gray-700 dark:text-gray-300 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside my-4 text-gray-700 dark:text-gray-300 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="ml-4">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400">
          {children}
        </code>
      );
    }
    return (
      <code className={className}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => (
    <span className="block my-6">
      <Image
        src={src || ''}
        alt={alt || ''}
        width={800}
        height={400}
        className="rounded-lg w-full h-auto"
      />
    </span>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      {children}
    </td>
  ),
  hr: () => <hr className="my-8 border-gray-200 dark:border-gray-700" />,
};
