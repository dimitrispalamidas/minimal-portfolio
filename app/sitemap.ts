import type { MetadataRoute } from "next"
import { projects } from "@/lib/projects"
import { SITE_ORIGIN } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: SITE_ORIGIN,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_ORIGIN}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_ORIGIN}/work/personal`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...projects.map((project) => ({
      url: `${SITE_ORIGIN}/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
