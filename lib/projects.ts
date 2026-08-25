export type ProjectCategory = "webapp" | "landing" | "ecommerce" | "ai" | "business"

export type LocalizedText = { en: string; el: string }

export type ProjectStatus = "production" | "live" | "prototype" | "personal"

export type ProjectRole = "built" | "contributor"

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, LocalizedText> = {
  production: { en: "In production", el: "Σε production" },
  live: { en: "Live", el: "Live" },
  prototype: { en: "UI prototype", el: "UI prototype" },
  personal: { en: "Personal product", el: "Προσωπικό προϊόν" },
}

export const PROJECT_ROLE_LABEL: Record<ProjectRole, LocalizedText> = {
  built: { en: "Built end-to-end", el: "Δικό μου, end-to-end" },
  contributor: { en: "Core contributor", el: "Core contributor" },
}

export interface ProjectProgram {
  name: LocalizedText
  role: LocalizedText
  body: LocalizedText
}

export type Project = {
  slug: string
  title: string
  description: LocalizedText
  problem: LocalizedText
  outcome: LocalizedText
  programs?: ProjectProgram[]
  image?: string
  imageFit?: "cover" | "contain"
  categories: ProjectCategory[]
  tags: { en: string[]; el: string[] }
  status: ProjectStatus
  role: ProjectRole
  demoLink?: string
  githubLink?: string
  inGrid?: boolean
  lane?: "cloudfin" | "personal"
}

