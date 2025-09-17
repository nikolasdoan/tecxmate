"use client"

export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm mb-4 relative border border-white/30"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" />
          <span className="text-white text-xs font-light relative z-10">✨ Premier Technology Consultancy</span>
        </div>

        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight text-white mb-4 flex items-center gap-2">
          <span className="font-medium italic instrument">Think</span>
          <span className="font-sans font-normal">-</span>
          <span className="font-sans font-normal">Solve</span>
          <span className="font-sans font-normal">-</span>
          <span className="font-mono font-normal">Build</span>
        </h1>

        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          We help you craft digital brands with premier technology consultancy and solutions. Empowering businesses
          across 5+ countries with 90% client satisfaction. Let us be your tecxmate!
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Our Services
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Book a Call
          </button>
        </div>
      </div>
    </main>
  )
}

