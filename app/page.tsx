import ShaderBackground from "@/components/shader-background"
import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { BentoServicesSection } from "@/components/bento-services-section"
import { ProcessSection } from "@/components/process-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ValuesSection } from "@/components/values-section"
import { DemoProductsSection } from "@/components/demo-products-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth scroll-pt-20 md:scroll-pt-24">
      <Header />
      <ShaderBackground>
        <HeroContent />
        {/* Overlayed carousel at bottom of hero */}
        <div className="pointer-events-none absolute inset-x-0 bottom-8 md:bottom-12">
          <div className="container px-4 md:px-6">
            <p className="mb-3 text-center text-[10px] md:text-xs font-mono font-semibold text-black/70">
              with clients from
            </p>
            <div className="pointer-events-auto">
              <InfiniteSlider className="opacity-80" direction="horizontal" duration={40} gap={56}>
                <img src="/logos/healthmaxers.png" alt="Health Maxers" className="h-10 md:h-12 w-auto" />
                <img src="/logos/harvard.png" alt="Harvard University" className="h-10 md:h-12 w-auto" />
                <img src="/logos/hku.png" alt="The University of Hong Kong" className="h-10 md:h-12 w-auto" />
                <img src="/logos/ntut.png" alt="National Taipei University of Technology" className="h-10 md:h-12 w-auto" />
                <img src="/logos/crypted.png" alt="Crypted" className="h-10 md:h-12 w-auto" />
                <img src="/logos/ntust-logo-transparent.png" alt="National Taiwan University of Science and Technology" className="h-10 md:h-12 w-auto" />
              </InfiniteSlider>
            </div>
            {/* CTAs moved below the carousel */}
            <div className="mt-4 flex items-center justify-start gap-4">
              <a href="https://cal.com/nikolasdoan/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-black text-white font-normal text-xs transition-all duration-200 hover:bg-black/90 cursor-pointer">
                Book a Call
              </a>
              <a href="/#services" className="px-8 py-3 rounded-full bg-transparent border border-black/20 text-black font-normal text-xs transition-all duration-200 hover:bg-black/5 hover:border-black/30 cursor-pointer">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </ShaderBackground>
      <DemoProductsSection />
      <BentoServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
