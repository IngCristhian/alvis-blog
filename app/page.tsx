"use client";

import { useLanguage } from "@/app/context/language-context";
import Navbar from "@/app/components/Navbar";
import { 
  BookOpen, Coffee, GraduationCap, Mail, MapPin, User, Linkedin, Github, Briefcase, 
  Server, Cloud, Code, Terminal, Database, Shield, Container
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const skills = [
    { name: "Docker & Kubernetes", icon: <Container size={24} className="text-blue-500" />, level: "Advanced" },
    { name: "AWS & Azure", icon: <Cloud size={24} className="text-orange-500" />, level: "Advanced" },
    { name: "CI/CD (Jenkins, GitHub Actions)", icon: <Server size={24} className="text-red-500" />, level: "Advanced" },
    { name: "IaC (Terraform, Ansible)", icon: <Code size={24} className="text-purple-500" />, level: "Intermediate" },
    { name: "Scripting (Python, Bash)", icon: <Terminal size={24} className="text-yellow-500" />, level: "Advanced" },
    { name: "Monitoring (Prometheus, Grafana)", icon: <Database size={24} className="text-green-500" />, level: "Intermediate" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-40 flex flex-col items-center text-center px-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 dark:opacity-10 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400 rounded-full blur-[100px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-400 rounded-full blur-[100px]" />
        </div>

        <motion.div 
          className="w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mb-8 p-1 shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
            <User size={64} className="text-slate-400" />
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {t("hero_role")}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t("hero_desc")}
        </motion.p>
        
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#contacto" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
            {t("hero_cta_contact")}
          </a>
          <a href="#proyectos" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all transform hover:-translate-y-1">
            {t("hero_cta_projects")}
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            className="flex items-center gap-4 mb-8"
            {...fadeInUp}
          >
            <User className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold">{t("about_title")}</h2>
          </motion.div>
          <motion.div 
            className="prose prose-lg prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="leading-relaxed mb-6">{t("about_desc1")}</p>
            <p className="leading-relaxed">{t("about_desc2")}</p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="flex items-center gap-4 mb-12 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Briefcase className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold">{t("skills_title")}</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: skill.level === 'Advanced' ? '90%' : '70%' }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Server className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold">{t("exp_title")}</h2>
          </motion.div>
          
          <div className="space-y-12">
            <motion.div 
              className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-900"></div>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2 block">{t("exp_date1")}</span>
              <h3 className="font-bold text-2xl mb-1">{t("exp_role1")}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">{t("exp_desc1")}</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded-full font-medium">Kubernetes</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded-full font-medium">ArgoCD</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded-full font-medium">Terraform</span>
              </div>
            </motion.div>

            <motion.div 
              className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-400 dark:bg-slate-600 ring-4 ring-white dark:ring-slate-900"></div>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 block">{t("exp_date2")}</span>
              <h3 className="font-bold text-2xl mb-1">{t("exp_role2")}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">{t("exp_desc2")}</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded-full font-medium">AWS</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded-full font-medium">Python</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded-full font-medium">Linux</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 pb-40 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div 
            className="flex flex-col items-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600">
               <Mail size={40} />
            </div>
            <h2 className="text-4xl font-bold">{t("contact_title")}</h2>
          </motion.div>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-xl mx-auto">
            {t("contact_desc")}
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="mailto:tuemail@ejemplo.com" className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1">
              <Mail size={20} />
              {t("contact_email")}
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <Github size={20} />
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm bg-white dark:bg-slate-900 transition-colors duration-300">
        <p>© {new Date().getFullYear()} [Tu Nombre]. {t("footer_text")}.</p>
      </footer>
    </div>
  );
}
