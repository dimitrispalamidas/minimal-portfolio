"use client"

import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "./language-provider"
import { ProjectCover } from "./project-cover"
import { PROJECT_ROLE_LABEL, PROJECT_STATUS_LABEL, type Project } from "@/lib/projects"

export function CaseStudy({ project }: { project: Project }) {
  const { language, t } = useLanguage()

  return (
    <article className="pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/work"
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          ← {t("work.back")}
        </Link>

        <h1 className="mt-8 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
          {PROJECT_STATUS_LABEL[project.status][language]} · {PROJECT_ROLE_LABEL[project.role][language]}
        </p>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.description[language]}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags[language].map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {project.image ? (
          <div className="relative mt-10 bg-gray-50 dark:bg-gray-900 h-72 md:h-[420px] rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800">
            <ProjectCover
              project={project}
              alt={`${project.title} — ${project.description.en}`}
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>
        ) : null}

        {project.programs ? (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("work.programs")}</h2>
            <ul className="space-y-4">
              {project.programs.map((program) => (
                <li
                  key={program.name.en}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{program.name[language]}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{program.role[language]}</span>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{program.body[language]}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t("work.problem")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.problem[language]}</p>
          </section>
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t("work.outcome")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.outcome[language]}</p>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {project.demoLink ? (
            <Button asChild className="gap-2 rounded-full">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                {project.slug === "cloudfin" ? "CloudFin" : t("work.live")}
              </a>
            </Button>
          ) : null}
          {project.githubLink ? (
            <Button asChild variant="outline" className="gap-2 rounded-full">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                {t("projects.code")}
              </a>
            </Button>
          ) : null}
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/#contact">{t("work.hire")}</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
