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
    // Navigation
    nav_home: "Inicio",
    nav_about: "Sobre Mí",
    nav_skills: "Habilidades",
    nav_experience: "Experiencia",
    nav_contact: "Contacto",
    nav_blog: "Blog",

    // Hero
    hero_greeting: "Hola, soy",
    hero_name: "Cristian Alvis",
    hero_role: "DevOps Engineer | SRE",
    hero_desc: "Ingeniero DevOps con 4+ años de experiencia en soluciones cloud-native, automatización de infraestructura y observabilidad. Especializado en AWS, Kubernetes y CI/CD en el sector financiero y tecnológico.",
    hero_cta_contact: "Contáctame",
    hero_cta_cv: "Descargar CV",
    hero_location: "Bogotá, Colombia",

    // About
    about_title: "Sobre Mí",
    about_desc1: "Ingeniero DevOps apasionado por la automatización y la eficiencia operacional. Mi enfoque es cerrar la brecha entre desarrollo y operaciones, garantizando despliegues rápidos, seguros y escalables.",
    about_desc2: "Con experiencia en empresas del sector financiero como Bancolombia y Nequi, me especializo en arquitecturas cloud-native, orquestación de contenedores y sistemas de observabilidad de alto rendimiento.",
    about_years: "4+ años",
    about_years_label: "de experiencia",
    about_projects: "20+",
    about_projects_label: "proyectos",
    about_certifications: "AWS",
    about_certifications_label: "certificado",

    // Skills
    skills_title: "Stack Tecnológico",
    skills_cloud: "Cloud & Infraestructura",
    skills_observability: "Observabilidad",
    skills_cicd: "CI/CD & Automatización",
    skills_dev: "Desarrollo",

    // Experience
    exp_title: "Experiencia Profesional",
    exp_current: "Actual",

    exp_role1: "Ingeniero DevOps",
    exp_company1: "EPAM NEORIS | Bancolombia",
    exp_date1: "Feb 2025 - Actual",
    exp_desc1: "Liderazgo en implementación de infraestructura cloud-native en AWS EKS con Kafka Strimzi. Diseño de stack de observabilidad completo (Grafana, Prometheus, Thanos). Automatización con AWS CloudFormation.",

    exp_role2: "Ingeniero SRE",
    exp_company2: "SETI S.A.S | Bancolombia - Nequi",
    exp_date2: "Abr 2024 - Dic 2024",
    exp_desc2: "Gestión de buenas prácticas en operaciones de TI. Garantía de fiabilidad, disponibilidad y rendimiento de sistemas críticos bancarios. Implementación de automatización y monitoreo.",

    exp_role3: "DevOps Engineer",
    exp_company3: "Accenture",
    exp_date3: "Dic 2022 - Sep 2023",
    exp_desc3: "Administración de servicios AWS y orquestación con Kubernetes. Diseño de flujos CI/CD e Infrastructure as Code con Terraform. Soluciones de monitoreo en producción.",

    exp_role4: "Consultor DevOps",
    exp_company4: "Contact & Business IT LTDA",
    exp_date4: "Ene 2021 - Dic 2022",
    exp_desc4: "Implementación de prácticas DevOps con Azure DevOps, Jenkins, Docker y Kubernetes. Diseño de pipelines CI/CD de alto rendimiento. Automatización con Ansible y scripting.",

    // Contact
    contact_title: "Contacto",
    contact_desc: "¿Tienes un proyecto en mente o necesitas optimizar tu infraestructura? Hablemos.",
    contact_email: "Enviar Email",

    // Footer
    footer_text: "Diseñado y desarrollado por Cristian Alvis",
    footer_rights: "Todos los derechos reservados",

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
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_contact: "Contact",
    nav_blog: "Blog",

    // Hero
    hero_greeting: "Hi, I'm",
    hero_name: "Cristian Alvis",
    hero_role: "DevOps Engineer | SRE",
    hero_desc: "DevOps Engineer with 4+ years of experience in cloud-native solutions, infrastructure automation, and observability. Specialized in AWS, Kubernetes, and CI/CD in the financial and technology sector.",
    hero_cta_contact: "Contact Me",
    hero_cta_cv: "Download CV",
    hero_location: "Bogotá, Colombia",

    // About
    about_title: "About Me",
    about_desc1: "DevOps Engineer passionate about automation and operational efficiency. My focus is bridging the gap between development and operations, ensuring fast, secure, and scalable deployments.",
    about_desc2: "With experience in financial sector companies like Bancolombia and Nequi, I specialize in cloud-native architectures, container orchestration, and high-performance observability systems.",
    about_years: "4+ years",
    about_years_label: "of experience",
    about_projects: "20+",
    about_projects_label: "projects",
    about_certifications: "AWS",
    about_certifications_label: "certified",

    // Skills
    skills_title: "Tech Stack",
    skills_cloud: "Cloud & Infrastructure",
    skills_observability: "Observability",
    skills_cicd: "CI/CD & Automation",
    skills_dev: "Development",

    // Experience
    exp_title: "Professional Experience",
    exp_current: "Current",

    exp_role1: "DevOps Engineer",
    exp_company1: "EPAM NEORIS | Bancolombia",
    exp_date1: "Feb 2025 - Current",
    exp_desc1: "Leading cloud-native infrastructure implementation on AWS EKS with Kafka Strimzi. Designed complete observability stack (Grafana, Prometheus, Thanos). Automation with AWS CloudFormation.",

    exp_role2: "SRE Engineer",
    exp_company2: "SETI S.A.S | Bancolombia - Nequi",
    exp_date2: "Apr 2024 - Dec 2024",
    exp_desc2: "IT operations best practices management. Ensuring reliability, availability, and performance of critical banking systems. Automation and monitoring implementation.",

    exp_role3: "DevOps Engineer",
    exp_company3: "Accenture",
    exp_date3: "Dec 2022 - Sep 2023",
    exp_desc3: "AWS services administration and Kubernetes orchestration. CI/CD workflow design and Infrastructure as Code with Terraform. Production monitoring solutions.",

    exp_role4: "DevOps Consultant",
    exp_company4: "Contact & Business IT LTDA",
    exp_date4: "Jan 2021 - Dec 2022",
    exp_desc4: "DevOps practices implementation with Azure DevOps, Jenkins, Docker, and Kubernetes. High-performance CI/CD pipeline design. Automation with Ansible and scripting.",

    // Contact
    contact_title: "Contact",
    contact_desc: "Have a project in mind or need to optimize your infrastructure? Let's talk.",
    contact_email: "Send Email",

    // Footer
    footer_text: "Designed and developed by Cristian Alvis",
    footer_rights: "All rights reserved",

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
  const [language, setLanguage] = useState<Language>("es");

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
