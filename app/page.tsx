import Hero from "./sections/Hero"
import Companies from "./sections/Companies"
import AboutMe from "./sections/AboutMe"
import Projects from "./sections/Projects"

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
      <section id="contact">

      </section>
    </div>
  )
}