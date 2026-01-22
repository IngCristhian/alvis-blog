"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre Mí",
    nav_skills: "Habilidades",
    nav_experience: "Experiencia",
    nav_contact: "Contacto",
    nav_blog: "Blog",
    hero_role: "Ingeniero DevOps",
    hero_desc: "Automatizando el futuro. Especialista en CI/CD, Infraestructura como Código y Nube.",
    hero_cta_contact: "Contáctame",
    hero_cta_projects: "Ver Proyectos",
    about_title: "Sobre Mí",
    about_desc1: "Soy un Ingeniero DevOps apasionado por la automatización y la eficiencia. Mi objetivo es cerrar la brecha entre el desarrollo y las operaciones, asegurando despliegues rápidos, seguros y escalables.",
    about_desc2: "Con experiencia en entornos de nube y on-premise, me especializo en construir pipelines robustos y gestionar infraestructura de alta disponibilidad.",
    skills_title: "Habilidades Técnicas",
    exp_title: "Experiencia Profesional",
    exp_role1: "Ingeniero DevOps Senior",
    exp_date1: "2023 - Presente",
    exp_desc1: "Lideré la migración a Kubernetes, reduciendo el tiempo de despliegue en un 40%. Implementé GitOps con ArgoCD.",
    exp_role2: "Ingeniero de Sistemas / Cloud",
    exp_date2: "2021 - 2023",
    exp_desc2: "Administración de infraestructura en AWS. Automatización de tareas repetitivas con Python y Bash.",
    contact_title: "Contáctame",
    contact_desc: "¿Listo para optimizar tu infraestructura? Hablemos.",
    contact_email: "Enviar Correo",
    footer_text: "Diseñado y construido con Next.js",
    // Blog
    blog_title: "Blog",
    blog_subtitle: "Artículos sobre DevOps, Cloud y desarrollo",
    blog_search_placeholder: "Buscar artículos...",
    blog_all_categories: "Todas",
    blog_no_posts: "No hay artículos disponibles",
    blog_no_results: "No se encontraron resultados",
    blog_read_more: "Leer más",
    blog_min_read: "min de lectura",
    blog_back_to_blog: "Volver al blog",
    blog_share: "Compartir",
    blog_related_posts: "Artículos relacionados",
    blog_comments: "Comentarios",
    blog_newsletter_title: "Suscríbete al newsletter",
    blog_newsletter_desc: "Recibe los últimos artículos directamente en tu correo",
    blog_newsletter_placeholder: "tu@email.com",
    blog_newsletter_button: "Suscribirse",
    blog_newsletter_success: "¡Gracias por suscribirte!",
    blog_newsletter_error: "Hubo un error. Intenta de nuevo.",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_contact: "Contact",
    nav_blog: "Blog",
    hero_role: "DevOps Engineer",
    hero_desc: "Automating the future. Specialist in CI/CD, Infrastructure as Code, and Cloud Computing.",
    hero_cta_contact: "Contact Me",
    hero_cta_projects: "View Projects",
    about_title: "About Me",
    about_desc1: "I am a DevOps Engineer passionate about automation and efficiency. My goal is to bridge the gap between development and operations, ensuring fast, secure, and scalable deployments.",
    about_desc2: "With experience in cloud and on-premise environments, I specialize in building robust pipelines and managing high-availability infrastructure.",
    skills_title: "Technical Skills",
    exp_title: "Professional Experience",
    exp_role1: "Senior DevOps Engineer",
    exp_date1: "2023 - Present",
    exp_desc1: "Led migration to Kubernetes, reducing deployment time by 40%. Implemented GitOps with ArgoCD.",
    exp_role2: "Systems / Cloud Engineer",
    exp_date2: "2021 - 2023",
    exp_desc2: "AWS Infrastructure administration. Automation of repetitive tasks using Python and Bash.",
    contact_title: "Contact Me",
    contact_desc: "Ready to optimize your infrastructure? Let's talk.",
    contact_email: "Send Email",
    footer_text: "Designed and built with Next.js",
    // Blog
    blog_title: "Blog",
    blog_subtitle: "Articles about DevOps, Cloud, and development",
    blog_search_placeholder: "Search articles...",
    blog_all_categories: "All",
    blog_no_posts: "No articles available",
    blog_no_results: "No results found",
    blog_read_more: "Read more",
    blog_min_read: "min read",
    blog_back_to_blog: "Back to blog",
    blog_share: "Share",
    blog_related_posts: "Related articles",
    blog_comments: "Comments",
    blog_newsletter_title: "Subscribe to the newsletter",
    blog_newsletter_desc: "Get the latest articles delivered to your inbox",
    blog_newsletter_placeholder: "you@email.com",
    blog_newsletter_button: "Subscribe",
    blog_newsletter_success: "Thanks for subscribing!",
    blog_newsletter_error: "Something went wrong. Please try again.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    // @ts-expect-error key access
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
