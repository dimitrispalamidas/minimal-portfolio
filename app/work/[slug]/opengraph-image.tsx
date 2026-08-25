import { ImageResponse } from "next/og"
import { getProjectBySlug } from "@/lib/projects"

export const alt = "Case study — Dimitris Palamidas"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

type ImageProps = {
  params: Promise<{ slug: string }>
}

export default async function WorkOpenGraphImage({ params }: ImageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  const title = project?.title ?? "Selected work"
  const subtitle = project?.description.en ?? "Full Stack & AI engineering"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f1115",
          color: "#f4f4f5",
          padding: "72px 80px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 20, letterSpacing: 3, color: "#a1a1aa", textTransform: "uppercase" }}>
          Case study
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 58, lineHeight: 1.1, fontWeight: 700 }}>{title}</div>
          <div style={{ fontSize: 26, color: "#a1a1aa", maxWidth: 900 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#a1a1aa" }}>
          Dimitris Palamidas · dimitrispalamidas.com
        </div>
      </div>
    ),
    { ...size }
  )
}
