export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0D0D0D] text-white py-24 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #00D2BE 1px, transparent 1px),
                             linear-gradient(to bottom, #00D2BE 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D2BE] to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-[2px] bg-[#00D2BE]"></div>
            <span className="font-orbitron text-[#00D2BE] text-xs tracking-[0.4em] uppercase">
              Get In Touch
            </span>
            <div className="w-16 h-[2px] bg-[#00D2BE]"></div>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            {"LET'S"} <span className="text-[#00D2BE]">CONNECT</span>
          </h2>
          <p className="text-[#C0C0C0] mt-4 max-w-md mx-auto">
            Ready to start a project together? Send me a message and {"let's"} build something amazing.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const message = e.target.message.value;
            window.open(
              `https://wa.me/6281292810947?text=Halo saya ${name}, ${message}`
            );
          }}
          className="relative bg-[#1A1A1A] border border-[#C0C0C0]/20 p-8 md:p-12"
        >
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00D2BE]"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00D2BE]"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00D2BE]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00D2BE]"></div>

          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block font-orbitron text-xs text-[#00D2BE] tracking-wider uppercase mb-2">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full p-4 bg-[#0D0D0D] border border-[#C0C0C0]/30 text-white placeholder-[#C0C0C0]/50 focus:outline-none focus:border-[#00D2BE] transition-colors duration-300"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block font-orbitron text-xs text-[#00D2BE] tracking-wider uppercase mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="What would you like to discuss?"
                className="w-full p-4 bg-[#0D0D0D] border border-[#C0C0C0]/30 text-white placeholder-[#C0C0C0]/50 focus:outline-none focus:border-[#00D2BE] transition-colors duration-300 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group relative w-full py-4 bg-[#00D2BE] text-[#0D0D0D] font-orbitron font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,210,190,0.5)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="https://github.com/codingpertama"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[#C0C0C0] hover:text-[#00D2BE] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="font-semibold text-sm">GitHub</span>
          </a>
          <div className="w-[1px] h-4 bg-[#C0C0C0]/30"></div>
          <a
            href="https://www.linkedin.com/in/rafa-hafiz-iqbal-sugarda-04010a32b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[#C0C0C0] hover:text-[#00D2BE] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="font-semibold text-sm">LinkedIn</span>
          </a>
          <div className="w-[1px] h-4 bg-[#C0C0C0]/30"></div>
          <a
            href="https://www.instagram.com/rapa.pdf/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[#C0C0C0] hover:text-[#00D2BE] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="font-semibold text-sm">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
