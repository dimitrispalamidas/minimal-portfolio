"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Linkedin, Github, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { useLanguage } from "./language-provider"
import { GITHUB_URL, LINKEDIN_URL, PERSON_EMAIL, PERSON_PHONE, CAL_URL } from "@/lib/site"
import emailjs from "@emailjs/browser"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_4w6lyb6",
        "template_cq4jwe9",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: PERSON_EMAIL,
        },
        "HdcYJYH7f32HfwcPg",
      )

      toast({
        title: t("contact.success"),
        description: t("contact.success.desc"),
        variant: "success",
      })
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: t("contact.error"),
        description: t("contact.error.desc"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const details = [
    { icon: Calendar, label: t("contact.call"), href: CAL_URL, value: t("contact.book") },
    { icon: Mail, label: t("contact.email"), href: `mailto:${PERSON_EMAIL}`, value: PERSON_EMAIL },
    { icon: Phone, label: t("contact.phone"), href: `tel:${PERSON_PHONE}`, value: "+30 6978916927" },
    {
      icon: MapPin,
      label: t("contact.location"),
      href: "https://www.google.com/maps?q=Athens,Greece",
      value: "Athens, Greece",
    },
    { icon: Linkedin, label: "LinkedIn", href: LINKEDIN_URL, value: "dimitris-palamidas" },
    { icon: Github, label: "GitHub", href: GITHUB_URL, value: "dimitrispalamidas" },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("contact.title")}</h2>
          <div className="h-1 w-20 bg-gray-200 dark:bg-gray-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{t("contact.description")}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {details.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800">
                      <item.icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">{item.label}</h3>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <Button asChild className="w-full gap-2 rounded-full">
                <a href={CAL_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4" />
                  {t("contact.book")}
                </a>
              </Button>
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">{t("contact.orMessage")}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("contact.name")}
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("contact.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("contact.phone")}{" "}
                  <span className="text-gray-400 font-normal">({t("contact.optional")})</span>
                </label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" className="w-full gap-2 rounded-full" disabled={isSubmitting}>
                <Send className="h-4 w-4" />
                {isSubmitting ? t("contact.sending") : t("contact.send")}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
