import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Resume } from "@/components/resume"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { homeJsonLd } from "@/lib/json-ld"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <JsonLd data={homeJsonLd()} />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
