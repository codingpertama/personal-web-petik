import mercedes from "../assets/mercedes.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-5 sm:px-8 md:px-16 lg:px-20">

      <img
        src={mercedes}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-80"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-30 max-w-xl">

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Hi, I'm <span className="text-[#00A19B]">Rafa</span>.
        </h2>

        <p className="text-gray-300 text-sm sm:text-base mb-6">
          Building fast, scalable, and elegant digital solutions with precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">


          <a href="#about" className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition">
            About Me
          </a>

          <a href="#projects" className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#00A19B]/40 text-[#00A19B] bg-[#00A19B]/10 hover:bg-[#00A19B]/20 transition">
            My Project
          </a>

        </div>

      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm animate-bounce">
        Scroll ↓
      </div>
    </section>
  );
}