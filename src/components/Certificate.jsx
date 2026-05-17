const certificates = [
  {
    id: 1,
    issuer: "EDUSOFT",
    year: "2024",
    title: "English Discoveries – TOEIC Excellence Program",
    tag: "ENGLISH",
    borderColor: "#3B82F6", // blue
  },
  {
    id: 2,
    issuer: "GOOGLE",
    year: "2025",
    title: "Using Generative AI with Google Gemini",
    tag: "AI",
    borderColor: "#EF4444", // red
  },
  {
    id: 3,
    issuer: "GOOGLE DEVELOPER GROUP BOGOR",
    year: "2024",
    title: "Let's get vibing",
    tag: "AI",
    borderColor: "#22C55E", // green
  },
  {
    id: 4,
    issuer: "TELKOM INDONESIA",
    year: "2025",
    title: "Laravel Web Programmer",
    tag: "LARAVEL",
    borderColor: "#EF4444", // red
  },
  {
    id: 5,
    issuer: "KOMDIGI",
    year: "2025",
    title: "Konsep Pemrograman Micro Skill",
    tag: "WEB",
    borderColor: "#3B82F6", // blue
  },
  {
    id: 6,
    issuer: "IBM",
    year: "2024",
    title: "Web Development Fundamental",
    tag: "WEB",
    borderColor: "#3B82F6", // blue
  },
];

export default function Certificate() {
  return (
    <section
  className="bg-black py-16 px-6 border-t border-[#00A19B]/20 scroll-mt-20"
  id="certificate"
>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#00A19B] uppercase mb-2">
            My Credentials
          </p>
          <h2 className="text-3xl font-bold text-white">Certificates</h2>
        </div>
        <span className="text-zinc-600 text-sm hidden md:block">
          {certificates.length} certificates earned
        </span>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group relative bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden
                       hover:border-zinc-600 hover:shadow-2xl hover:scale-[1.02]
                       transition-all duration-300 flex flex-col"
          >
            {/* Colored top border */}
            <div
              className="h-[3px] w-full"
              style={{ background: cert.borderColor }}
            />

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1">
              {/* Issuer + Year row */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[10px] font-bold tracking-[0.18em] uppercase"
                  style={{ color: cert.borderColor }}
                >
                  {cert.issuer}
                </span>
                <span className="text-xs text-zinc-500 font-mono">{cert.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-base leading-snug flex-1 mb-6 pr-8">
                {cert.title}
              </h3>

              {/* Bottom row: tag + number */}
              <div className="flex items-end justify-between mt-auto">
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded border"
                  style={{
                    color: cert.borderColor,
                    borderColor: `${cert.borderColor}44`,
                    background: `${cert.borderColor}15`,
                  }}
                >
                  {cert.tag}
                </span>

                {/* Big ghost number */}
                <span
                  className="text-7xl font-black leading-none select-none opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ color: cert.borderColor }}
                >
                  {cert.id}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
