import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { WorkIndex } from "@/components/work-index"
import { workIndexJsonLd } from "@/lib/json-ld"
import { PERSON_JOB_TITLE, PERSON_NAME, SITE_ORIGIN } from "@/lib/site"

const title = `Freelance — ${PERSON_NAME}`
const description =
  "Freelance work by Dimitris Palamidas: AI tools, shops, booking, and brand sites."

export const metadata: Metadata = {
  title: "Freelance",
  description,
  alternates: {
    canonical: "/work/personal",
  },
  openGraph: {
    title,
    description: "AI products, shops, booking, and brand sites shipped freelance.",
    url: `${SITE_ORIGIN}/work/personal`,
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

export default function PersonalWorkPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <JsonLd data={workIndexJsonLd("/work/personal")} />
      <Header />
      <WorkIndex lane="personal" />
      <Footer />
    </div>
  )
}
