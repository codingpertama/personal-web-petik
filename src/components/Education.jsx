export default function Education() {
  const educationData = [
    {
      year: "2024 - Sekarang",
      school: "SMK Wikrama Bogor",
      major: "PPLG (Pengembangan Perangkat Lunak dan Gim)",
      desc: "Belajar web development, database, dan basic AI. Fokus pada frontend dan backend.",
    },
    {
      year: "2021 - 2024",
      school: "SMPN 1 Cisarua",
      major: "-",
      desc: "Belajar dasar-dasar pelajaran umum dan mulai tertarik pada dunia teknologi.",
    },
  ];

  return (
    <section id="education" className="bg-black text-white py-20 px-6 md:px-20">

      {/* TIMELINE */}
      <div className="relative border-l border-white/20 ml-4 md:ml-10">
        {educationData.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* DOT */}
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full"></span>

            {/* CONTENT */}
            <div className="bg-white/5 p-5 rounded-xl hover:bg-white/10 transition duration-300">
              <h3 className="text-xl font-semibold text-cyan-400">
                {item.school}
              </h3>
              <p className="text-sm text-gray-400">{item.year}</p>
              <p className="mt-2 text-gray-200">
                <span className="font-medium">Jurusan:</span> {item.major}
              </p>
              <p className="mt-1 text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}