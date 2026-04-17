export default function Education() {
  const educationData = [
    {
      year: "2024 - Present",
      school: "SMK Wikrama Bogor",
      major: "PPLG (Software Development & Games)",
      desc: "Learning web development, database management, and basic AI. Focused on frontend and backend technologies.",
      icon: "🏎️",
    },
    {
      year: "2021 - 2024",
      school: "SMPN 1 Cisarua",
      major: "General Education",
      desc: "Studied foundational subjects and developed an interest in technology and programming.",
      icon: "🏁",
    },
  ];

  return (
    <section id="education" className="relative bg-[#0D0D0D] text-white py-24 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #00D2BE 1px, transparent 1px),
                           linear-gradient(to bottom, #00D2BE 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D2BE] to-transparent"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-[2px] bg-[#00D2BE]"></div>
            <span className="font-orbitron text-[#00D2BE] text-xs tracking-[0.4em] uppercase">
              Career Track
            </span>
            <div className="w-16 h-[2px] bg-[#00D2BE]"></div>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            EDUCATION <span className="text-[#00D2BE]">JOURNEY</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00D2BE] via-[#C0C0C0] to-[#00D2BE]"></div>

          {educationData.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00D2BE] rounded-full border-4 border-[#0D0D0D] z-10 glow-teal"></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'} md:w-[45%]`}>
                <div className="group relative bg-[#1A1A1A] border border-[#C0C0C0]/20 p-6 hover:border-[#00D2BE]/50 transition-all duration-300">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00D2BE] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00D2BE] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Year Badge */}
                  <div className="inline-block bg-[#00D2BE]/10 border border-[#00D2BE]/30 px-3 py-1 mb-4">
                    <span className="font-orbitron text-[#00D2BE] text-xs font-bold tracking-wider">
                      {item.year}
                    </span>
                  </div>

                  {/* School Name */}
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2 group-hover:text-[#00D2BE] transition-colors">
                    {item.school}
                  </h3>

                  {/* Major */}
                  <p className="text-[#C0C0C0] text-sm mb-3 font-semibold">
                    {item.major}
                  </p>

                  {/* Description */}
                  <p className="text-[#C0C0C0]/70 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Racing Flag Decoration */}
                  <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-50 transition-opacity">
                    {item.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
