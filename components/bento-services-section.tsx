"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ComprehensiveOnboardingForm } from "@/components/comprehensive-onboarding-form"

export function BentoServicesSection() {
  const [showDemoForm, setShowDemoForm] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    {
      id: "mvp",
      title: "Idea Launchpad",
      subtitle: "Quickly turn early-stage ideas into validated business concepts.",
      color: "orange",
    },
    {
      id: "product",
      title: "Product Development",
      subtitle: "Build scalable websites and mobile apps with modern frameworks and AI-driven workflows.",
      color: "blue",
    },
    {
      id: "design",
      title: "UI/UX & Brand Design",
      subtitle: "Stand out with bold UI/UX design built to engage users and boost conversions.",
      color: "pink",
    },
    {
      id: "premium",
      title: "Premium Package",
      subtitle: "Get instant service — book a personalized strategy call with our team.",
      color: "gold",
      isSpecial: true,
    },
  ]

  const handleServiceClick = (serviceId: string) => {
    if (serviceId === "premium") {
      window.open("https://cal.com/nikolasdoan/30min", "_blank")
    } else {
      setSelectedService(serviceId)
      setShowDemoForm(true)
    }
  }

  const getGradientBackground = (color: string) => {
    // All services now use white background
    return '#fff'
  }

  return (
    <section id="services" className="relative overflow-hidden bg-[#F6F3F1] py-16 md:py-20 snap-start border-t border-b border-[rgba(55,50,47,0.12)]">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/gradients/1.png" 
          alt="Gradient background 1" 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        />
        <img 
          src="/gradients/2.png" 
          alt="Gradient background 2" 
          className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-20"
        />
        <img 
          src="/gradients/3.png" 
          alt="Gradient background 3" 
          className="absolute bottom-0 left-0 w-1/3 h-1/2 object-cover opacity-25"
        />
        <img 
          src="/gradients/4.png" 
          alt="Gradient background 4" 
          className="absolute bottom-0 right-0 w-1/2 h-1/3 object-cover opacity-20"
        />
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Services</h2>
        </div>

        {/* Bento Grid Content */}
        <div className="flex justify-center items-start">
          {/* Left decorative pattern */}
          <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
            <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                />
              ))}
            </div>
          </div>

          {/* Main Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`
                  p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6
                  ${index % 2 === 0 ? 'md:border-r' : ''}
                  ${index < 2 ? 'md:border-b' : ''}
                  bg-white hover:bg-primary/5 hover:outline hover:outline-2 hover:outline-primary/40
                  transition-all duration-150 cursor-pointer group
                `}
                style={{
                  background: '#fff',
                }}
                onClick={() => handleServiceClick(service.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Decorative lines for special cards */}
                {service.isSpecial && (
                  <div className="space-y-1 mb-2">
                    <div className="w-full h-0.5 bg-[#322d2b]/8"></div>
                    <div className="w-32 h-0.5 bg-[#322d2b]"></div>
                  </div>
                )}

                <div className="flex flex-col gap-2 w-full">
                  <h3 className="text-[#37322F] group-hover:text-primary text-lg sm:text-xl font-semibold leading-tight font-sans transition-colors duration-150">
                    {service.title}
                  </h3>
                  <p className="text-[#605A57] group-hover:text-primary/80 text-sm md:text-base font-normal leading-relaxed font-sans transition-colors duration-150">
                    {service.subtitle}
                  </p>
                </div>


              </motion.div>
            ))}
          </div>

          {/* Right decorative pattern */}
          <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
            <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      <Dialog open={showDemoForm} onOpenChange={setShowDemoForm}>
        <DialogContent className="sm:max-w-[800px] p-0">
          <ComprehensiveOnboardingForm onClose={() => setShowDemoForm(false)} />
        </DialogContent>
      </Dialog>
    </section>
  )
}