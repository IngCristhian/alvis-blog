"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/context/language-context';

export default function BlogHeader() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {t('blog_title')}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {t('blog_subtitle')}
      </p>
    </motion.div>
  );
}
