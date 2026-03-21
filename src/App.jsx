import './index.css'
import Particles from './components/Particles'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import VideoSection from './components/VideoSection'
import Impact from './components/Impact'
import Testimonials from './components/Testimonials'
import Sponsors from './components/Sponsors'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Particles />
      <Header />
      <main>
        <Hero />
        <Projects />
        <VideoSection />
        <Impact />
        <Testimonials />
        <Sponsors />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
