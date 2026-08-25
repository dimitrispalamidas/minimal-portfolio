"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { ProjectCover } from "./project-cover"
import {
  cloudFinProjects,
  personalProjects,
  PROJECT_ROLE_LABEL,
  PROJECT_STATUS_LABEL,
  type Project,
} from "@/lib/projects"

function ProjectTile({ project, language, index }: { project: Project; language: "en" | "el"; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link
        href={`/work/${project.slug}`}
        className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
      >
        <div className="relative h-56 bg-gray-100 dark:bg-gray-900 overflow-hidden">
          {project.image ? (
            <ProjectCover project={project} alt={project.title} sizes="(max-width: 768px) 100vw, 50vw" />
          ) : null}
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            {PROJECT_STATUS_LABEL[project.status][language]} · {PROJECT_ROLE_LABEL[project.role][language]}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.description[language]}</p>
        </div>
      </Link>
    </motion.div>
  )
}

export function WorkIndex({ lane = "all" }: { lane?: "all" | "personal" }) {
  const { language } = useLanguage()
  const cloudFin = cloudFinProjects()
  const personal = personalProjects()
  const personalOnly = lane === "personal"

  return (
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {personalOnly
              ? language === "en"
                ? "Freelance"
                : "Freelance"
              : language === "en"
                ? "Work"
                : "Έργα"}
          </h1>
          <div className="h-1 w-20 bg-gray-200 dark:bg-gray-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {personalOnly
              ? language === "en"
                ? "Work I ship freelance."
                : "Έργα που αναλαμβάνω freelance."
              : language === "en"
                ? "CloudFin is the day job. Everything else is freelance."
                : "Η CloudFin είναι η κύρια δουλειά μου. Όλα τα υπόλοιπα είναι freelance."}
          </p>
        </motion.div>

        {personalOnly ? null : (
          <section id="cloudfin" className="scroll-mt-28 mb-20 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">CloudFin</h2>
              <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {language === "en" ? "Day job" : "Full-time"}
              </span>
            </div>
            {cloudFin.map((project, index) => (
              <ProjectTile key={project.slug} project={project} language={language} index={index} />
            ))}
          </section>
        )}

        <section id="personal" className="scroll-mt-28 max-w-5xl mx-auto">
          {personalOnly ? null : (
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Freelance</h2>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personal.map((project, index) => (
              <ProjectTile key={project.slug} project={project} language={language} index={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
