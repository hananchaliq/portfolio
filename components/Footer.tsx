export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden border-t bg-zinc-950/50 z-10 border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* TOP */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* IDENTITY */}
          <div className="space-y-5 max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Portfolio Hanan</h2>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Dibangun dengan pendekatan pengembangan sistem yang efisien, terstruktur, dan berbasis logika pengembang. Setiap proses dibantu oleh kecerdasan buatan untuk mempercepat implementasi tanpa mengurangi kualitas hasil.
            </p>

            <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-600">
              Hanan Nurdin Ramadhan Chaliq - Web Developer
            </p>
          </div>

          {/* NAV MENU */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm">
            <a href="#awal" className="text-zinc-500 hover:text-white transition">
              Awal
            </a>
            <a href="#siapa-saya" className="text-zinc-500 hover:text-white transition">
              Siapa Saya
            </a>
            <a href="#jejak-saya" className="text-zinc-500 hover:text-white transition">
              Jejak Saya
            </a>
            <a href="#senjata" className="text-zinc-500 hover:text-white transition">
              Senjata Utama
            </a>
            <a href="#ruang-karya" className="text-zinc-500 hover:text-white transition">
              Karya Saya
            </a>
            <a href="#hubungi-saya" className="text-zinc-500 hover:text-white transition">
              Terhubung dengan Saya
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-white/10" />

        {/* BOTTOM LINE */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase">
            © 2026 HANAN NURDIN RAMADHAN CHALIQ
          </p>

          <p className="text-xs text-zinc-500 italic">
            Built with AI-led execution & developer-directed structured thinking.
          </p>
        </div>
      </div>
    </footer>
  );
}
