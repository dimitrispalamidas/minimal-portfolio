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
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-5xl leading-[1.15]">
            {t("hero.greeting")} Dimitris Palamidas.
            <span className="mt-2 block">{t("hero.role")}.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            {t("hero.description")}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            <Button onClick={scrollToContact} className="rounded-full px-8">
              {t("hero.contact")}
            </Button>
            <a
              href="#projects"
              className="text-sm font-medium text-gray-900 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:underline dark:text-white"
            >
              {t("hero.work")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
