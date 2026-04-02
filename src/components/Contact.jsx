export default function Contact() {
    return (
        <div className="flex flex-col items-center w-full">
            <section id="contact" className="bg-black text-white px-10 md:px-20 py-20 border-t border-[#00A19B]/20 justify-center w-full">

                {/* Form */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();

                        const name = e.target.name.value;
                        const message = e.target.message.value;

                        window.open(
                            `https://wa.me/6281292810947?text=Halo saya ${name}, ${message}`
                        );
                    }}
                    className="max-w-4xl w-full space-y-5"
                >

                    {/* Name */}
                    <div>
                        <label className="text-sm text-white/70">Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className="w-full mt-1 p-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:outline-none focus:border-[#00A19B]"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="text-sm text-white/70">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your message..."
                            className="w-full mt-1 p-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:outline-none focus:border-[#00A19B]"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="bg-[#00A19B] text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
                    >
                        Send Message
                    </button>

                </form>

            </section>
        </div>
    );
}