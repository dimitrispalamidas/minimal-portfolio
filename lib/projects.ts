export type ProjectCategory = "webapp" | "landing" | "ecommerce" | "ai" | "business"

export type Project = {
  title: string
  description: { en: string; el: string }
  image?: string
  category: ProjectCategory
  tags: { en: string[]; el: string[] }
  demoLink?: string
  githubLink?: string
}

export const projects: Project[] = [
  {
    title: "GoTheLocalWay",
    description: {
      en: "AI-first travel platform: guests describe a trip, get local experience cards, and book. Built with Dimitris Kountanis — chatbot, booking UX, and date-aware AI replies.",
      el: "AI travel πλατφόρμα: ο επισκέπτης περιγράφει το ταξίδι, παίρνει κάρτες εμπειριών από locals και κλείνει. Σε συνεργασία με τον Δημήτρη Κουντάνη — chatbot, booking UX και AI που μένει στις ζητούμενες ημερομηνίες.",
    },
    image: "/gtlw.png",
    category: "ai",
    tags: {
      en: ["Next.js", "AI Chat", "Stripe", "Booking"],
      el: ["Next.js", "AI Chat", "Stripe", "Κρατήσεις"],
    },
    demoLink: "https://www.gothelocalway.com",
  },
  {
    title: "Qbonet Copilot",
    description: {
      en: "Infrastructure costing for engineers and contractors: project budgets, ratebooks, price tiers, PDF exports, orgs and permissions. Core contributor on budgets, onboarding, and access control.",
      el: "Πλατφόρμα προϋπολογισμών έργων υποδομής: budgets, τιμολόγια, κλίμακες τιμών, PDF, οργανισμοί και δικαιώματα. Κύρια συνεισφορά σε budgets, onboarding και permissions.",
    },
    image: "/qbonet.png",
    category: "business",
    tags: {
      en: ["Next.js", "Budgets", "PDF", "AI Copilot"],
      el: ["Next.js", "Προϋπολογισμοί", "PDF", "AI Copilot"],
    },
    demoLink: "https://water-ops.vercel.app",
  },
  {
    title: "CallAgent",
    description: {
      en: "Multi-org AI call center: inbound Twilio number, OpenAI Realtime voice agent, RAG knowledge base, and transfer to a human when needed.",
      el: "AI τηλεφωνικό κέντρο ανά οργανισμό: εισερχόμενη κλήση Twilio, OpenAI Realtime voice agent, RAG βάση γνώσης και μεταφορά σε άνθρωπο όταν χρειάζεται.",
    },
    image: "/call-agent.png",
    category: "ai",
    tags: {
      en: ["Twilio", "OpenAI Realtime", "RAG", "Supabase"],
      el: ["Twilio", "OpenAI Realtime", "RAG", "Supabase"],
    },
    demoLink: "https://call-agent-livid.vercel.app",
    githubLink: "https://github.com/dimitrispalamidas/call-agent",
  },
  {
    title: "Messinian Stays",
    description: {
      en: "Dual-domain short-term rental platform: B2B marketing for owners and B2C booking for guests. Supabase, Viva Wallet, calendars, and bilingual EL/EN.",
      el: "Πλατφόρμα βραχυχρόνιας μίσθωσης με δύο surfaces: marketing για ιδιοκτήτες και booking για επισκέπτες. Supabase, Viva Wallet, ημερολόγια και EL/EN.",
    },
    image: "/messinian-stays.png",
    category: "webapp",
    tags: {
      en: ["Next.js", "Booking", "Viva Wallet", "Supabase"],
      el: ["Next.js", "Κρατήσεις", "Viva Wallet", "Supabase"],
    },
    demoLink: "https://airbnb-management-azure.vercel.app/el",
    githubLink: "https://github.com/dimitrispalamidas/airbnb-management",
  },
  {
    title: "Tinkerbell",
    description: {
      en: "Children's clothing and baptism e-shop in Kalamata: catalog, payments, shipping, and an admin panel.",
      el: "E-shop παιδικών ρούχων και βαπτιστικών στην Καλαμάτα: κατάλογος, πληρωμές, αποστολές και admin panel.",
    },
    image: "/tinkerbell-live.png",
    category: "ecommerce",
    tags: {
      en: ["Next.js", "E-commerce", "Payments", "Admin"],
      el: ["Next.js", "E-shop", "Πληρωμές", "Admin"],
    },
    demoLink: "https://tinkerbell-e-shop.vercel.app",
    githubLink: "https://github.com/dimitrispalamidas/tinkerbell-e-shop",
  },
  {
    title: "Enjoy Sleep",
    description: {
      en: "Editorial brand site for a mattress and bed shop in Pangrati, Athens. Catalog, bilingual EL/EN, and local SEO.",
      el: "Brand site στρωμάτων και κρεβατιών στο Παγκράτι: editorial κατάλογος, EL/EN και τοπικό SEO.",
    },
    image: "/enjoy-sleep.png",
    category: "landing",
    tags: {
      en: ["Next.js", "Brand site", "Catalog", "EL/EN"],
      el: ["Next.js", "Brand site", "Κατάλογος", "EL/EN"],
    },
    demoLink: "https://enjoy-sleep.com.gr",
    githubLink: "https://github.com/dimitrispalamidas/v0-enjoy-sleep-website",
  },
  {
    title: "ΚΟΚ Θεωρία",
    description: {
      en: "Greek driving-theory PWA for the Κώδικας Οδικής Κυκλοφορίας: practice by topic, timed mock exams, streaks, and user ranking.",
      el: "PWA για τη θεωρητική εξέταση ΚΟΚ: εξάσκηση ανά ενότητα, mock διαγωνίσματα με χρόνο, streaks και κατάταξη.",
    },
    image: "/kok-theoria.png",
    category: "webapp",
    tags: {
      en: ["Next.js", "PWA", "Supabase", "Exams"],
      el: ["Next.js", "PWA", "Supabase", "Διαγωνίσματα"],
    },
    demoLink: "https://kok-practice.vercel.app",
    githubLink: "https://github.com/dimitrispalamidas/kok-practice",
  },
  {
    title: "SafeCard Ergani",
    description: {
      en: "Payroll dashboard UI for ΕΡΓΑΝΗ / SafeCard: employee cards, hours, and compliance-oriented workflows.",
      el: "Dashboard μισθοδοσίας για ΕΡΓΑΝΗ / SafeCard: κάρτες εργαζομένων, ώρες και ροές συμμόρφωσης.",
    },
    image: "/ergani.png",
    category: "webapp",
    tags: {
      en: ["Next.js", "Dashboard", "ΕΡΓΑΝΗ", "HR"],
      el: ["Next.js", "Dashboard", "ΕΡΓΑΝΗ", "HR"],
    },
    demoLink: "https://ergani-safe-card.vercel.app",
    githubLink: "https://github.com/dimitrispalamidas/ergani-safe-card",
  },
  {
    title: "Λάζος - Λιθοδομικές Εργασίες",
    description: {
      en: "Client product for a masonry business: customers, quotes, invoices, and PDF export. Next.js and Supabase.",
      el: "Προϊόν για επιχείρηση τοιχοποιίας: πελάτες, προσφορές, τιμολόγια και εξαγωγή PDF. Next.js και Supabase.",
    },
    image: "/lazos.png",
    category: "business",
    tags: {
      en: ["Next.js", "Supabase", "Quotes", "PDF"],
      el: ["Next.js", "Supabase", "Προσφορές", "PDF"],
    },
  },
  {
    title: "Personal Finance",
    description: {
      en: "Finance OS for a Greek sole proprietor: AADE myDATA books, VAT, income tax, monthly budget, and bank sync. Screenshot only — not a public demo.",
      el: "Οικονομικό σύστημα για ατομική επιχείρηση: βιβλία ΑΑΔΕ myDATA, ΦΠΑ, φόρος εισοδήματος, μηνιαίος προϋπολογισμός και σύνδεση τραπεζών. Μόνο screenshot — όχι δημόσιο demo.",
    },
    image: "/mydata.png",
    category: "business",
    tags: {
      en: ["Next.js", "AADE myDATA", "VAT", "Banking"],
      el: ["Next.js", "ΑΑΔΕ myDATA", "ΦΠΑ", "Τράπεζες"],
    },
  },
]
