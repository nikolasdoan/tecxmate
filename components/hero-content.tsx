"use client"

export default function HeroContent() {
  return (
    <main 
      className="absolute bottom-8 left-4 right-4 md:left-8 md:right-auto z-20 max-w-lg"
      style={{
        transform: 'translateZ(0)', // Hardware acceleration
        willChange: 'transform'
      }}
    >
      <div className="text-left">

        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight text-black mb-4 flex items-center md:whitespace-nowrap">
          <span className="font-mono font-normal">Build the future</span>
        </h1>


        <div className="flex items-center gap-4 flex-wrap">
          <a href="/#services" className="px-8 py-3 rounded-full bg-transparent border border-black/20 text-black font-normal text-xs transition-all duration-200 hover:bg-black/5 hover:border-black/30 cursor-pointer">
            Our Services
          </a>
          <a href="https://cal.com/nikolasdoan/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-black text-white font-normal text-xs transition-all duration-200 hover:bg-black/90 cursor-pointer">
            Book a Call
          </a>
        </div>
      </div>
    </main>
  )
}

