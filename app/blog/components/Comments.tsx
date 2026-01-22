"use client";

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/app/context/language-context';

export default function Comments() {
  const { resolvedTheme } = useTheme();
  const { language } = useLanguage();

  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`;
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

  if (!repo || !repoId || !categoryId) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        <p>Comentarios no configurados</p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <Giscus
        id="comments"
        repo={repo}
        repoId={repoId}
        category="Blog Comments"
        categoryId={categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        lang={language}
        loading="lazy"
      />
    </div>
  );
}
