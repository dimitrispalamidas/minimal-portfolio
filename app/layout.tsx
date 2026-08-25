import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { ReactNode } from "react"
import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { JsonLd } from "@/components/json-ld"
import { websiteJsonLd } from "@/lib/json-ld"
import { PERSON_JOB_TITLE, PERSON_NAME, SITE_ORIGIN } from "@/lib/site"

const inter = Inter({ subsets: ["latin", "greek"] })

export const metadata: Metadata = {
  title: {
    default: `${PERSON_NAME} | ${PERSON_JOB_TITLE}`,
    template: `%s | ${PERSON_NAME}`,
  },
  description:
    "Full Stack & AI Engineer in Athens. At CloudFin I own AADE human verification after dual-LLM extraction, and YPES ministry-evidence evaluation. I contribute on Justice and Cadastre digitization. Freelance is separate: web products, e-commerce, and AI for founders and operators.",
  icons: {
    icon: "/logo-gray.png",
    shortcut: "/logo-gray.png",
    apple: "/logo-gray.png",
  },
  keywords: [
    "Dimitris Palamidas",
    "Full Stack Engineer Athens",
    "AI Engineer Greece",
    "freelance Next.js developer",
    "AI voice agent",
    "RAG engineer",
    "e-commerce Greece",
    "Viva Wallet developer",
    "AADE myDATA",
    "ΕΡΓΑΝΗ software",
    "hire freelance developer Greece",
    "Justice",
    "YPES",
    "AADE",
    "Cadastre",
    "Κτηματολόγιο",
  ],
  authors: [{ name: PERSON_NAME, url: SITE_ORIGIN }],
  creator: PERSON_NAME,
  publisher: PERSON_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_ORIGIN),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${PERSON_NAME} | ${PERSON_JOB_TITLE}`,
    description:
      "Production AI, web products, and business software. Athens-based, booking freelance work.",
    url: SITE_ORIGIN,
    siteName: `${PERSON_NAME} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSON_NAME} | ${PERSON_JOB_TITLE}`,
    description:
      "Full-time at CloudFin and freelance for clients. AI, Next.js, and Greek business software.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "r-jB5H88Xpu4DdV-CdFwBga0675VQ-fiMFQ91_KzJLE",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <JsonLd data={websiteJsonLd()} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
