import { Navbar } from "@/components/navbar"
import ShaderBackground from "@/components/shader-background"
import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ValuesSection } from "@/components/values-section"
import { DemoProductsSection } from "@/components/demo-products-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      <ServicesSection />
      <DemoProductsSection />
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
