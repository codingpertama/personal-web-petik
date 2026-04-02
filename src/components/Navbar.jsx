export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-[#00A19B]/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        <h1 className="font-bold text-lg text-[#00A19B]">Rafa</h1>

        <ul className="flex gap-6 text-sm">
          <li><a href="#about" className="hover:text-[#00A19B]">About</a></li>
          <li><a href="#skills" className="hover:text-[#00A19B]">Skills</a></li>
          <li><a href="#education" className="hover:text-[#00A19B]">Education</a></li>
          <li><a href="#projects" className="hover:text-[#00A19B]">Projects</a></li>
        </ul>
      </div>
    </nav>
  )
}