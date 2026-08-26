"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "el"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  "en": {
    "hero.greeting": "Hey, I'm",
    "hero.role": "Full Stack & AI Engineer",
    "hero.description": "I build AI, websites, and full products — from idea to production.",
    "hero.contact": "Get in touch",
    "hero.work": "View my work",
    "about.title": "About Me",
    "about.subtitle": "Who I Am",
    "about.paragraph1": "I'm a Full Stack & AI Engineer in Athens. I build AI, websites, and full products.",
    "about.paragraph2": "At CloudFin I work on AI for the Greek public sector. Outside CloudFin, I ship AI products, shops, booking, and business tools end-to-end.",
    "about.paragraph3": "If you're hiring, or you have a product to ship, let's talk.",
    "skills.title": "What I ship",
    "skills.description": "System design, backend, frontend, and AI.",
    "skills.frontend": "System Design",
    "skills.frontend.desc": "Architecture, technical direction, and implementation plans from idea to production.",
    "skills.uiux": "Frontend & UX",
    "skills.uiux.desc": "Interfaces that are clear, fast, and usable.",
    "skills.mobile": "AI Systems",
    "skills.mobile.desc": "LLM workflows, document AI, automation, and human-in-the-loop tools.",
    "skills.fullstack": "Backend & Full Stack",
    "skills.fullstack.desc": "APIs, data flows, integrations, and the app around them.",
    "projects.title": "My Projects",
    "projects.description": "Day job and freelance.",
    "projects.all": "All",
    "projects.webapp": "Web App",
    "projects.landing": "Brand site",
    "projects.ecommerce": "E-commerce",
    "projects.ai": "AI",
    "projects.business": "Business tools",
    "projects.demo": "Live Demo",
    "projects.code": "Code",
    "projects.case": "Case study",
    "projects.allWork": "All work →",
    "projects.dayJob": "Day job",
    "work.back": "All work",
    "work.live": "Open live product",
    "work.problem": "The problem",
    "work.outcome": "What shipped",
    "work.hire": "Start a project",
    "work.programs": "The programs",
    "services.title": "The range I actually ship",
    "services.description": "Sites, full stack products, and production AI. Simple when the job is simple. Forward-deployed when it has to run in a real organisation.",
    "faq.title": "FAQ",
    "contact.error": "Message not sent",
    "contact.error.desc": "The contact service is temporarily unavailable. Email me at palamidas.dim@gmail.com.",
    "resume.title": "Experience",
    "resume.description": "Full-time and freelance, in order.",
    "resume.download": "Download CV",
    "resume.experience": "Experience",
    "resume.education": "Education",
    "contact.title": "Get In Touch",
    "contact.description": "Book 30 minutes, or send a message.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.optional": "optional",
    "contact.location": "Location",
    "contact.book": "Book 30 minutes",
    "contact.orMessage": "Or send a message",
    "contact.call": "Call",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent!",
    "contact.success.desc": "Thank you for your message. I'll get back to you soon.",
    "footer.rights": "All rights reserved.",
    "language": "Ελληνικά"
  },
  "el": {
    "hero.greeting": "Γεια, είμαι ο",
    "hero.role": "Full Stack & AI Engineer",
    "hero.description": "Φτιάχνω AI, sites και ολοκληρωμένα προϊόντα — από την ιδέα μέχρι το production.",
    "hero.contact": "Επικοινωνία",
    "hero.work": "Δες τη δουλειά μου",
    "about.title": "Σχετικά με εμένα",
    "about.subtitle": "Ποιος είμαι",
    "about.paragraph1": "Είμαι Full Stack & AI Engineer στην Αθήνα. Φτιάχνω AI, sites και ολοκληρωμένα προϊόντα.",
    "about.paragraph2": "Στη CloudFin δουλεύω πάνω σε AI για το ελληνικό δημόσιο. Εκτός CloudFin, αναλαμβάνω από την αρχή ως το τέλος AI προϊόντα, e-shops, συστήματα κρατήσεων και εργαλεία για επιχειρήσεις.",
    "about.paragraph3": "Αν ψάχνεις μηχανικό ή έχεις ένα προϊόν να βγει, ας τα πούμε.",
    "skills.title": "Τι κάνω",
    "skills.description": "System design, backend, frontend και AI.",
    "skills.frontend": "System Design",
    "skills.frontend.desc": "Αρχιτεκτονική, τεχνικές αποφάσεις και πλάνο υλοποίησης, από την ιδέα μέχρι το production.",
    "skills.uiux": "Frontend & UX",
    "skills.uiux.desc": "Διεπαφές καθαρές, γρήγορες και εύχρηστες.",
    "skills.mobile": "AI Systems",
    "skills.mobile.desc": "LLM workflows, document AI, αυτοματισμοί και εργαλεία με τον άνθρωπο στη ροή.",
    "skills.fullstack": "Backend & Full Stack",
    "skills.fullstack.desc": "APIs, ροές δεδομένων, integrations και η εφαρμογή γύρω τους.",
    "projects.title": "Τα έργα μου",
    "projects.description": "Η κύρια δουλειά μου και το freelance.",
    "projects.all": "Όλα",
    "projects.webapp": "Web εφαρμογή",
    "projects.landing": "Brand site",
    "projects.ecommerce": "E-commerce",
    "projects.ai": "AI",
    "projects.business": "Εργαλεία επιχείρησης",
    "projects.demo": "Live demo",
    "projects.code": "Κώδικας",
    "projects.case": "Case study",
    "projects.allWork": "Όλα τα έργα →",
    "projects.dayJob": "Full-time",
    "work.back": "Όλα τα έργα",
    "work.live": "Άνοιγμα προϊόντος",
    "work.problem": "Το πρόβλημα",
    "work.outcome": "Το αποτέλεσμα",
    "work.hire": "Ας συνεργαστούμε",
    "work.programs": "Τα προγράμματα",
    "services.title": "Τι αναλαμβάνω",
    "services.description": "Sites, full stack προϊόντα και AI σε production. Απλά, όταν η δουλειά είναι απλή. Δίπλα στην ομάδα, όταν πρέπει να δουλέψει μέσα σε πραγματικό οργανισμό.",
    "faq.title": "Συχνές ερωτήσεις",
    "contact.error": "Το μήνυμα δεν στάλθηκε",
    "contact.error.desc": "Η υπηρεσία επικοινωνίας δεν είναι διαθέσιμη αυτή τη στιγμή. Στείλε μου email στο palamidas.dim@gmail.com.",
    "resume.title": "Εμπειρία",
    "resume.description": "Full-time και freelance, με χρονολογική σειρά.",
    "resume.download": "Κατέβασε το βιογραφικό",
    "resume.experience": "Εμπειρία",
    "resume.education": "Εκπαίδευση",
    "contact.title": "Επικοινωνία",
    "contact.description": "Κλείσε ένα 30λεπτο ή στείλε μήνυμα.",
    "contact.email": "Email",
    "contact.phone": "Τηλέφωνο",
    "contact.optional": "προαιρετικό",
    "contact.location": "Περιοχή",
    "contact.book": "Κλείσε ένα 30λεπτο",
    "contact.orMessage": "Ή στείλε μήνυμα",
    "contact.call": "Κλήση",
    "contact.name": "Όνομα",
    "contact.subject": "Θέμα",
    "contact.message": "Μήνυμα",
    "contact.send": "Αποστολή μηνύματος",
    "contact.sending": "Γίνεται αποστολή...",
    "contact.success": "Το μήνυμα στάλθηκε!",
    "contact.success.desc": "Ευχαριστώ για το μήνυμα. Θα σου απαντήσω σύντομα.",
    "footer.rights": "Με επιφύλαξη παντός δικαιώματος.",
    "language": "Ελληνικά"
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [hasLoadedPreference, setHasLoadedPreference] = useState(false)

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage === "en" || savedLanguage === "el") {
      setLanguage(savedLanguage)
    }
    setHasLoadedPreference(true)
  }, [])

  useEffect(() => {
    if (!hasLoadedPreference) {
      return
    }
    localStorage.setItem("language", language)
    document.documentElement.lang = language
  }, [hasLoadedPreference, language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
