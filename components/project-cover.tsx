import Image from "next/image"
import type { Project } from "@/lib/projects"

type ProjectCoverProps = {
  project: Project
  alt: string
  sizes: string
  priority?: boolean
  className?: string
}

export function ProjectCover({ project, alt, sizes, priority, className }: ProjectCoverProps) {
  if (!project.image) {
    return null
  }

  const fit = project.imageFit ?? "cover"
  const fitClass =
    fit === "contain"
      ? "object-contain scale-[1.85] transition-transform duration-500 group-hover:scale-[2]"
      : "object-cover object-top transition-transform duration-500 group-hover:scale-105"

  return (
    <Image
      src={project.image}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`${fitClass} ${className ?? ""}`.trim()}
    />
  )
}
