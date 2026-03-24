import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BrandsSection from '@/components/BrandsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="o-nama">
          <AboutSection />
        </section>
        <section id="usluge">
          <ServicesSection />
        </section>
        <section id="radovi">
          <PortfolioSection />
        </section>
        <section id="recenzije">
          <TestimonialsSection />
        </section>
        <section id="brendovi">
          <BrandsSection />
        </section>
        <section id="kontakt">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  )
}