export const projects: Project[] = [
  {
    slug: "cloudfin",
    title: "CloudFin — public-sector production",
    description: {
      en: "Full-time at CloudFin (AUSTRIACARD). Four production programs for the Greek public sector. Three are document HITL (tax, courts, cadastre). One is ministry evidence evaluation.",
      el: "Full-time στην CloudFin (AUSTRIACARD). Τέσσερα production προγράμματα για το ελληνικό δημόσιο. Τρία είναι document HITL (φορολογία, δικαστήρια, κτηματολόγιο). Ένα είναι αξιολόγηση τεκμηρίων υπουργείων.",
    },
    problem: {
      en: "Scans and uploads do not become usable data by themselves. Tax documents need a human to settle two LLM extracts. Court and cadastre folders need double keying and a third reviewer. Ministries need to know if a file is actually valid proof for a target.",
      el: "Τα scans και τα uploads δεν γίνονται μόνα τους χρήσιμα δεδομένα. Τα φορολογικά θέλουν άνθρωπο να κλείσει δύο LLM εξαγωγές. Οι φάκελοι δικαστηρίων και κτηματολογίου θέλουν διπλή καταχώρηση και τρίτο έλεγχο. Τα υπουργεία θέλουν να ξέρουν αν το αρχείο είναι όντως έγκυρο τεκμήριο για έναν στόχο.",
    },
    outcome: {
      en: "All four are in production, used by operators or ministry systems.",
      el: "Και τα τέσσερα είναι σε production, με χειριστές ή συστήματα υπουργείων.",
    },
    programs: [
      {
        name: { en: "AADE", el: "ΑΑΔΕ" },
        role: { en: "I own delivery", el: "Έχω την παράδοση" },
        body: {
          en: "Human verification after dual-LLM extraction on tax documents. Operators compare the two engines side-by-side, write the verified record, and run HOLD / supervisor / PM returns. Two engineers on the work. Day-to-day delivery is mine.",
          el: "Human verification μετά από dual-LLM εξαγωγή σε φορολογικά έγγραφα. Οι χειριστές συγκρίνουν τις δύο μηχανές δίπλα-δίπλα, γράφουν την επαληθευμένη εγγραφή και τρέχουν HOLD / supervisor / επιστροφές PM. Δύο μηχανικοί στη δουλειά. Η καθημερινή παράδοση είναι δική μου.",
        },
      },
      {
        name: { en: "YPES", el: "ΥΠΕΣ" },
        role: { en: "I own delivery", el: "Έχω την παράδοση" },
        body: {
          en: "Ministry evidence platform — not digitization. Azure OpenAI judges whether uploaded files are suitable proof for a declared target or indicator (readable, signed, actually proving it) — not whether the target was met. Batch assessment plus an API into the national target-setting system. Two engineers on the work. Day-to-day delivery is mine.",
          el: "Πλατφόρμα τεκμηρίων υπουργείων — όχι ψηφιοποίηση. Το Azure OpenAI κρίνει αν τα ανεβασμένα αρχεία είναι κατάλληλο αποδεικτικό για δηλωμένο στόχο ή δείκτη (διαβάζεται, έχει υπογραφή, αποδεικνύει) — όχι αν ο στόχος ολοκληρώθηκε. Μαζική αξιολόγηση και API στο εθνικό σύστημα στοχοθεσίας. Δύο μηχανικοί στη δουλειά. Η καθημερινή παράδοση είναι δική μου.",
        },
      },
      {
        name: { en: "Hellenic Justice", el: "Δικαιοσύνη" },
        role: { en: "Core contributor", el: "Core contributor" },
        body: {
          en: "Court-folder digitization: two operators independently key the same scans; a third-eye reviewer resolves disagreements. Admin dashboard for progress and workload. Separate LLM pipeline (Gemini / Vertex) writes extraction for operators to review.",
          el: "Ψηφιοποίηση δικαστικών φακέλων: δύο χειριστές καταχωρούν ανεξάρτητα τα ίδια scans· third-eye λύνει τις διαφωνίες. Admin dashboard για πρόοδο και φόρτο. Ξεχωριστό LLM pipeline (Gemini / Vertex) γράφει εξαγωγή για έλεγχο.",
        },
      },
      {
        name: { en: "Hellenic Cadastre", el: "Κτηματολόγιο" },
        role: { en: "Core contributor", el: "Core contributor" },
        body: {
          en: "Land-registry digitization, same HITL pattern as Justice: LLM extraction copied onto the operator record, difference navigation between versions, export workflows.",
          el: "Ψηφιοποίηση κτηματολογίου, ίδιο HITL μοτίβο με τη Δικαιοσύνη: εξαγωγή LLM στην εγγραφή του χειριστή, πλοήγηση διαφορών μεταξύ εκδόσεων, ροές export.",
        },
      },
    ],
    categories: ["ai", "business"],
    tags: {
      en: ["AADE", "YPES", "Justice", "Cadastre", "IDP"],
      el: ["ΑΑΔΕ", "ΥΠΕΣ", "Δικαιοσύνη", "Κτηματολόγιο", "IDP"],
    },
    status: "production",
    role: "contributor",
    image: "/cloudfin.png",
    imageFit: "contain",
    demoLink: "https://cloudf.in",
    inGrid: true,
    lane: "cloudfin",
  },
  {
    slug: "gothelocalway",
    title: "GoTheLocalWay",
    description: {
      en: "Live AI travel product. Chatbot, booking UX, and date-aware AI replies. Guests describe a trip, get local experience cards, and book.",
      el: "Live AI travel προϊόν. Chatbot, booking UX και AI που μένει στις ημερομηνίες. Ο επισκέπτης περιγράφει το ταξίδι, παίρνει κάρτες εμπειριών και κλείνει.",
    },
    problem: {
      en: "Travel sites dump generic lists. Guests wanted a trip that felt local, with dates that the assistant actually respected.",
      el: "Τα travel sites δίνουν γενικές λίστες. Οι επισκέπτες ήθελαν ταξίδι με τοπικό χαρακτήρα και ημερομηνίες που ο βοηθός τηρεί.",
    },
    outcome: {
      en: "In production on gothelocalway.com: chat in, experience cards out, Stripe checkout. My merged work includes the chatbot v1, booking UX, and anchoring answers to the requested travel window.",
      el: "Σε production στο gothelocalway.com: chat, κάρτες εμπειριών, Stripe. Η δική μου συνεισφορά: chatbot v1, booking UX και απαντήσεις δεμένες στο ζητούμενο διάστημα ταξιδιού.",
    },
    image: "/gtlw.png",
    categories: ["ai"],
    tags: {
      en: ["Next.js", "AI Chat", "Stripe", "Booking"],
      el: ["Next.js", "AI Chat", "Stripe", "Κρατήσεις"],
    },
    status: "production",
    role: "contributor",
    demoLink: "https://www.gothelocalway.com",
  },
  {
    slug: "qbonet-copilot",
    title: "Qbonet Copilot",
    description: {
      en: "Live B2B costing for infrastructure jobs. Core contributor: project budgets, ratebooks, onboarding, orgs and permissions, PDF-ready offers.",
      el: "Live B2B κοστολόγηση έργων υποδομής. Core contributor: budgets, τιμολόγια, onboarding, οργανισμοί/δικαιώματα, προσφορές έτοιμες για PDF.",
    },
    problem: {
      en: "Contractors priced jobs in spreadsheets. Ratebooks, tiers, and offers lived in different tools with no access control.",
      el: "Οι εργολάβοι κοστολογούσαν σε spreadsheets. Τιμολόγια, κλίμακες και προσφορές ήταν διάσπαρτα, χωρίς δικαιώματα.",
    },
    outcome: {
      en: "A live multi-org workspace. My merged work covers budget import, ratebook items, save/edit flows, tabbed line items, onboarding, and organization permissions.",
      el: "Live workspace ανά οργανισμό. Η συνεισφορά μου: import budgets, είδη τιμολογίου, ροές αποθήκευσης, καρτέλες γραμμών, onboarding και permissions οργανισμού.",
    },
    image: "/qbonet.png",
    categories: ["ai", "business"],
    tags: {
      en: ["Next.js", "Budgets", "PDF", "Permissions"],
      el: ["Next.js", "Προϋπολογισμοί", "PDF", "Δικαιώματα"],
    },
    status: "live",
    role: "contributor",
    demoLink: "https://qbonet.vercel.app",
  },
  {
    slug: "callagent",
    title: "CallAgent",
    description: {
      en: "Inbound Twilio, OpenAI Realtime voice, RAG, transfer to a human. Live demo I built end-to-end.",
      el: "Εισερχόμενος Twilio, OpenAI Realtime φωνή, RAG, μεταφορά σε άνθρωπο. Live demo που έφτιαξα end-to-end.",
    },
    problem: {
      en: "Small teams miss calls or park people on hold. They needed an agent that knows the business and can hand off.",
      el: "Μικρές ομάδες χάνουν κλήσεις ή βάζουν αναμονή. Χρειαζόντουσαν agent που ξέρει την επιχείρηση και περνάει σε άνθρωπο.",
    },
    outcome: {
      en: "A running multi-org demo: Twilio in, realtime voice, RAG, human transfer.",
      el: "Τρέχει ως multi-org demo: Twilio, realtime φωνή, RAG, μεταφορά σε άνθρωπο.",
    },
    image: "/call-agent.png",
    categories: ["ai"],
    tags: {
      en: ["Twilio", "OpenAI Realtime", "RAG", "Supabase"],
      el: ["Twilio", "OpenAI Realtime", "RAG", "Supabase"],
    },
    status: "live",
    role: "built",
    demoLink: "https://call-agent-livid.vercel.app",
    githubLink: "https://github.com/dimitrispalamidas/call-agent",
  },
  {
    slug: "messinian-stays",
    title: "Messinian Stays",
    description: {
      en: "Short-term rental platform I built: owner marketing site and guest booking, Supabase, Viva Wallet, calendars, EL/EN.",
      el: "Πλατφόρμα βραχυχρόνιας μίσθωσης που έφτιαξα: site ιδιοκτητών και booking επισκεπτών, Supabase, Viva Wallet, ημερολόγια, EL/EN.",
    },
    problem: {
      en: "Owners needed a sales site. Guests needed to book and pay in Greece, in two languages, with real availability.",
      el: "Οι ιδιοκτήτες ήθελαν sales site. Οι επισκέπτες κράτηση και πληρωμή στην Ελλάδα, δύο γλώσσες, πραγματική διαθεσιμότητα.",
    },
    outcome: {
      en: "Two surfaces, one backend, live: Viva Wallet, calendars, bilingual EL/EN.",
      el: "Δύο surfaces, ένα backend, live: Viva Wallet, ημερολόγια, EL/EN.",
    },
    image: "/messinian-stays.png",
    categories: ["webapp"],
    tags: {
      en: ["Next.js", "Booking", "Viva Wallet", "Supabase"],
      el: ["Next.js", "Κρατήσεις", "Viva Wallet", "Supabase"],
    },
    status: "live",
    role: "built",
    demoLink: "https://airbnb-management-azure.vercel.app/el",
    githubLink: "https://github.com/dimitrispalamidas/airbnb-management",
  },
  {
    slug: "lazos",
    title: "Λάζος - Λιθοδομικές Εργασίες",
    description: {
      en: "Client product in production for a masonry business: customers, quotes, invoices, PDF. They log in and run the company on it.",
      el: "Client προϊόν σε production για επιχείρηση τοιχοποιίας: πελάτες, προσφορές, τιμολόγια, PDF. Μπαίνουν και τρέχουν την εταιρεία πάνω του.",
    },
    problem: {
      en: "Quotes and invoices were done by hand. They needed a Greek-language tool that matches how a contractor actually works.",
      el: "Προσφορές και τιμολόγια στο χέρι. Ήθελαν ελληνικό εργαλείο όπως δουλεύει ένας εργολάβος.",
    },
    outcome: {
      en: "A private app they use: customers, quotes, invoices, PDF export. Next.js and Supabase.",
      el: "Ιδιωτική εφαρμογή που χρησιμοποιούν: πελάτες, προσφορές, τιμολόγια, PDF. Next.js και Supabase.",
    },
    image: "/lazos.png",
    categories: ["business"],
    tags: {
      en: ["Next.js", "Supabase", "Quotes", "PDF"],
      el: ["Next.js", "Supabase", "Προσφορές", "PDF"],
    },
    status: "production",
    role: "built",
  },
  {
    slug: "enjoy-sleep",
    title: "Enjoy Sleep",
    description: {
      en: "Production brand site for a mattress shop in Pangrati. Catalog, EL/EN, local SEO.",
      el: "Production brand site στρωμάτων στο Παγκράτι. Κατάλογος, EL/EN, τοπικό SEO.",
    },
    problem: {
      en: "A neighborhood store had no serious site for people searching mattresses in Pangrati.",
      el: "Κατάστημα γειτονιάς χωρίς σοβαρό site για όσους ψάχνουν στρώματα στο Παγκράτι.",
    },
    outcome: {
      en: "Live on enjoy-sleep.com.gr. Editorial catalog, bilingual, built to be found locally.",
      el: "Live στο enjoy-sleep.com.gr. Editorial κατάλογος, δίγλωσσο, για να σε βρίσκουν τοπικά.",
    },
    image: "/enjoy-sleep.png",
    categories: ["landing"],
    tags: {
      en: ["Next.js", "Brand site", "Catalog", "EL/EN"],
      el: ["Next.js", "Brand site", "Κατάλογος", "EL/EN"],
    },
    status: "production",
    role: "built",
    demoLink: "https://enjoy-sleep.com.gr",
    githubLink: "https://github.com/dimitrispalamidas/v0-enjoy-sleep-website",
  },
  {
    slug: "tinkerbell",
    title: "Tinkerbell",
    description: {
      en: "Children's clothing and baptism e-shop for Kalamata: catalog, payments, shipping, admin. Live full-stack shop I built.",
      el: "E-shop παιδικών και βαπτιστικών Καλαμάτας: κατάλογος, πληρωμές, αποστολές, admin. Live full-stack κατάστημα που έφτιαξα.",
    },
    problem: {
      en: "A local shop needed to sell online without a heavyweight enterprise suite.",
      el: "Τοπικό κατάστημα ήθελε πωλήσεις online χωρίς βαριά enterprise πλατφόρμα.",
    },
    outcome: {
      en: "A working shop: catalog, payments, shipping, admin. The kind of product a real retailer can run.",
      el: "Κατάστημα που δουλεύει: κατάλογος, πληρωμές, αποστολές, admin. Προϊόν που μπορεί να τρέξει πραγματικός έμπορος.",
    },
    image: "/tinkerbell-live.png",
    categories: ["ecommerce"],
    tags: {
      en: ["Next.js", "E-commerce", "Payments", "Admin"],
      el: ["Next.js", "E-shop", "Πληρωμές", "Admin"],
    },
    status: "live",
    role: "built",
    demoLink: "https://tinkerbell-e-shop.vercel.app",
    githubLink: "https://github.com/dimitrispalamidas/tinkerbell-e-shop",
  },
  {
    slug: "kok-theoria",
    title: "ΚΟΚ Θεωρία",
    description: {
      en: "Greek driving-theory PWA I built: practice by topic, timed mocks, streaks, ranking. Live product with accounts.",
      el: "PWA θεωρίας ΚΟΚ που έφτιαξα: εξάσκηση ανά ενότητα, mock με χρόνο, streaks, κατάταξη. Live προϊόν με λογαριασμούς.",
    },
    problem: {
      en: "Learners cramming for the theory exam needed topic practice, timed mocks, and a reason to return.",
      el: "Όσοι διαβάζουν θεωρία ήθελαν εξάσκηση ανά ενότητα, διαγωνίσματα με χρόνο και λόγο να ξαναμπούν.",
    },
    outcome: {
      en: "A live PWA on the real ΚΟΚ material: topics, timed exams, streaks, ranking.",
      el: "Live PWA πάνω στο πραγματικό υλικό ΚΟΚ: ενότητες, διαγωνίσματα, streaks, κατάταξη.",
    },
    image: "/kok-theoria.png",
    categories: ["webapp"],
    tags: {
      en: ["Next.js", "PWA", "Supabase", "Exams"],
      el: ["Next.js", "PWA", "Supabase", "Διαγωνίσματα"],
    },
    status: "live",
    role: "built",
    demoLink: "https://kok-practice.vercel.app",
    githubLink: "https://github.com/dimitrispalamidas/kok-practice",
  },
  {
    slug: "personal-finance",
    title: "Personal Finance",
    description: {
      en: "Finance OS I built for a Greek sole proprietor: AADE myDATA, VAT, income tax, budget, bank sync.",
      el: "Οικονομικό σύστημα που έφτιαξα για ατομική επιχείρηση: ΑΑΔΕ myDATA, ΦΠΑ, φόρος, προϋπολογισμός, τράπεζες.",
    },
    problem: {
      en: "myDATA books, VAT, income tax, and the bank lived in separate tools.",
      el: "Βιβλία myDATA, ΦΠΑ, φόρος και τράπεζα σε διαφορετικά εργαλεία.",
    },
    outcome: {
      en: "A running app covering AADE myDATA, VAT, tax, monthly budget, and bank sync. Private — screenshot and login surface only.",
      el: "Εφαρμογή που τρέχει: ΑΑΔΕ myDATA, ΦΠΑ, φόρος, μηνιαίος προϋπολογισμός, τράπεζες. Ιδιωτική — μόνο screenshot / login.",
    },
    image: "/mydata.png",
    categories: ["business"],
    tags: {
      en: ["Next.js", "AADE myDATA", "VAT", "Banking"],
      el: ["Next.js", "ΑΑΔΕ myDATA", "ΦΠΑ", "Τράπεζες"],
    },
    status: "personal",
    role: "built",
  },
  {
    slug: "safecard-ergani",
    title: "SafeCard Ergani",
    description: {
      en: "Payroll dashboard UI for ΕΡΓΑΝΗ / SafeCard-style workflows.",
      el: "Dashboard μισθοδοσίας για ροές ΕΡΓΑΝΗ / SafeCard.",
    },
    problem: {
      en: "HR screens for hours and employee cards need to look like Greek compliance, not a generic admin theme.",
      el: "Οι οθόνες ωρών και καρτών εργαζομένων πρέπει να μοιάζουν με ελληνική συμμόρφωση, όχι με generic admin.",
    },
    outcome: {
      en: "A high-fidelity UI for cards, hours, and compliance-shaped flows.",
      el: "High-fidelity UI για κάρτες, ώρες και ροές συμμόρφωσης.",
    },
    image: "/ergani.png",
    categories: ["webapp"],
    tags: {
      en: ["Next.js", "Dashboard", "ΕΡΓΑΝΗ", "HR"],
      el: ["Next.js", "Dashboard", "ΕΡΓΑΝΗ", "HR"],
    },
    status: "prototype",
    role: "built",
    demoLink: "https://ergani-safe-card.vercel.app",
    githubLink: "https://github.com/dimitrispalamidas/ergani-safe-card",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function gridProjects(): Project[] {
  return projects.filter((project) => project.inGrid !== false)
}

export function cloudFinProjects(): Project[] {
  return gridProjects().filter((project) => project.lane === "cloudfin")
}

export function personalProjects(): Project[] {
  return gridProjects().filter((project) => project.lane !== "cloudfin")
}
