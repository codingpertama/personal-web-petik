import me from "../assets/rafa_mercy.jpeg";

export default function About() {
    return (
        <section id="about" className="bg-black text-white px-5 sm:px-8 md:px-16 lg:px-20 py-20 overflow-hidden border-t border-[#00A19B]/20">

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                {/* LEFT (TEXT) */}
                <div className="max-w-lg space-y-6">

                    <p className="text-[#00A19B] text-xs tracking-[0.2em] uppercase">
                        About Me
                    </p>

                    <h2 className="text-4xl md:text-4xl font-bold leading-snug">
                        I build things that <br />
                        <span className="text-[#00A19B]">actually feel good</span> to use.
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        Hi, Rafa here | a web developer driven by speed, precision, and performance.
                        I build modern digital experiences that feel fast, smooth, and effortless
                        to use.
                    </p>

                </div>

                {/* RIGHT (IMAGE CUSTOM) */}
                <div className="relative group">

                    {/* FRAME */}
                    <div className="absolute -inset-[2px] rounded-xl 
                  bg-gradient-to-br from-[#00A19B]/40 to-transparent 
                  opacity-70 group-hover:opacity-100 transition"></div>

                    {/* INNER CARD */}
                    <div className="relative bg-black rounded-xl p-2 border border-white/10">

                        <img src={me} alt="about" className="w-[280px] md:w-[360px] rounded-lg object-cover brightness-250" />

                    </div>

                </div>

            </div>

        </section>
    );
}