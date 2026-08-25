"use client"

import { motion } from "framer-motion"
import { Download, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

export function Resume() {
  const { t, language } = useLanguage()

  const experiences = [
    {
      title: "Full Stack & AI Engineer",
      company: "CloudFin",
      period: language === "en" ? "12/2025 - Present" : "12/2025 - Σήμερα",
      description:
        language === "en"
          ? "I own AADE and YPES in production. I also contribute on Justice and Cadastre digitization."
          : "Είμαι υπεύθυνος για την ΑΑΔΕ και το ΥΠΕΣ, που τρέχουν σε production. Παράλληλα συνεισφέρω στην ψηφιοποίηση για τη Δικαιοσύνη και το Κτηματολόγιο.",
      href: "/work/cloudfin",
    },
    {
      title: "Front End Developer",
      company: "CloudFin",
      period: "11/2024 - 12/2025",
      description:
        language === "en"
          ? "Built enterprise Angular applications with Telerik Kendo UI for document workflows, data-heavy grids, and API integrations on CloudFin's B2B finance platform."
          : "Ανέπτυξα enterprise εφαρμογές σε Angular με Telerik Kendo UI για ροές διαχείρισης εγγράφων, grids με μεγάλο όγκο δεδομένων και integrations με APIs, πάνω στη B2B finance πλατφόρμα της CloudFin.",
    },
    {
      title: "Full Stack Developer",
      company: language === "en" ? "Self-employed" : "Ελεύθερος επαγγελματίας",
      period: language === "en" ? "11/2023 - Present" : "11/2023 - Σήμερα",
      description:
        language === "en"
          ? "End-to-end freelance across AI products, e-commerce, booking, contractor tools, and brand sites."
          : "Freelance έργα από την αρχή ως το τέλος: AI προϊόντα, e-shops, συστήματα κρατήσεων, εργαλεία για εργολάβους και brand sites.",
    },
  ]

  const education = [
    {
      degree: language === "en" ? "Computer Software" : "Πληροφορική",
      institution:
        language === "en"
          ? "Coding Factory, Athens University of Economics and Business"
          : "Coding Factory, Οικονομικό Πανεπιστήμιο Αθηνών",
      period: "10/2023",
      description:
        language === "en"
          ? "7-month vocational boot camp. Certificate in Computer Software."
          : "Εντατικό επαγγελματικό πρόγραμμα επτά μηνών. Πιστοποιητικό στην Πληροφορική.",
    },
    {
      degree: language === "en" ? "BSc, Merchant Marine Officer" : "Πτυχίο Αξιωματικού Εμπορικού Ναυτικού",
      institution:
        language === "en" ? "Merchant Marine Academy of Aspropyrgos" : "Ακαδημία Εμπορικού Ναυτικού Ασπροπύργου",
      period: "10/2019",
    },
  ]

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("resume.title")}</h2>
          <div className="h-1 w-20 bg-gray-200 dark:bg-gray-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{t("resume.description")}</p>
          <Button asChild className="rounded-full gap-2">
            <a
              href="/files/Dimitris_Palamidas_Full_Stack_AI_Engineer.pdf"
              download="Dimitris_Palamidas_Full_Stack_AI_Engineer.pdf"
            >
              <Download className="h-4 w-4" />
              {t("resume.download")}
            </a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-gray-500 dark:text-gray-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t("resume.experience")}</h3>
            </div>

            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 ml-3">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                    {"href" in exp && exp.href ? (
                      <Link
                        href={exp.href}
                        className="inline-block mt-4 text-lg font-medium text-gray-900 dark:text-white hover:underline"
                      >
                        {language === "en" ? "Case study →" : "Case study →"}
                      </Link>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-gray-500 dark:text-gray-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t("resume.education")}</h3>
            </div>

            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 ml-3">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.period}</span>
                    </div>
                    {"description" in edu && edu.description ? (
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{edu.description}</p>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
