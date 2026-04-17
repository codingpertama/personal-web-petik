import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0D0D0D]/90 backdrop-blur-md z-50 border-b border-[#00D2BE]/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D2BE] to-[#00A19B] flex items-center justify-center glow-teal">
              <span className="font-orbitron font-bold text-[#0D0D0D] text-sm">R</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron font-bold text-lg text-white tracking-wider">RAFA</span>
            <span className="text-[10px] text-[#00D2BE] tracking-[0.3em] uppercase">Developer</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <li>
            <a href="#about" className="text-[#C0C0C0] hover:text-[#00D2BE] transition-colors duration-300 relative group">
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D2BE] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#skills" className="text-[#C0C0C0] hover:text-[#00D2BE] transition-colors duration-300 relative group">
              SKILLS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D2BE] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#education" className="text-[#C0C0C0] hover:text-[#00D2BE] transition-colors duration-300 relative group">
              EDUCATION
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D2BE] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="text-[#C0C0C0] hover:text-[#00D2BE] transition-colors duration-300 relative group">
              PROJECTS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D2BE] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="px-5 py-2 bg-[#00D2BE] text-[#0D0D0D] font-bold rounded hover:bg-[#00A19B] transition-colors duration-300">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`w-6 h-0.5 bg-[#00D2BE] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#00D2BE] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#00D2BE] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#0D0D0D]/95 backdrop-blur-md border-t border-[#00D2BE]/20 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
        <ul className="flex flex-col items-center gap-4 py-6 text-sm font-semibold tracking-wide">
          <li><a href="#about" onClick={() => setIsOpen(false)} className="text-[#C0C0C0] hover:text-[#00D2BE]">ABOUT</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)} className="text-[#C0C0C0] hover:text-[#00D2BE]">SKILLS</a></li>
          <li><a href="#education" onClick={() => setIsOpen(false)} className="text-[#C0C0C0] hover:text-[#00D2BE]">EDUCATION</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)} className="text-[#C0C0C0] hover:text-[#00D2BE]">PROJECTS</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className="px-5 py-2 bg-[#00D2BE] text-[#0D0D0D] font-bold rounded">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  )
}
