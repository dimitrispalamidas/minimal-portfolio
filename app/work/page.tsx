import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { WorkIndex } from "@/components/work-index"
import { workIndexJsonLd } from "@/lib/json-ld"
import { PERSON_JOB_TITLE, PERSON_NAME, SITE_ORIGIN } from "@/lib/site"

const title = `Selected work — ${PERSON_NAME}`
const description =
  "Case studies by Dimitris Palamidas: CloudFin public-sector production, freelance products, and collaborations."

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title,
    description: "AI products, business tools, and web apps shipped for clients.",
    url: `${SITE_ORIGIN}/work`,
    siteName: `${PERSON_NAME} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${PERSON_NAME} — ${PERSON_JOB_TITLE} in Athens`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <JsonLd data={workIndexJsonLd()} />
      <Header />
      <WorkIndex />
      <Footer />
    </div>
  )
}
