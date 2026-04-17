import About from "./components/About";
import Stack from "./components/Stack";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollVelocity from "./components/ScrollVelocity";
import Education from "./components/Education";
import ProjectCard from "./components/ProjectCard";
import petshop from "./assets/petshop.png";
import bogor from "./assets/bogor.png";
import elektronik from "./assets/elektronik.png";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const projects = [
    {
      title: "Website Petshop",
      desc: "E-commerce platform for pet food connected with WhatsApp for seamless ordering.",
      image: petshop,
      tech: ["HTML", "CSS"],
      link: "https://codingpertama.github.io/webshop.github.io/",
    },
    {
      title: "Kota Bogor Article",
      desc: "Information portal showcasing the city of Bogor and its attractions.",
      image: bogor,
      tech: ["HTML", "CSS"],
      link: "https://codingpertama.github.io/projectbogor/",
    },
    {
      title: "Electronic Store",
      desc: "Product showcase website for electronic devices and gadgets.",
      image: elektronik,
      tech: ["HTML", "CSS"],
      link: "https://codingpertama.github.io/el-singko/",
    },
  ];

  return (
    <div className="bg-[#0D0D0D] text-white">
      <Navbar />
      <Hero />

      {/* Section Divider */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#00D2BE] to-transparent"></div>

      <ScrollVelocity
        texts={["ABOUT ME"]}
        velocity={50}
        className="font-orbitron text-[#00D2BE]"
        parallaxClassName="bg-[#0D0D0D] py-8"
      />

      <About />

      {/* Section Divider */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C0C0C0]/50 to-transparent"></div>

      <ScrollVelocity
        texts={["MY SKILLS"]}
        velocity={50}
        className="font-orbitron text-[#00D2BE]"
        parallaxClassName="bg-[#0D0D0D] py-8"
      />

      {/* SKILLS SECTION - Mercedes F1 Style */}
      <section
        id="skills"
        className="relative flex flex-col items-center justify-center py-24 bg-[#0D0D0D] overflow-hidden"
      >
        {/* Background Pattern */}
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

        {/* Top Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D2BE] to-transparent"></div>

        <div className="relative z-10 w-full max-w-6xl px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-[#00D2BE]"></div>
              <span className="font-orbitron text-[#00D2BE] text-xs tracking-[0.4em] uppercase">
                Tech Stack
              </span>
              <div className="w-16 h-[2px] bg-[#00D2BE]"></div>
            </div>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
              SKILLS <span className="text-[#00D2BE]">ARSENAL</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* HARD SKILLS */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#00D2BE]"></div>
                <h3 className="font-orbitron text-sm text-[#C0C0C0] tracking-wider uppercase">
                  Hard Skills
                </h3>
                <div className="w-8 h-[2px] bg-[#00D2BE]"></div>
              </div>

              <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
                <Stack
                  randomRotation={false}
                  sensitivity={200}
                  sendToBackOnClick={true}
                  autoplay={false}
                  cards={[
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="w-full h-full flex items-center justify-center bg-[#1A1A1A] border border-[#00D2BE]/30 shadow-lg"
                    >
                      <img
                        src={src}
                        alt={`hard-${i}`}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  ))}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[#00D2BE]/50 to-transparent"></div>

            {/* SOFT SKILLS */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#C0C0C0]"></div>
                <h3 className="font-orbitron text-sm text-[#C0C0C0] tracking-wider uppercase">
                  Soft Skills
                </h3>
                <div className="w-8 h-[2px] bg-[#C0C0C0]"></div>
              </div>

              <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
                <Stack
                  randomRotation={false}
                  sensitivity={200}
                  sendToBackOnClick={true}
                  autoplay={false}
                  cards={[
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                    "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
                    "https://cdn-icons-png.flaticon.com/512/190/190411.png",
                    "https://cdn-icons-png.flaticon.com/512/921/921347.png",
                    "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="w-full h-full flex items-center justify-center bg-[#1A1A1A] border border-[#C0C0C0]/30 shadow-lg"
                    >
                      <img
                        src={src}
                        alt={`soft-${i}`}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                  ))}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C0C0C0]/50 to-transparent"></div>

      <ScrollVelocity
        texts={["EDUCATION"]}
        velocity={50}
        className="font-orbitron text-[#00D2BE]"
        parallaxClassName="bg-[#0D0D0D] py-8"
      />

      <Education />

      {/* Section Divider */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C0C0C0]/50 to-transparent"></div>

      <ScrollVelocity
        texts={["PROJECT GALLERY"]}
        velocity={50}
        className="font-orbitron text-[#00D2BE]"
        parallaxClassName="bg-[#0D0D0D] py-8"
      />

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
        {/* Background Pattern */}
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

        {/* Top Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D2BE] to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-[#00D2BE]"></div>
              <span className="font-orbitron text-[#00D2BE] text-xs tracking-[0.4em] uppercase">
                Featured Work
              </span>
              <div className="w-16 h-[2px] bg-[#00D2BE]"></div>
            </div>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
              PROJECT <span className="text-[#00D2BE]">SHOWCASE</span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C0C0C0]/50 to-transparent"></div>

      <ScrollVelocity
        texts={["GET IN TOUCH"]}
        velocity={50}
        className="font-orbitron text-[#00D2BE]"
        parallaxClassName="bg-[#0D0D0D] py-8"
      />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
