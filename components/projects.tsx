"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "./language-provider"
import { projects, type ProjectCategory } from "@/lib/projects"

const categoryKeys: Array<"all" | ProjectCategory> = [
  "all",
  "ai",
  "business",
  "webapp",
  "ecommerce",
  "landing",
]

export function Projects() {
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<(typeof categoryKeys)[number]>("all")

  useEffect(() => {
    setActiveCategory("all")
  }, [language])

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("projects.title")}</h2>
          <div className="h-1 w-20 bg-gray-200 dark:bg-gray-700 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">{t("projects.description")}</p>

          <div className="flex flex-wrap justify-center gap-2">
            {categoryKeys.map((key) => (
              <Button
                key={key}
                variant={activeCategory === key ? "default" : "outline"}
                onClick={() => setActiveCategory(key)}
                className="rounded-full"
              >
                {t(`projects.${key}`)}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-900">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={
                      language === "en"
                        ? `${project.title} - project by Dimitris Palamidas`
                        : `${project.title} - έργο του Dimitris Palamidas`
                    }
                    width={1440}
                    height={900}
                    className="object-cover object-top w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-lg font-semibold text-gray-500 dark:text-gray-400">
                    {project.title}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description[language]}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags[language].map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoLink ? (
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t("projects.demo")}
                      </a>
                    </Button>
                  ) : null}
                  {project.githubLink ? (
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        {t("projects.code")}
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
