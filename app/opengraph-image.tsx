import { ImageResponse } from "next/og"

export const alt = "Dimitris Palamidas — Full Stack & AI Engineer in Athens"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
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
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#a1a1aa", textTransform: "uppercase" }}>
          Athens · Greece
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>Dimitris Palamidas</div>
          <div style={{ fontSize: 36, color: "#d4d4d8" }}>Full Stack & AI Engineer</div>
          <div style={{ fontSize: 26, color: "#a1a1aa", maxWidth: 860 }}>
            Production AI, web products, and business software for founders who need it shipped.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#a1a1aa" }}>dimitrispalamidas.com</div>
      </div>
    ),
    { ...size }
  )
}
