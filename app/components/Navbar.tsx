"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/language-context";
import { useTheme } from "next-themes";
import { Moon, Sun, Languages } from "lucide-react";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return null;
  }

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
          DevOps.Portafolio
        </span>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("nav_home")}</a>
            <a href="#sobre-mi" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("nav_about")}</a>
            <a href="#habilidades" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("nav_skills")}</a>
            <a href="#experiencia" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("nav_experience")}</a>
            <a href="#contacto" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("nav_contact")}</a>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("nav_blog")}</Link>
          </div>

          <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-700 pl-6">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 font-bold text-sm"
              aria-label="Toggle Language"
            >
              <Languages size={18} />
              <span>{language.toUpperCase()}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
