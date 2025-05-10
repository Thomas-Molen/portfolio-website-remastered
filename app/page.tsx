import Hero from "./sections/Hero"
import Companies from "./sections/Companies"
import AboutMe from "./sections/AboutMe"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

export default function Page() {
  return (
    <div className="tracking-tight">
      <section id="landing" className="py-24">
        <div className="container xl:max-w-7xl px-5 mx-auto">
          <Hero />
        </div>
      </section>
      <section id="companies" className="bg-background-muted py-16">
        <div className="container xl:max-w-7xl px-5 mx-auto">
          <Companies />
        </div>
      </section>
      <section id="about-me" className="py-16">
        <div className="container xl:max-w-7xl px-5 mx-auto">
          <AboutMe />
        </div>
      </section>
      <section className="bg-background-muted py-16">
      </section>
      <section id="projects" className="py-16">
        <div className="container xl:max-w-7xl px-5 mx-auto">
          <Projects />
        </div>
      </section>
      <section id="contact" className="bg-background-muted py-24">
        <Contact />
      </section>
      <section id="footer" className="text-foreground-muted text-sm">
        <div className="container xl:max-w-7xl p-5 mx-auto">
          Open source project by <a href="https://github.com/Thomas-Molen/portfolio-website-remastered" target="_blank" className="text-primary">Thomas Van der Molen</a>.
        </div>
      </section>
    </div>
  )
}