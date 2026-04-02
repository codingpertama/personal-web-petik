export default function ProjectCard({ title, desc, image, tech, link }) {
    return (
        <div id="projects" className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 border border-zinc-800">

            {/* Image */}
            <img src={image} alt={title} className="w-full h-40 object-cover" />

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

                <p className="text-sm text-gray-400 mb-3">
                    {desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item, index) => (
                        <span
                            key={index}
                            className="text-xs bg-[#00A19B]/20 text-[#00A19B] px-2 py-1 rounded-md"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <a
                    href={link}
                    target="_blank"
                    className="text-sm text-[#00A19B] hover:underline"
                >
                    View Project →
                </a>
            </div>
        </div>
    );
}