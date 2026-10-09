export default function HeroSection() {
  return (
    <section id="awal" className="relative min-h-screen text-white flex items-center px-6 overflow-hidden">
      {/* TYPO BESAR WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[14vw] font-semibold text-white/[0.02] tracking-tight">SYSTEM</h1>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full grid lg:grid-cols-12 gap-16 py-20">
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-8">
          <div className="fade-bot duration-1000 text-[10px] tracking-[0.3em] uppercase text-zinc-500">
            <span className="text-zinc-200 font-bold">Hanan Chaliq</span> — Web Developer
          </div>

          <h1 className="fade-top duration-1100 text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
            Bukan Sekadar Coding. <br />
            Saya Membangun Struktur.
          </h1>

          <p className="fade-left duration-1300 max-w-md text-sm text-zinc-400 leading-relaxed">
            Berfokus pada pengembangan sistem yang terstruktur, rapi, dan efisien. Setiap proses dimulai dengan perencanaan yang matang untuk menghasilkan output yang maksimal dan stabil.
          </p>

          {/* TAGS */}
          <div className="fade-left duration-1300 flex flex-wrap gap-2 text-[10px]">
            <span className="px-3 py-1 border border-zinc-800 text-zinc-400 rounded-full">STRUCTURED</span>
            <span className="px-3 py-1 border border-zinc-800 text-zinc-400 rounded-full">CLEAN</span>
            <span className="px-3 py-1 border border-zinc-800 text-zinc-400 rounded-full">MAX OUTPUT</span>
          </div>

          {/* CTA */}
          <div className="fade-right duration-1600 flex items-center gap-6 pt-4">
            <a
              href="#ruang-karya"
              className="group relative px-6 py-3 border border-white bg-zinc-950/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-xs font-semibold uppercase tracking-[0.25em] text-white group-hover:text-black transition-colors">
                Lihat Sistem
              </span>
            </a>

            <a
              href="#hubungi-saya"
              className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition"
            >
              Hubungi
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 border-l border-zinc-800 pl-8 space-y-8 flex flex-col justify-center">
          <div className="fade-right duration-800 space-y-2">
            <p className="text-[10px] tracking-widest text-zinc-500 uppercase">Prinsip</p>
            <h3 className="text-lg font-semibold text-white">Struktur yang Jelas</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Sistem dibangun dengan fondasi rapi agar mudah dikembangkan dan minim error.
            </p>
          </div>

          <div className="fade-right duration-1800 space-y-2">
            <h3 className="text-lg font-semibold text-white">Hasil Maksimal</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Tidak hanya berjalan, tetapi memastikan performa dan tujuan jelas.
            </p>
          </div>

          <div className="fade-right duration-2800 space-y-2">
            <h3 className="text-lg font-semibold text-white">Perencanaan Awal</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Semua dimulai dari persiapan matang agar proses lebih efisien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
