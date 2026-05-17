export default function ProjectCard({ title, desc, image, tech, link, github, color }) {
    const accentColor = color || "#00A19B";

    return (
        <div
            id="projects"
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 border border-zinc-800 flex flex-col"
        >
            {/* Image or Color Placeholder */}
            {image ? (
                <img src={image} alt={title} className="w-full h-44 object-cover" />
            ) : (
                <div
                    className="w-full h-44 flex items-center justify-center relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${accentColor}22, ${accentColor}55)` }}
                >
                    {/* Decorative blobs */}
                    <div
                        className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20"
                        style={{ background: accentColor }}
                    />
                    <div
                        className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-10"
                        style={{ background: accentColor }}
                    />
                    {/* Project initial / icon */}
                    <span
                        className="text-5xl font-black tracking-tighter z-10 select-none"
                        style={{ color: accentColor }}
                    >
                        {title.charAt(0).toUpperCase()}
                    </span>
                </div>
            )}

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

                <p className="text-sm text-gray-400 mb-4 flex-1 leading-relaxed">
                    {desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {tech.map((item, index) => (
                        <span
                            key={index}
                            className="text-xs px-2 py-1 rounded-md font-medium"
                            style={{
                                background: `${accentColor}22`,
                                color: accentColor,
                                border: `1px solid ${accentColor}44`
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 mt-auto">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium hover:underline transition-colors"
                            style={{ color: accentColor }}
                        >
                            View Project →
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
                            </svg>
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}