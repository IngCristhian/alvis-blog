"use client";

import { useLanguage } from "@/app/context/language-context";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import {
  Mail, MapPin, Linkedin, Github, ExternalLink,
  Cloud, Activity, GitBranch, Code, Download, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useLanguage();

  const skills = {
    cloud: ["AWS (EKS, CloudFormation)", "Azure DevOps", "Kubernetes", "Docker"],
    observability: ["Grafana", "Prometheus", "Thanos", "Nagios"],
    cicd: ["Jenkins", "Terraform", "Ansible", "Git/GitHub"],
    dev: ["Python", "Bash", "Linux", "SQL", "Kafka Strimzi"],
  };

  const experiences = [
    { role: "exp_role1", company: "exp_company1", date: "exp_date1", desc: "exp_desc1", current: true },
    { role: "exp_role2", company: "exp_company2", date: "exp_date2", desc: "exp_desc2", current: false },
    { role: "exp_role3", company: "exp_company3", date: "exp_date3", desc: "exp_desc3", current: false },
    { role: "exp_role4", company: "exp_company4", date: "exp_date4", desc: "exp_desc4", current: false },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-2 font-mono">
              {t("hero_greeting")}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              {t("hero_name")}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
              {t("hero_role")}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6 max-w-lg">
              {t("hero_desc")}
            </p>

            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-8">
              <MapPin size={18} />
              <span>{t("hero_location")}</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
              >
                {t("hero_cta_contact")}
                <ChevronRight size={18} />
              </button>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 px-6 py-3 rounded-lg font-medium transition-all"
              >
                <Download size={18} />
                {t("hero_cta_cv")}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/cristian-david-alvis-ortiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/IngCristhian"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
                aria-label="GitHub Personal"
              >
                <Github size={22} />
              </a>
              <a
                href="https://github.com/alvisdevops"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
                aria-label="GitHub Organization"
              >
                <ExternalLink size={22} />
              </a>
              <a
                href="mailto:contacto@cristianalvis.com"
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-red-100 dark:hover:bg-red-900/30 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-all"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Cristian Alvis"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl bg-blue-600/20 dark:bg-blue-500/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-mono text-xl">01.</span>
            {t("about_title")}
            <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800 ml-4" />
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="md:col-span-2 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                {t("about_desc1")}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                {t("about_desc2")}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <p className="text-3xl font-bold text-blue-600">{t("about_years")}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{t("about_years_label")}</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <p className="text-3xl font-bold text-blue-600">{t("about_projects")}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{t("about_projects_label")}</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <p className="text-3xl font-bold text-blue-600">{t("about_certifications")}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{t("about_certifications_label")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-mono text-xl">02.</span>
            {t("skills_title")}
            <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800 ml-4" />
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cloud */}
            <motion.div
              className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="text-blue-500" size={24} />
                <h3 className="font-semibold">{t("skills_cloud")}</h3>
              </div>
              <ul className="space-y-2">
                {skills.cloud.map((skill, i) => (
                  <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Observability */}
            <motion.div
              className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Activity className="text-green-500" size={24} />
                <h3 className="font-semibold">{t("skills_observability")}</h3>
              </div>
              <ul className="space-y-2">
                {skills.observability.map((skill, i) => (
                  <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CI/CD */}
            <motion.div
              className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="text-orange-500" size={24} />
                <h3 className="font-semibold">{t("skills_cicd")}</h3>
              </div>
              <ul className="space-y-2">
                {skills.cicd.map((skill, i) => (
                  <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Development */}
            <motion.div
              className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-purple-500" size={24} />
                <h3 className="font-semibold">{t("skills_dev")}</h3>
              </div>
              <ul className="space-y-2">
                {skills.dev.map((skill, i) => (
                  <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-mono text-xl">03.</span>
            {t("exp_title")}
            <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800 ml-4" />
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ring-4 ring-white dark:ring-slate-900 ${
                  exp.current ? 'bg-blue-600' : 'bg-slate-400 dark:bg-slate-600'
                }`} />

                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`text-sm font-mono ${exp.current ? 'text-blue-600' : 'text-slate-500'}`}>
                    {t(exp.date)}
                  </span>
                  {exp.current && (
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full">
                      {t("exp_current")}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-1">{t(exp.role)}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{t(exp.company)}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t(exp.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-600 font-mono mb-4">04. {t("contact_title")}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("contact_title")}</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              {t("contact_desc")}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:contacto@cristianalvis.com"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Mail size={20} />
                {t("contact_email")}
              </a>
              <a
                href="https://www.linkedin.com/in/cristian-david-alvis-ortiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 px-8 py-4 rounded-lg font-medium transition-all"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Cristian Alvis. {t("footer_rights")}.
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-xs mt-2">
            {t("footer_text")}
          </p>
        </div>
      </footer>
    </div>
  );
}
