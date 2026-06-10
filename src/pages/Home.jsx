import Hero from '../components/Hero'
import Projects from '../components/Projects'
import VideoSection from '../components/VideoSection'
import Testimonials from '../components/Testimonials'
import PhotoGallery from '../components/PhotoGallery'
import GlobeSection from '../components/GlobeSection'
import Sponsors from '../components/Sponsors'
import CTA from '../components/CTA'
import LeadForm from '../components/LeadForm'

export default function Home() {
  return (
    <>
      <Hero />
      <div style={{ background: '#f8f7f4' }}>
        <Projects />
        <VideoSection />
        <Testimonials />
        <GlobeSection />
        <PhotoGallery />
        <Sponsors />
        <LeadForm />
        <CTA />
      </div>
    </>
  )
}
