import Hero from '../components/Hero'
import Projects from '../components/Projects'
import VideoSection from '../components/VideoSection'
import Impact from '../components/Impact'
import Testimonials from '../components/Testimonials'
import PhotoGallery from '../components/PhotoGallery'
import Sponsors from '../components/Sponsors'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <div style={{ background: '#f8f7f4' }}>
        <Projects />
        <VideoSection />
        <Impact />
        <Testimonials />
        <PhotoGallery />
        <Sponsors />
        <CTA />
      </div>
    </>
  )
}
