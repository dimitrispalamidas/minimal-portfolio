import { gridProjects } from "@/lib/projects"
import {
  GITHUB_URL,
  LINKEDIN_URL,
  PERSON_EMAIL,
  PERSON_ID,
  PERSON_JOB_TITLE,
  PERSON_NAME,
  PERSON_PHONE,
  SERVICE_ID,
  SITE_ORIGIN,
  WEBSITE_ID,
} from "@/lib/site"

const personImage = `${SITE_ORIGIN}/dimitrispalamidas.jpg`

export function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON_NAME,
    url: SITE_ORIGIN,
    image: personImage,
    jobTitle: PERSON_JOB_TITLE,
    email: PERSON_EMAIL,
    telephone: PERSON_PHONE,
    description:
      "Full Stack & AI Engineer in Athens. At CloudFin I own AADE human verification after dual-LLM extraction, and YPES ministry-evidence evaluation. I contribute on Justice and Cadastre digitization. Freelance is separate: web products, e-commerce, and AI for founders and operators.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Athens",
      addressCountry: "GR",
    },
    worksFor: {
      "@type": "Organization",
      name: "CloudFin",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "Angular",
      "Python",
      "FastAPI",
      "Large Language Models",
      "RAG",
      "Twilio",
      "Supabase",
      "Viva Wallet",
      "AADE myDATA",
    ],
    sameAs: [GITHUB_URL, LINKEDIN_URL],
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: `${PERSON_NAME} | ${PERSON_JOB_TITLE}`,
    url: SITE_ORIGIN,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  }
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(),
      {
        "@type": "ProfilePage",
        "@id": `${SITE_ORIGIN}/#profile`,
        url: SITE_ORIGIN,
        name: `${PERSON_NAME} | ${PERSON_JOB_TITLE}`,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
        about: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfessionalService",
        "@id": SERVICE_ID,
        name: `${PERSON_NAME} — freelance product engineering`,
        url: SITE_ORIGIN,
        image: personImage,
        founder: { "@id": PERSON_ID },
        employee: { "@id": PERSON_ID },
        areaServed: [
          { "@type": "Country", name: "Greece" },
          { "@type": "Place", name: "Remote" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Athens",
          addressCountry: "GR",
        },
        serviceType: [
          "Website design",
          "Full stack web development",
          "E-commerce",
          "AI product engineering",
          "Intelligent document processing",
        ],
      },
    ],
  }
}

export function workIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Selected work — Dimitris Palamidas",
    url: `${SITE_ORIGIN}/work`,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    hasPart: gridProjects().map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      url: `${SITE_ORIGIN}/work/${project.slug}`,
    })),
  }
}

export function workJsonLd(slug: string, title: string, description: string) {
  const url = `${SITE_ORIGIN}/work/${slug}`
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_ORIGIN,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: `${SITE_ORIGIN}/work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: url,
          },
        ],
      },
      {
        "@type": "CreativeWork",
        name: title,
        url,
        description,
        author: { "@id": PERSON_ID },
        creator: { "@id": PERSON_ID },
        inLanguage: "en",
      },
    ],
  }
}
