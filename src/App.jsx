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
import Footer from "./components/Footer"
import Contact from "./components/Contact"

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


  const hardSkills = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  ];

  const softSkills = [
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // teamwork
    "https://cdn-icons-png.flaticon.com/512/4140/4140048.png", // communication
    "https://cdn-icons-png.flaticon.com/512/190/190411.png", // problem solving
    "https://cdn-icons-png.flaticon.com/512/921/921347.png", // creativity
    "https://cdn-icons-png.flaticon.com/512/1828/1828919.png" // discipline
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
      {/* STACK SECTION */}
<section className="flex flex-col items-center justify-center py-20 bg-black border-t border-[#00A19B]/20">

  {/* TITLE */}
  <h2 className="text-xl font-semibold text-center mb-10">
    Skills Overview
  </h2>

  <div className="flex flex-col md:flex-row items-center justify-center gap-20">

    {/* HARD SKILLS */}
    <div className="flex flex-col items-center">
      <h3 className="text-sm text-white/50 mb-5">Hard Skills</h3>

      <div className="w-[250px] h-[250px] md:w-[320px] md:h-[320px]">
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
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          ].map((src, i) => (
            <div
              key={i}
              className="w-full h-full flex items-center justify-center bg-zinc-900 rounded-xl border border-[#00A19B]/20 shadow-lg"
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

    {/* SOFT SKILLS */}
    <div className="flex flex-col items-center">
      <h3 className="text-sm text-white/50 mb-5">Soft Skills</h3>

      <div className="w-[250px] h-[250px] md:w-[320px] md:h-[320px]">
        <Stack
          randomRotation={false}
          sensitivity={200}
          sendToBackOnClick={true}
          autoplay={false}
          cards={[
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // teamwork
            "https://cdn-icons-png.flaticon.com/512/4140/4140048.png", // communication
            "https://cdn-icons-png.flaticon.com/512/190/190411.png", // problem solving
            "https://cdn-icons-png.flaticon.com/512/921/921347.png", // creativity
            "https://cdn-icons-png.flaticon.com/512/1828/1828919.png" // discipline
          ].map((src, i) => (
            <div
              key={i}
              className="w-full h-full flex items-center justify-center bg-zinc-900 rounded-xl border border-blue-400/20 shadow-lg"
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

      <Contact />

      <Footer />
    </div>
  )
}

export default App