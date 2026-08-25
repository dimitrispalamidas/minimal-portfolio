import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { WorkIndex } from "@/components/work-index"
import { workIndexJsonLd } from "@/lib/json-ld"
import { SITE_ORIGIN } from "@/lib/site"

export const metadata: Metadata = {
  title: "Freelance",
  description:
    "Freelance work by Dimitris Palamidas: AI tools, shops, booking, and brand sites.",
  alternates: {
    canonical: "/work/personal",
  },
  openGraph: {
    title: "Freelance — Dimitris Palamidas",
    description: "AI products, shops, booking, and brand sites shipped freelance.",
    url: `${SITE_ORIGIN}/work/personal`,
    type: "website",
  },
}

export default function PersonalWorkPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <JsonLd data={workIndexJsonLd()} />
      <Header />
      <WorkIndex lane="personal" />
      <Footer />
    </div>
  )
}
