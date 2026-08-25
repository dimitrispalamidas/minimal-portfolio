"use client"

import { motion } from "framer-motion"
import { Code, Palette, Bot, Zap } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Skills() {
  const { t } = useLanguage()

  const categories = [
    {
      title: t("skills.frontend"),
      description: t("skills.frontend.desc"),
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: t("skills.fullstack"),
      description: t("skills.fullstack.desc"),
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: t("skills.mobile"),
      description: t("skills.mobile.desc"),
      icon: <Bot className="h-6 w-6" />,
    },
    {
      title: t("skills.uiux"),
      description: t("skills.uiux.desc"),
      icon: <Palette className="h-6 w-6" />,
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("skills.title")}</h2>
          <div className="h-1 w-20 bg-gray-200 dark:bg-gray-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{t("skills.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="text-gray-500 dark:text-gray-400 mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
