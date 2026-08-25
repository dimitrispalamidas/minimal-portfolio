import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dimitris Palamidas — Full Stack & AI Engineer",
    short_name: "Dimitris Palamidas",
    description: "Portfolio of Dimitris Palamidas. AI products, web apps, and business software from Athens.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo-gray.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  }
}
