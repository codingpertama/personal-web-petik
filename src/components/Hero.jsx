import mercedesF1 from "../assets/mercedes-f1-hero.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={mercedesF1}
        alt="Mercedes AMG F1"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent"></div>
      
      {/* Racing Stripes Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D2BE] via-[#C0C0C0] to-[#00D2BE]"></div>
      
      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border-l-2 border-[#00D2BE] rotate-45 translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute top-0 right-20 w-[600px] h-[600px] border-l border-[#C0C0C0] rotate-45 translate-x-1/2 -translate-y-1/4"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 px-6 sm:px-10 md:px-16 lg:px-24 max-w-4xl">
        {/* Tag Line */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-[2px] bg-[#00D2BE]"></div>
          <span className="text-[#00D2BE] text-xs tracking-[0.4em] font-semibold uppercase">
            Web Developer
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          DRIVEN BY
          <br />
          <span className="text-[#00D2BE] text-glow-teal">PRECISION</span>
        </h1>

        <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-light text-[#C0C0C0] mb-6">
          {"Hi, I'm"} <span className="font-bold text-white">Rafa</span>
        </h2>

        <p className="text-[#C0C0C0] text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
          Building fast, scalable, and elegant digital solutions with the precision of a championship-winning team.
        </p>

        {/* Stats Row - F1 Style */}
        <div className="flex flex-wrap gap-8 mb-10">
          <div className="flex flex-col">
            <span className="font-orbitron text-3xl font-bold text-[#00D2BE]">3+</span>
            <span className="text-xs text-[#C0C0C0] tracking-wider uppercase">Projects</span>
          </div>
          <div className="w-[1px] h-12 bg-[#C0C0C0]/30"></div>
          <div className="flex flex-col">
            <span className="font-orbitron text-3xl font-bold text-[#00D2BE]">5+</span>
            <span className="text-xs text-[#C0C0C0] tracking-wider uppercase">Technologies</span>
          </div>
          <div className="w-[1px] h-12 bg-[#C0C0C0]/30"></div>
          <div className="flex flex-col">
            <span className="font-orbitron text-3xl font-bold text-[#00D2BE]">100%</span>
            <span className="text-xs text-[#C0C0C0] tracking-wider uppercase">Passion</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#about"
            className="group relative px-8 py-4 bg-[#00D2BE] text-[#0D0D0D] font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,210,190,0.5)]"
          >
            <span className="relative z-10">Explore More</span>
            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>

          <a
            href="#projects"
            className="group px-8 py-4 border-2 border-[#C0C0C0] text-[#C0C0C0] font-bold uppercase tracking-wider transition-all duration-300 hover:border-[#00D2BE] hover:text-[#00D2BE] hover:shadow-[0_0_20px_rgba(0,210,190,0.3)]"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[#C0C0C0] text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#00D2BE] to-transparent animate-pulse"></div>
      </div>

      {/* Corner Accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-[#00D2BE] opacity-30"></div>
    </section>
  );
}
