import me from "../assets/profesional.png";
import carbonFiber from "../assets/carbon-fiber-pattern.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0D0D0D] text-white py-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={carbonFiber}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D2BE] to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* LEFT - Image */}
          <div className="relative group order-2 lg:order-1">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#00D2BE]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Frame Border */}
            <div className="absolute -inset-[3px] bg-gradient-to-br from-[#00D2BE] via-[#C0C0C0] to-[#00D2BE] opacity-50"></div>

            {/* Inner Card */}
            <div className="relative bg-[#0D0D0D] p-2">
              <img
                src={me}
                alt="Rafa"
                className="w-[280px] md:w-[320px] lg:w-[360px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0D0D0D]/90 backdrop-blur-sm p-4 border-l-4 border-[#00D2BE]">
                <div className="font-orbitron text-xs text-[#00D2BE] tracking-wider">
                  DEVELOPER PROFILE
                </div>
                <div className="font-orbitron text-lg text-white font-bold">
                  RAFA HAFIZ
                </div>
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#00D2BE]"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#00D2BE]"></div>
          </div>

          {/* RIGHT - Content */}
          <div className="max-w-xl space-y-8 order-1 lg:order-2">
            {/* Section Tag */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-[2px] bg-[#00D2BE]"></div>
              <span className="font-orbitron text-[#00D2BE] text-xs tracking-[0.4em] uppercase">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              BUILDING THINGS THAT
              <br />
              <span className="text-[#00D2BE] text-glow-teal">PERFORM</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-[#C0C0C0] leading-relaxed">
              <p>
                Like a finely-tuned F1 machine, I believe every line of code
                should be optimized for maximum performance. Precision,
                efficiency, and reliability are not just goals — they are the
                standard.
              </p>
              <p>
                As a web developer from Bogor, Indonesia, I specialize in
                creating modern digital experiences that are fast, smooth, and
                effortless to use.
              </p>
            </div>

            {/* Attributes Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Precision", value: "100%" },
                { label: "Speed", value: "Optimized" },
                { label: "Quality", value: "Premium" },
                { label: "Reliability", value: "Consistent" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#1A1A1A] border border-[#C0C0C0]/20 p-4 hover:border-[#00D2BE]/50 transition-colors duration-300"
                >
                  <div className="text-xs text-[#C0C0C0] uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="font-orbitron text-lg text-[#00D2BE] font-bold">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
