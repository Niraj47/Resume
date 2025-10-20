import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Volunteering from '@/components/Volunteering'
import Languages from '@/components/Languages'
import Interests from '@/components/Interests'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
        <Education />
        <Certifications />
        <Skills />
      <Projects />
      <Volunteering />
      <Languages />
      <Interests />
      <Contact />
    </main>
  )
}
