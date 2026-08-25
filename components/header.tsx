"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useLanguage } from "./language-provider"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/#about", en: "About", el: "Σχετικά" },
    { href: "/#projects", en: "Work", el: "Έργα" },
    { href: "/#skills", en: "Skills", el: "Δεξιότητες" },
    { href: "/#resume", en: "Experience", el: "Εμπειρία" },
    { href: "/#contact", en: "Contact", el: "Επικοινωνία" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" aria-label="Dimitris Palamidas — Full Stack & AI Engineer">
          <Image
            src="/logo-black2.png"
            alt="Dimitris Palamidas"
            width={100}
            height={100}
            priority
            className="dark:hidden"
          />
          <Image
            src="/logo-gray2.png"
            alt="Dimitris Palamidas"
            width={100}
            height={100}
            priority
            className="hidden dark:block"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {language === "en" ? link.en : link.el}
              </Link>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "el" : "en")}
            className="text-sm font-medium"
          >
            {language === "en" ? "EN" : "EL"}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "en" ? "el" : "en")}>
            {language === "en" ? "EN" : "EL"}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <nav className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === "en" ? link.en : link.el}
            </Link>
          ))}
          <Link
            href="/work"
            className="block px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {language === "en" ? "All work" : "Όλα τα έργα"}
          </Link>
        </nav>
      ) : null}
    </header>
  )
}
