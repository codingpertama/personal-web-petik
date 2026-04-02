import About from "./components/About"
import Stack from "./components/Stack"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ScrollVelocity from "./components/ScrollVelocity"
import Education from "./components/Education"
import ProjectCard from "./components/ProjectCard"
import petshop from "./assets/petshop.png"
import bogor from "./assets/bogor.png"
import elektronik from "./assets/elektronik.png"

function App() {

  const projects = [
    {
      title: "Website Petshop",
      desc: "Website untuk membeli makanan hewan peliharaan yang terhubung dengan whatsapp.",
      image: petshop,
      tech: ["HTML", "CSS"],
      link: "https://codingpertama.github.io/webshop.github.io/"
    },
    {
      title: "Website Artikel Kota Bogor",
      desc: "Website untuk menampilkan informasi tentang kota Bogor.",
      image: bogor,
      tech: ["HTML", "CSS"],
      link: "https://codingpertama.github.io/projectbogor/"
    },
    {
      title: "Website Elektronik",
      desc: "Website untuk menampilkan Produk elektronik.",
      image: elektronik,
      tech: ["HTML", "CSS"],
      link: "https://codingpertama.github.io/el-singko/"
    }
  ];


  const images = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  ];

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />

      <ScrollVelocity
        texts={['About Me']}
        velocity={50}
        className="text-[#00A19B]"
        parallaxClassName="bg-black py-10"
      />

      <About />
      <ScrollVelocity
        texts={['My Skills']}
        velocity={50}
        className="text-[#00A19B]"
        parallaxClassName="bg-black py-10"
      />

      {/* STACK SECTION */}
      <section className="flex flex-col items-center justify-center py-20 bg-black border-t border-[#00A19B]/20">

        {/* TEXT AJAKAN */}
        <div className="relative flex justify-center mb-10">
          <h2 className="text-sm md:text-base font-light text-white/50 animate-bounce text-center">
            Click ↓
          </h2>
        </div>

        {/* STACK */}
        <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
          <Stack
            randomRotation={false}
            sensitivity={200}
            sendToBackOnClick={true}
            cards={images.map((src, i) => (
              <div
                key={i}
                className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1111] to-[#000] rounded-xl border border-[#00A19B]/20 shadow-lg"
              >
                <img
                  src={src}
                  alt={`card-${i + 1}`}
                  className="w-40 h-40 object-contain"
                />
              </div>
            ))}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={false}
          />
        </div>

      </section>
      <ScrollVelocity
        texts={['Education']}
        velocity={50}
        className="text-[#00A19B]"
        parallaxClassName="bg-black py-10"
      />

      <Education />

      <ScrollVelocity
        texts={['Gallery Project']}
        velocity={50}
        className="text-[#00A19B]"
        parallaxClassName="bg-black py-10"
      />

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

    </div>
  )
}

export default App