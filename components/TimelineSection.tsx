export default function TimelineSection() {
  return (
    <section id="jejak-saya" className="min-h-screen text-zinc-100 py-24 px-6 font-sans relative">
      {/* Background Watermark */}
      <div className="absolute bottom-10 right-10 text-[10vw] font-black text-white/[0.04] select-none pointer-events-none">
        HISTORY
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="fade-left duration-800 mb-20 space-y-4">
          <h2 className="text-5xl font-black tracking-tighter uppercase">
            Jejak / <span className="text-zinc-600">Langkah</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-20 bg-white" />
            <p className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase">
              System_Logs_Chronology
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* KIRI: PENDIDIKAN */}
          <div className="fade-top duration-1200 lg:col-span-4 z-10">
            <div className="p-8 border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm sticky top-24 overflow-hidden">
              {/* Aksen */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-zinc-800 rounded-full opacity-20 pointer-events-none" />

              <p className="text-xs font-bold mb-6 text-zinc-500 tracking-widest uppercase">
                Pendidikan - Sekarang
              </p>

              <h3 className="text-2xl font-black text-white tracking-tight">MAKN Ende</h3>

              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                Fokus di jurusan <span className="text-white font-semibold">PPLG</span>, mulai serius di dunia pengembangan web dari dasar sampai eksplorasi sistem.
              </p>

              {/* MINI TAGS */}
              <div className="flex gap-2 mt-6 text-[10px] font-mono">
                <span className="px-3 py-1 border border-zinc-800 text-zinc-400 rounded-full">
                  PPLG
                </span>
                <span className="px-3 py-1 border border-zinc-800 text-zinc-400 rounded-full">
                  WEB
                </span>
                <span className="px-3 py-1 border border-zinc-800 text-zinc-400 rounded-full">
                  SYSTEM
                </span>
              </div>
            </div>
          </div>

          {/* KANAN: PERJALANAN */}
          <div className="fade-bot duration-1600 lg:col-span-8 relative border-l border-zinc-800 ml-4 lg:ml-0 pl-8 lg:pl-12 space-y-16">
            {/* CROCODIC */}
            <div className="relative group">
              <div className="absolute -left-[37px] lg:-left-[53px] top-0 w-3 h-3 bg-zinc-800 border-4 border-[#09090b] group-hover:bg-white transition-colors" />

              <div className="space-y-4">
                <div className="group relative bg-zinc-950/50 backdrop-blur-sm inline-block pr-3 pl-3.5 pb-1 border border-zinc-800 overflow-hidden transition-all">
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 text-[9px] font-bold tracking-widest uppercase text-zinc-400 group-hover:text-black transition-colors">
                    2025 - 2026
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Kelas Industri Crocodic
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
                  Masuk ke kelas industri dan mulai mendalami backend development, khususnya Laravel serta pengembangan sistem monitoring berbasis web.
                </p>

                <div className="flex gap-3 text-[9px] font-mono text-zinc-600">
                  <span>[ LARAVEL ]</span>
                  <span>[ BACKEND ]</span>
                  <span>[ SYSTEM ]</span>
                </div>
              </div>
            </div>

            {/* LOMBA UI/UX */}
            <div className="relative group">
              <div className="absolute -left-[37px] lg:-left-[53px] top-0 w-3 h-3 bg-zinc-800 border-4 border-[#09090b] group-hover:bg-white transition-colors" />

              <div className="space-y-4">
                <div className="group relative inline-block pr-3 pl-3.5 pb-1 border border-zinc-800 overflow-hidden transition-all">
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 text-[9px] font-bold tracking-widest uppercase text-zinc-400 group-hover:text-black transition-colors">
                    2025 - 2026
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Juara 1 Lomba UI/UX
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
                  Mengikuti dan memenangkan lomba UI/UX dengan pendekatan desain modern, serta mulai memahami hubungan antara tampilan dan pengalaman pengguna.
                </p>

                <div className="flex gap-3 text-[9px] font-mono text-zinc-600">
                  <span>[ UI/UX ]</span>
                  <span>[ FIGMA ]</span>
                  <span>[ DESIGN ]</span>
                </div>
              </div>
            </div>

            {/* AWAL MINAT */}
            <div className="relative group">
              <div className="absolute -left-[37px] lg:-left-[53px] top-0 w-3 h-3 bg-zinc-800 border-4 border-[#09090b] group-hover:bg-white transition-colors" />

              <div className="space-y-4">
                <div className="group relative inline-block pr-3 pl-3.5 pb-1 border border-zinc-800 overflow-hidden transition-all">
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 text-[9px] font-bold tracking-widest uppercase text-zinc-400 group-hover:text-black transition-colors">
                    2024 - 2025
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Awal Ketertarikan PPLG
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
                  Masuk MAK Negeri Ende dengan rasa penasaran tinggi terhadap dunia teknologi. Mulai dari dasar HTML & CSS, membangun tampilan sederhana dan memahami struktur web dari nol.
                </p>

                <div className="flex gap-3 text-[9px] font-mono text-zinc-600">
                  <span>[ HTML ]</span>
                  <span>[ CSS ]</span>
                  <span>[ BASICS ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
