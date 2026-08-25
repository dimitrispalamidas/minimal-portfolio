"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

export function Hero() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            <span className="block text-3xl md:text-5xl text-gray-500">Dimitris Palamidas</span>
            <span className="block mt-2 text-4xl md:text-6xl">{t("hero.role")}</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} className="rounded-full px-8">
              {t("hero.contact")}
            </Button>
            <Button variant="outline" asChild className="rounded-full px-8">
              <a href="#projects">{t("hero.work")}</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
