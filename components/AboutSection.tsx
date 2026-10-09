import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="siapa-saya" className="min-h-screen text-zinc-100 py-24 px-6 font-sans relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute lg:-top-[-5rem] -top-[-1rem] left-10 text-[15vw] font-black text-white/[0.02] select-none pointer-events-none leading-[0.8]">
        TENTANG SAYA
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* PHOTO CARD */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="fade-bot duration-800 relative group max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              {/* Frame 1 */}
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 border border-white/10 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

              {/* Frame 2 */}
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 border-2 border-white translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 md:translate-x-4 md:translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />

              {/* Image with Scanlines and Grayscale */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] bg-zinc-900 overflow-hidden border-4 sm:border-6 md:border-8 border-[#09090b] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                <Image
                  src="/img/hanan.jpg"
                  alt="Hanan Chaliq - Web Developer dari MAKN Ende"
                  title="Hanan Chaliq"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  referrerPolicy="no-referrer"
                  priority
                  className="object-cover scale-105 sm:scale-110 group-hover:scale-100 transition-transform duration-1000"
                />

                {/* CRT Scanline & Grain overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" />
              </div>

              {/* Badge */}
              <div className="absolute bottom-2 right-2 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-white text-black px-3 py-2 sm:p-3 md:p-4 font-black text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase shadow-[6px_6px_0px_0px_rgba(39,39,42,1)]">
                EST. 2026
              </div>
            </div>
          </div>

          {/* BIO DETAILS */}
          <div className="fade-top duration-1200 lg:col-span-7 order-1 lg:order-2 space-y-10">
            <div className="space-y-2">
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
                SIAPA <br />
                <span className="text-transparent text-stroke-white">
                  SAYA?
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <p className="text-zinc-400 leading-relaxed text-sm text-justify border-l-2 border-zinc-800 pl-6">
                  Saya <span className="text-white font-medium">Hanan Nurdin Ramadhan Chaliq</span> (Hanan Chaliq), seorang siswa di MAKN Ende. Saya merupakan <span className="text-white font-medium">Web Developer</span> yang berfokus pada <span className="text-white font-medium">efisiensi kode</span> dan <span className="text-white font-medium">kualitas</span> antarmuka pengguna. Dengan latar belakang PPLG, saya mendedikasikan diri untuk membangun <span className="text-white font-medium">arsitektur sistem yang bersih,</span> mulai dari struktur database hingga interaksi frontend yang <span className="text-white font-medium">presisi</span>. Saya tidak hanya menulis baris kode; saya membangun pengalaman digital yang <span className="text-white font-medium">bermakna</span>.
                </p>
              </div>

              <div className="fade-right duration-1400 md:col-span-4 flex flex-col justify-end space-y-4 font-mono">
                <div className="group">
                  <p className="text-[9px] text-zinc-500 mb-1">CORE_DEV</p>
                  <div className="h-1 w-full bg-zinc-900 overflow-hidden">
                    <div className="h-full bg-white w-full -translate-x-[25%] group-hover:translate-x-0 transition-transform duration-700" />
                  </div>
                </div>
                <div className="group">
                  <p className="text-[9px] text-zinc-500 mb-1">UI_ARCH</p>
                  <div className="h-1 w-full bg-zinc-900 overflow-hidden">
                    <div className="h-full bg-zinc-400 w-full -translate-x-[35%] group-hover:translate-x-0 transition-transform duration-700" />
                  </div>
                </div>
                <div className="group">
                  <p className="text-[9px] text-zinc-500 mb-1">AI_ASSIST</p>
                  <div className="h-1 w-full bg-zinc-900 overflow-hidden">
                    <div className="h-full bg-zinc-400 w-full -translate-x-[20%] group-hover:translate-x-0 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-6">
              <a
                href="/assets/hanan-cv.pdf"
                download
                className="group relative px-8 py-4 border bg-zinc-950/50 backdrop-blur-sm border-white overflow-hidden transition-all"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 text-xs font-bold tracking-[0.3em] uppercase text-white group-hover:text-black transition-colors">
                  Unduh_CV.sh
                </span>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-zinc-800" />
                <p className="text-[10px] text-zinc-400 font-mono italic">
                  &quot;Code is poetry in motion.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
