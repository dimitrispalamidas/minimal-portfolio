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

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) {
    return { title: "Work" }
  }

  const url = `${SITE_ORIGIN}/work/${project.slug}`
  return {
    title: project.title,
    description: project.description.en,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${PERSON_NAME}`,
      description: project.description.en,
      url,
      type: "article",
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
      <JsonLd data={workJsonLd(project.slug, project.title, project.description.en)} />
      <Header />
      <CaseStudy project={project} />
      <Footer />
    </div>
  )
}
