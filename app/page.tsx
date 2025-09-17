import ShaderBackground from "@/components/shader-background"
import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
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
    <main className="min-h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth scroll-pt-20 md:scroll-pt-24">
      <Header />
      <ShaderBackground>
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      {/* Trusted by clients slider */}
      <section className="snap-start bg-white py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <p className="mb-4 text-center text-xs md:text-sm font-mono font-semibold text-black/70">
            with clients from
          </p>
          <InfiniteSlider className="opacity-80" direction="horizontal" duration={40} gap={56}>
            <img src="/logos/cornell.png" alt="Cornell University" className="h-12 md:h-14 w-auto" />
            <img src="/logos/harvard.png" alt="Harvard University" className="h-12 md:h-14 w-auto" />
            <img src="/logos/berkeley.png" alt="UC Berkeley" className="h-12 md:h-14 w-auto" />
            <img src="/logos/hku.png" alt="The University of Hong Kong" className="h-12 md:h-14 w-auto" />
            <img src="/logos/healthmaxers.png" alt="Health Maxers" className="h-12 md:h-14 w-auto" />
            <img src="/logos/ntu.png" alt="National Taiwan University" className="h-12 md:h-14 w-auto" />
            <img src="/logos/ntut.png" alt="National Taipei University of Technology" className="h-12 md:h-14 w-auto" />
          </InfiniteSlider>
        </div>
      </section>
      <ServicesSection />
      <DemoProductsSection />
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
