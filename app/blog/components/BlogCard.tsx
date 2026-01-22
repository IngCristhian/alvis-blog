"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import { BlogPostMeta } from '@/types/blog';
import { useLanguage } from '@/app/context/language-context';

interface BlogCardProps {
  post: BlogPostMeta;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const { language, t } = useLanguage();
  const locale = language === 'es' ? es : enUS;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/blog/${post.slug}`}>
        {post.coverImage && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              {post.category}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {post.readingTime.replace('read', t('blog_min_read'))}
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'PPP', { locale })}
            </time>
            <span className="text-blue-600 dark:text-blue-400 group-hover:underline">
              {t('blog_read_more')} →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
