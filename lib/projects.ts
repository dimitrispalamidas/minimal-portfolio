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
  built: { en: "Built end-to-end", el: "Εξ ολοκλήρου δικό μου" },
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
      el: "Full-time στη CloudFin (AUSTRIACARD). Τέσσερα προγράμματα σε production για το ελληνικό δημόσιο. Τα τρία είναι επεξεργασία εγγράφων με τον άνθρωπο στη ροή (φορολογία, δικαστήρια, κτηματολόγιο). Το τέταρτο, αξιολόγηση τεκμηρίων για υπουργεία.",
    },
    problem: {
      en: "Scans and uploads do not become usable data by themselves. Tax documents need a human to settle two LLM extracts. Court and cadastre folders need double keying and a third reviewer. Ministries need to know if a file is actually valid proof for a target.",
      el: "Ένα σκαναρισμένο έγγραφο δεν γίνεται από μόνο του αξιοποιήσιμο δεδομένο. Στα φορολογικά χρειάζεται άνθρωπος για να κρίνει ανάμεσα σε δύο εξαγωγές LLM. Στους φακέλους δικαστηρίων και κτηματολογίου χρειάζεται διπλή καταχώρηση και τρίτος ελεγκτής. Τα υπουργεία πρέπει να ξέρουν αν ένα αρχείο τεκμηριώνει όντως αυτό που δηλώνει.",
    },
    outcome: {
      en: "All four are in production, used by operators or ministry systems.",
      el: "Και τα τέσσερα βρίσκονται σε production και τα χρησιμοποιούν χειριστές ή συστήματα υπουργείων.",
    },
    programs: [
      {
        name: { en: "AADE", el: "ΑΑΔΕ" },
        role: { en: "I own delivery", el: "Υπεύθυνος παράδοσης" },
        body: {
          en: "Human verification after dual-LLM extraction on tax documents. Operators compare the two engines side-by-side, write the verified record, and run HOLD / supervisor / PM returns. Two engineers on the work. Day-to-day delivery is mine.",
          el: "Ανθρώπινος έλεγχος σε φορολογικά έγγραφα, μετά από εξαγωγή με δύο LLM. Ο χειριστής βλέπει τις δύο μηχανές δίπλα δίπλα, καταγράφει την επαληθευμένη εγγραφή και χειρίζεται τις ροές HOLD, supervisor και επιστροφής στον PM. Δουλεύουμε δύο μηχανικοί· την καθημερινή παράδοση την έχω εγώ.",
        },
      },
      {
        name: { en: "YPES", el: "ΥΠΕΣ" },
        role: { en: "I own delivery", el: "Υπεύθυνος παράδοσης" },
        body: {
          en: "Ministry evidence platform — not digitization. Azure OpenAI judges whether uploaded files are suitable proof for a declared target or indicator (readable, signed, actually proving it) — not whether the target was met. Batch assessment plus an API into the national target-setting system. Two engineers on the work. Day-to-day delivery is mine.",
          el: "Πλατφόρμα τεκμηρίωσης για υπουργεία — όχι ψηφιοποίηση. Το Azure OpenAI κρίνει αν ένα αρχείο στέκει ως τεκμήριο για τον στόχο ή τον δείκτη που δηλώθηκε: αν διαβάζεται, αν φέρει υπογραφή, αν αποδεικνύει αυτό που λέει. Δεν κρίνει αν ο στόχος επιτεύχθηκε. Μαζική αξιολόγηση και API προς το εθνικό σύστημα στοχοθεσίας. Δουλεύουμε δύο μηχανικοί· την καθημερινή παράδοση την έχω εγώ.",
        },
      },
      {
        name: { en: "Hellenic Justice", el: "Δικαιοσύνη" },
        role: { en: "Core contributor", el: "Core contributor" },
        body: {
          en: "Court-folder digitization: two operators independently key the same scans; a third-eye reviewer resolves disagreements. Admin dashboard for progress and workload. Separate LLM pipeline (Gemini / Vertex) writes extraction for operators to review.",
          el: "Ψηφιοποίηση δικαστικών φακέλων: δύο χειριστές καταχωρούν ανεξάρτητα τα ίδια έγγραφα και ένας τρίτος ελεγκτής λύνει τις διαφωνίες. Admin dashboard για την πρόοδο και τον φόρτο εργασίας. Ξεχωριστό pipeline με LLM (Gemini / Vertex) ετοιμάζει την εξαγωγή που ελέγχει ο χειριστής.",
        },
      },
      {
        name: { en: "Hellenic Cadastre", el: "Κτηματολόγιο" },
        role: { en: "Core contributor", el: "Core contributor" },
        body: {
          en: "Land-registry digitization, same HITL pattern as Justice: LLM extraction copied onto the operator record, difference navigation between versions, export workflows.",
          el: "Ψηφιοποίηση κτηματολογίου, με την ίδια λογική ανθρώπινου ελέγχου όπως στη Δικαιοσύνη: η εξαγωγή του LLM περνάει στην εγγραφή του χειριστή, πλοήγηση στις διαφορές μεταξύ εκδόσεων και ροές εξαγωγής δεδομένων.",
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
      el: "Ταξιδιωτικό AI προϊόν σε λειτουργία. Chatbot, booking UX και AI που σέβεται τις ημερομηνίες. Ο επισκέπτης περιγράφει το ταξίδι του, βλέπει προτάσεις εμπειριών και κλείνει.",
    },
    problem: {
      en: "Travel sites dump generic lists. Guests wanted a trip that felt local, with dates that the assistant actually respected.",
      el: "Τα ταξιδιωτικά sites πετάνε γενικές λίστες. Οι επισκέπτες ήθελαν ένα ταξίδι με τοπικό χαρακτήρα και έναν βοηθό που να κρατάει τις ημερομηνίες τους.",
    },
    outcome: {
      en: "In production on gothelocalway.com: chat in, experience cards out, Stripe checkout. My merged work includes the chatbot v1, booking UX, and anchoring answers to the requested travel window.",
      el: "Σε production στο gothelocalway.com: συνομιλία, προτάσεις εμπειριών, πληρωμή μέσω Stripe. Δικά μου το chatbot v1, το booking UX και οι απαντήσεις που δένουν με το διάστημα του ταξιδιού.",
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
      el: "B2B κοστολόγηση έργων υποδομής, σε λειτουργία. Core contributor: προϋπολογισμοί έργων, τιμοκατάλογοι, onboarding, οργανισμοί και δικαιώματα, προσφορές έτοιμες για PDF.",
    },
    problem: {
      en: "Contractors priced jobs in spreadsheets. Ratebooks, tiers, and offers lived in different tools with no access control.",
      el: "Οι εργολάβοι κοστολογούσαν σε λογιστικά φύλλα. Τιμοκατάλογοι, κλίμακες και προσφορές ήταν σκορπισμένα σε διαφορετικά εργαλεία, χωρίς κανέναν έλεγχο πρόσβασης.",
    },
    outcome: {
      en: "A live multi-org workspace. My merged work covers budget import, ratebook items, save/edit flows, tabbed line items, onboarding, and organization permissions.",
      el: "Ένα workspace ανά οργανισμό, σε λειτουργία. Δικά μου η εισαγωγή προϋπολογισμών, τα είδη του τιμοκαταλόγου, οι ροές αποθήκευσης και επεξεργασίας, οι καρτέλες γραμμών, το onboarding και τα δικαιώματα ανά οργανισμό.",
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
      el: "Εισερχόμενες κλήσεις μέσω Twilio, φωνή με OpenAI Realtime, RAG και μεταφορά σε άνθρωπο. Live demo, εξ ολοκλήρου δικό μου.",
    },
    problem: {
      en: "Small teams miss calls or park people on hold. They needed an agent that knows the business and can hand off.",
      el: "Οι μικρές ομάδες χάνουν κλήσεις ή αφήνουν κόσμο σε αναμονή. Χρειάζονταν έναν agent που ξέρει την επιχείρηση και ξέρει πότε να δώσει τη γραμμή σε άνθρωπο.",
    },
    outcome: {
      en: "A running multi-org demo: Twilio in, realtime voice, RAG, human transfer.",
      el: "Ένα demo που τρέχει, με υποστήριξη πολλαπλών οργανισμών: Twilio, φωνή σε πραγματικό χρόνο, RAG και μεταφορά σε άνθρωπο.",
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
      el: "Πλατφόρμα βραχυχρόνιας μίσθωσης, δική μου: site για τους ιδιοκτήτες και κρατήσεις για τους επισκέπτες, με Supabase, Viva Wallet, ημερολόγια και δύο γλώσσες.",
    },
    problem: {
      en: "Owners needed a sales site. Guests needed to book and pay in Greece, in two languages, with real availability.",
      el: "Οι ιδιοκτήτες ήθελαν ένα site που να πουλάει. Οι επισκέπτες ήθελαν να κλείνουν και να πληρώνουν με ελληνικό πάροχο, σε δύο γλώσσες, βλέποντας πραγματική διαθεσιμότητα.",
    },
    outcome: {
      en: "Two surfaces, one backend, live: Viva Wallet, calendars, bilingual EL/EN.",
      el: "Δύο ξεχωριστά περιβάλλοντα πάνω σε ένα backend, σε λειτουργία: Viva Wallet, ημερολόγια, ελληνικά και αγγλικά.",
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
      el: "Προϊόν για πελάτη, σε παραγωγική λειτουργία, για επιχείρηση λιθοδομών: πελάτες, προσφορές, τιμολόγια, PDF. Μπαίνουν κάθε μέρα και τρέχουν την εταιρεία πάνω σε αυτό.",
    },
    problem: {
      en: "Quotes and invoices were done by hand. They needed a Greek-language tool that matches how a contractor actually works.",
      el: "Έβγαζαν προσφορές και τιμολόγια στο χέρι. Ήθελαν ένα εργαλείο στα ελληνικά, φτιαγμένο πάνω στον τρόπο που δουλεύει πραγματικά ένας εργολάβος.",
    },
    outcome: {
      en: "A private app they use: customers, quotes, invoices, PDF export. Next.js and Supabase.",
      el: "Μια ιδιωτική εφαρμογή που χρησιμοποιούν καθημερινά: πελάτες, προσφορές, τιμολόγια, εξαγωγή σε PDF. Next.js και Supabase.",
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
      el: "Brand site σε λειτουργία για κατάστημα στρωμάτων στο Παγκράτι. Κατάλογος, δύο γλώσσες, τοπικό SEO.",
    },
    problem: {
      en: "A neighborhood store had no serious site for people searching mattresses in Pangrati.",
      el: "Ένα κατάστημα της γειτονιάς δεν είχε σοβαρή παρουσία στο ίντερνετ για όποιον έψαχνε στρώματα στο Παγκράτι.",
    },
    outcome: {
      en: "Live on enjoy-sleep.com.gr. Editorial catalog, bilingual, built to be found locally.",
      el: "Στον αέρα, στο enjoy-sleep.com.gr. Προσεγμένος κατάλογος, δύο γλώσσες και δομή που το κάνει να βρίσκεται στις τοπικές αναζητήσεις.",
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
      el: "E-shop παιδικών και βαπτιστικών στην Καλαμάτα: κατάλογος, πληρωμές, αποστολές, διαχείριση. Full-stack κατάστημα σε λειτουργία, εξ ολοκλήρου δικό μου.",
    },
    problem: {
      en: "A local shop needed to sell online without a heavyweight enterprise suite.",
      el: "Ένα τοπικό κατάστημα ήθελε να πουλάει online, χωρίς να μπλέξει με βαριά enterprise πλατφόρμα.",
    },
    outcome: {
      en: "A working shop: catalog, payments, shipping, admin. The kind of product a real retailer can run.",
      el: "Ένα κατάστημα που δουλεύει: κατάλογος, πληρωμές, αποστολές, διαχείριση. Κάτι που μπορεί να το τρέξει πραγματικός έμπορος, όχι απλώς μια βιτρίνα.",
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
      el: "PWA για τη θεωρία του ΚΟΚ, δική μου: εξάσκηση ανά ενότητα, διαγωνίσματα με χρονόμετρο, σερί σωστών, κατάταξη. Προϊόν σε λειτουργία, με λογαριασμούς χρηστών.",
    },
    problem: {
      en: "Learners cramming for the theory exam needed topic practice, timed mocks, and a reason to return.",
      el: "Όσοι διαβάζουν για τις εξετάσεις θεωρίας ήθελαν εξάσκηση ανά ενότητα, διαγωνίσματα με χρονόμετρο και έναν λόγο να ξαναμπούν την επόμενη μέρα.",
    },
    outcome: {
      en: "A live PWA on the real ΚΟΚ material: topics, timed exams, streaks, ranking.",
      el: "PWA στον αέρα, πάνω στο πραγματικό υλικό του ΚΟΚ: ενότητες, διαγωνίσματα με χρονόμετρο, σερί σωστών, κατάταξη.",
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
      el: "Οικονομικό σύστημα που έφτιαξα για ατομική επιχείρηση: myDATA της ΑΑΔΕ, ΦΠΑ, φόρος εισοδήματος, προϋπολογισμός και συγχρονισμός με την τράπεζα.",
    },
    problem: {
      en: "myDATA books, VAT, income tax, and the bank lived in separate tools.",
      el: "Τα βιβλία στο myDATA, ο ΦΠΑ, ο φόρος και η τράπεζα ζούσαν σε τέσσερα διαφορετικά εργαλεία.",
    },
    outcome: {
      en: "A running app covering AADE myDATA, VAT, tax, monthly budget, and bank sync. Private — screenshot and login surface only.",
      el: "Μια εφαρμογή που τρέχει και καλύπτει myDATA, ΦΠΑ, φόρο, μηνιαίο προϋπολογισμό και συγχρονισμό τράπεζας. Ιδιωτική, οπότε υπάρχει μόνο screenshot και η οθόνη σύνδεσης.",
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
      el: "Dashboard μισθοδοσίας για ροές τύπου ΕΡΓΑΝΗ / SafeCard.",
    },
    problem: {
      en: "HR screens for hours and employee cards need to look like Greek compliance, not a generic admin theme.",
      el: "Οι οθόνες για ωράρια και κάρτες εργαζομένων πρέπει να μιλάνε τη γλώσσα της ελληνικής εργατικής νομοθεσίας, όχι ενός γενικού admin template.",
    },
    outcome: {
      en: "A high-fidelity UI for cards, hours, and compliance-shaped flows.",
      el: "Ένα προσεγμένο UI για κάρτες, ωράρια και ροές συμμόρφωσης.",
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
