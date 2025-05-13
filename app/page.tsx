import Hero from "./sections/Hero"
import Companies from "./sections/Companies"
import AboutMe from "./sections/AboutMe"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

export default function Page() {
  return (
    <div className="tracking-tight">
      <section id="landing" className="py-24">
        <Hero />
      </section>
      <section id="companies" className="py-16">
        <Companies />
      </section>
      <section id="about-me" className="py-16">
        <AboutMe />
      </section>
      <section className="py-16">
      </section>
      <section id="projects" className="py-16">
        <Projects />
      </section>
      <section id="contact" className="py-24">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}