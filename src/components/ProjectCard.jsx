export default function ProjectCard({ title, desc, image, tech, link }) {
  return (
    <div className="group relative bg-[#1A1A1A] overflow-hidden border border-[#C0C0C0]/20 hover:border-[#00D2BE]/50 transition-all duration-500">
      {/* Top Racing Stripe */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D2BE] via-[#C0C0C0] to-[#00D2BE] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent"></div>

        {/* Speed Lines Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-[#00D2BE] transform -skew-y-2"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#C0C0C0] transform -skew-y-2"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-[#00D2BE] transform -skew-y-2"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-[#00D2BE] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#C0C0C0]/70 text-sm leading-relaxed mb-4">
          {desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-[#00D2BE]/10 text-[#00D2BE] border border-[#00D2BE]/30 px-3 py-1 font-semibold tracking-wider uppercase"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Link Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#C0C0C0] hover:text-[#00D2BE] transition-colors duration-300 group/link"
        >
          <span className="font-orbitron tracking-wider">VIEW PROJECT</span>
          <svg
            className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#00D2BE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#00D2BE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
