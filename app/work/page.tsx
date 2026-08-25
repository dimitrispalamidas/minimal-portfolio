import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { WorkIndex } from "@/components/work-index"
import { workIndexJsonLd } from "@/lib/json-ld"
import { SITE_ORIGIN } from "@/lib/site"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies by Dimitris Palamidas: CloudFin public-sector production, freelance products, and collaborations.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Selected work — Dimitris Palamidas",
    description: "AI products, business tools, and web apps shipped for clients.",
    url: `${SITE_ORIGIN}/work`,
    type: "website",
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
