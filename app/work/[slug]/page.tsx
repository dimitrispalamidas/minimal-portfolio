import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { CaseStudy } from "@/components/case-study"
import { workJsonLd } from "@/lib/json-ld"
import { getProjectBySlug, projects } from "@/lib/projects"
import { PERSON_NAME, SITE_ORIGIN } from "@/lib/site"

type WorkPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) {
    return {
      title: "Page not found",
      robots: { index: false, follow: false },
    }
  }

  const url = `${SITE_ORIGIN}/work/${project.slug}`
  const socialTitle = `${project.title} | ${PERSON_NAME}`
  return {
    title: project.title,
    description: project.description.en,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: socialTitle,
      description: project.description.en,
      url,
      siteName: `${PERSON_NAME} Portfolio`,
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: project.description.en,
    },
  }
}

export default async function WorkCaseStudyPage({ params }: WorkPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <JsonLd data={workJsonLd(project.slug, project.title, project.description.en, project.image)} />
      <Header />
      <CaseStudy project={project} />
      <Footer />
    </div>
  )
}
