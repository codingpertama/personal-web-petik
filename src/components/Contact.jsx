export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const message = e.target.message.value;
        window.open(
            `https://wa.me/6281292810947?text=Halo saya ${name}, ${message}`
        );
    };

    return (
        <section
            id="contact"
            className="bg-black text-white border-t border-[#00A19B]/20"
        >
            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* Section label */}
                <p className="text-xs font-semibold tracking-[0.2em] text-[#00A19B] uppercase mb-3">
                    Get In Touch
                </p>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* ── LEFT: Info ── */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                            Let's work<br />
                            <span className="text-[#00A19B]">together.</span>
                        </h2>
                        <p className="text-zinc-400 text-base leading-relaxed mb-10 max-w-md">
                            Senang bisa berkenalan dengan Anda! Jika Anda memiliki pertanyaan, proyek, atau hanya ingin berdiskusi, jangan ragu untuk menghubungi saya. Saya akan dengan senang hati membalas pesan Anda melalui WhatsApp sesegera mungkin.
                        </p>

                        {/* Contact details */}
                        <div className="space-y-5">
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/6281292810947"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#00A19B]/50 transition-colors">
                                    <svg className="w-5 h-5 text-[#00A19B]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 mb-0.5">WhatsApp</p>
                                    <p className="text-sm text-white group-hover:text-[#00A19B] transition-colors">+62 812-9281-0947</p>
                                </div>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/codingpertama"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#00A19B]/50 transition-colors">
                                    <svg className="w-5 h-5 text-[#00A19B]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 mb-0.5">GitHub</p>
                                    <p className="text-sm text-white group-hover:text-[#00A19B] transition-colors">github.com/codingpertama</p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#00A19B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 mb-0.5">Location</p>
                                    <p className="text-sm text-white">Bogor, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Form ── */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6"
                    >
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                Your Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="Rafa Hafiz"
                                className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800
                                           text-white placeholder-zinc-600 text-sm
                                           focus:outline-none focus:border-[#00A19B] focus:ring-1 focus:ring-[#00A19B]/30
                                           transition-colors"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                placeholder="Halo, saya tertarik untuk berkolaborasi..."
                                className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800
                                           text-white placeholder-zinc-600 text-sm resize-none
                                           focus:outline-none focus:border-[#00A19B] focus:ring-1 focus:ring-[#00A19B]/30
                                           transition-colors"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-[#00A19B] text-black
                                       font-semibold px-6 py-3 rounded-xl
                                       hover:bg-[#00bfb8] active:scale-95
                                       transition-all duration-200"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Kirim via WhatsApp
                        </button>

                        <p className="text-center text-xs text-zinc-600">
                            Pesan akan dikirim melalui WhatsApp secara langsung.
                        </p>
                    </form>

                </div>
            </div>
        </section>
    );
}
