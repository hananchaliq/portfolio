export default function SkillsSection() {
  return (
    <section id="senjata" className="min-h-screen text-zinc-200 py-24 px-6 font-sans relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute -top-20 left-10 text-[12vw] font-black text-white/[0.02] select-none pointer-events-none">
        EQUIPMENT
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="fade-right duration-600 relative mb-20">
          <div className="absolute -left-10 top-1/2 w-32 h-[1px] bg-white hidden lg:block" />
          <h2 className="text-6xl font-black tracking-tighter uppercase italic ml-0 lg:ml-28">
            Senjata{' '}
            <span className="text-transparent text-stroke-white">
              Utama
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 lg:-space-x-[1px] lg:-space-y-[1px]">
          {/* PHP */}
          <div className="fade-bot duration-800 group relative p-10 border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:bg-white transition-all overflow-hidden lg:translate-y-0">
            <div className="relative z-10">
              <div className="mb-8 text-zinc-500 group-hover:text-black text-6xl transition-colors">
                <i className="fa-brands fa-php" />
              </div>
              <span className="font-mono text-[9px] text-zinc-600 group-hover:text-zinc-600 tracking-[0.3em]">
                CLASS: BACKEND_CORE
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white group-hover:text-black italic transition-colors">
                PHP
              </h3>
              <p className="text-[11px] text-zinc-500 group-hover:text-zinc-700 uppercase transition-colors">
                Logika utama pada sisi server.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1 h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* LARAVEL */}
          <div className="fade-bot duration-800 group relative p-10 border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:bg-white transition-all overflow-hidden lg:translate-y-10">
            <div className="relative z-10">
              <div className="mb-8 text-zinc-500 group-hover:text-black text-6xl transition-colors">
                <i className="fa-brands fa-laravel" />
              </div>
              <span className="font-mono text-[9px] text-zinc-600 group-hover:text-zinc-600 tracking-[0.3em]">
                CLASS: FRAMEWORK
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white group-hover:text-black italic transition-colors">
                LARAVEL
              </h3>
              <p className="text-[11px] text-zinc-500 group-hover:text-zinc-700 uppercase transition-colors">
                Framework untuk pengembangan yang lebih terstruktur.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1 h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* JAVASCRIPT */}
          <div className="fade-bot duration-800 group relative p-10 border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:bg-white transition-all overflow-hidden lg:translate-y-20">
            <div className="relative z-10">
              <div className="mb-8 text-zinc-500 group-hover:text-black text-6xl transition-colors">
                <i className="fa-brands fa-square-js" />
              </div>
              <span className="font-mono text-[9px] text-zinc-600 group-hover:text-zinc-600 tracking-[0.3em]">
                CLASS: LIGHT_AGILITY
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white group-hover:text-black italic transition-colors">
                JAVASCRIPT
              </h3>
              <p className="text-[11px] text-zinc-500 group-hover:text-zinc-700 uppercase transition-colors">
                Menangani interaksi pada sisi klien.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1 h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* TAILWIND CSS */}
          <div className="fade-bot duration-800 group relative p-10 border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:bg-white transition-all overflow-hidden lg:translate-y-0">
            <div className="relative z-10">
              <div className="mb-8 text-zinc-500 group-hover:text-black transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
              </div>
              <span className="font-mono text-[9px] text-zinc-600 group-hover:text-zinc-600 tracking-[0.3em]">
                CLASS: UI_ENGINE
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white group-hover:text-black italic transition-colors">
                TAILWIND CSS
              </h3>
              <p className="text-[11px] text-zinc-500 group-hover:text-zinc-700 uppercase transition-colors">
                Mempermudah proses penataan tampilan.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1 h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* MYSQL DB */}
          <div className="fade-bot duration-800 group relative p-10 border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:bg-white transition-all overflow-hidden lg:translate-y-10">
            <div className="relative z-10">
              <div className="mb-8 text-zinc-500 group-hover:text-black text-6xl transition-colors">
                <i className="fas fa-database" />
              </div>
              <span className="font-mono text-[9px] text-zinc-600 group-hover:text-zinc-600 tracking-[0.3em]">
                CLASS: DATABASE
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white group-hover:text-black italic transition-colors">
                MYSQL DB
              </h3>
              <p className="text-[11px] text-zinc-500 group-hover:text-zinc-700 uppercase transition-colors">
                Sistem penyimpanan data yang stabil.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1 h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* AI HYBRID */}
          <div className="fade-bot duration-800 group relative p-10 border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:bg-white transition-all overflow-hidden lg:translate-y-20">
            <div className="relative z-10">
              <div className="mb-8 animate-pulse text-zinc-500 group-hover:text-black text-6xl transition-colors">
                <i className="fa-solid fa-brain" />
              </div>
              <span className="font-mono text-[9px] text-zinc-600 group-hover:text-zinc-600 tracking-[0.3em]">
                CLASS: AUGMENTED_INTEL
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white group-hover:text-black italic transition-colors">
                AI HYBRID
              </h3>
              <p className="text-[11px] text-zinc-500 group-hover:text-zinc-700 uppercase transition-colors">
                Integrasi teknologi AI untuk optimasi sistem.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1 h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* FONT AWESOME */}
          <div className="fade-bot duration-800 group relative p-10 border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:bg-white transition-all overflow-hidden lg:translate-y-0">
            <div className="relative z-10">
              <div className="mb-8 text-zinc-500 group-hover:text-black text-6xl transition-colors">
                <i className="fa-solid fa-icons" />
              </div>
              <span className="font-mono text-[9px] text-zinc-600 group-hover:text-zinc-600 tracking-[0.3em]">
                CLASS: ICON_SYSTEM
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white group-hover:text-black italic transition-colors">
                FONT AWESOME
              </h3>
              <p className="text-[11px] text-zinc-500 group-hover:text-zinc-700 uppercase transition-colors">
                Menyediakan ikon untuk memperkaya tampilan.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1 h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* SWEETALERT */}
          <div className="fade-bot duration-800 group relative p-10 border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:bg-white transition-all overflow-hidden lg:translate-y-10">
            <div className="relative z-10">
              <div className="mb-8 text-zinc-500 group-hover:text-black text-6xl transition-colors">
                <i className="fa-solid fa-bell" />
              </div>
              <span className="font-mono text-[9px] text-zinc-600 group-hover:text-zinc-600 tracking-[0.3em]">
                CLASS: ALERT_UI
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white group-hover:text-black italic transition-colors">
                SWEETALERT
              </h3>
              <p className="text-[11px] text-zinc-500 group-hover:text-zinc-700 uppercase transition-colors">
                Menampilkan notifikasi dengan tampilan modern.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1 h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* SEARCHING NEXT GEAR */}
          <div className="fade-bot duration-800 relative p-10 border border-dashed border-zinc-800 bg-zinc-950/50 backdrop-blur-sm flex items-center justify-center group overflow-hidden lg:translate-y-20">
            <div className="text-center">
              <div className="w-10 h-10 border border-zinc-800 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:border-white transition-colors">
                <span className="text-zinc-600 group-hover:text-white transition-colors text-lg">+</span>
              </div>
              <p className="font-mono text-[8px] text-zinc-700 group-hover:text-zinc-400 uppercase tracking-widest transition-colors">
                Searching_Next_Gear
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
