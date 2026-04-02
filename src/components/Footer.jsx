export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#00A19B]/20 px-10 md:px-20 py-10">

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT */}
        <div>
          <h2 className="text-lg font-semibold text-white">
            Rafa.dev
          </h2>
          <p className="text-sm text-white/50">
            Building modern web experiences.
          </p>
        </div>

        {/* CENTER - NAV */}
        <div className="flex gap-6 text-sm text-white/70">
          <a href="#about" className="hover:text-[#00A19B] transition">About</a>
          <a href="#projects" className="hover:text-[#00A19B] transition">Projects</a>
          <a href="#education" className="hover:text-[#00A19B] transition">Education</a>
        </div>

        {/* RIGHT - SOCIAL */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#00A19B] transition text-white/70">
            GitHub
          </a>
          <a href="#" className="hover:text-[#00A19B] transition text-white/70">
            LinkedIn
          </a>
          <a href="#" className="hover:text-[#00A19B] transition text-white/70">
            Instagram
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-8 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Rafa Hafiz Iqbal Sugarda. All rights reserved.
      </div>

    </footer>
  );
}