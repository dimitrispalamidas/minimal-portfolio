"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export function Projects() {
  const { t, language } = useLanguage()

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
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
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{t("projects.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link
            href="/work/cloudfin"
            className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="relative h-56 bg-gray-100 dark:bg-gray-900 overflow-hidden">
              <Image
                src="/cloudfin.png"
                alt="CloudFin"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain scale-[1.85] transition-transform duration-500 group-hover:scale-[2]"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
                {language === "en" ? "Day job" : "Full-time"}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">CloudFin</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {language === "en"
                  ? "AI for the Greek public sector: AADE, YPES, Justice, Cadastre."
                  : "AI για το ελληνικό δημόσιο: ΑΑΔΕ, ΥΠΕΣ, Δικαιοσύνη, Κτηματολόγιο."}
              </p>
              <span className="mt-auto text-lg font-medium text-gray-900 dark:text-white group-hover:underline">
                {language === "en" ? "View programs →" : "Δες τα προγράμματα →"}
              </span>
            </div>
          </Link>

          <Link
            href="/work/personal"
            className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="relative h-56 bg-gray-100 dark:bg-gray-900 overflow-hidden">
              <Image
                src="/logo-black2.png"
                alt="Dimitris Palamidas"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-10 transition-transform duration-500 group-hover:scale-105 dark:hidden"
              />
              <Image
                src="/logo-gray2.png"
                alt="Dimitris Palamidas"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-10 transition-transform duration-500 group-hover:scale-105 hidden dark:block"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
                Freelance
              </p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Freelance</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {language === "en"
                  ? "AI products I ship myself — including CallAgent — plus shops, booking, and brand sites."
                  : "AI προϊόντα που φτιάχνω μόνος μου, όπως το CallAgent, μαζί με e-shops, συστήματα κρατήσεων και brand sites."}
              </p>
              <span className="mt-auto text-lg font-medium text-gray-900 dark:text-white group-hover:underline">
                {language === "en" ? "View products →" : "Δες τα προϊόντα →"}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
