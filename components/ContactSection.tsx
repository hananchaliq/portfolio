'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const phoneNumber = '6282146020022';

    // Format WhatsApp message
    const text = encodeURIComponent(
      `Halo, perkenalkan saya ${name}.\n\n` +
        `Saya tertarik dengan karya dan pengalaman yang ditampilkan pada portfolio Anda.\n` +
        `Saya ingin mendiskusikan kemungkinan kerja sama lebih lanjut.\n\n` +
        `Pesan:\n${message}\n\n` +
        `Silakan hubungi saya melalui email berikut:\n${email}\n\n` +
        `Saya menantikan respons Anda. Terima kasih.`
    );

    const waUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hubungi-saya" className="min-h-screen text-zinc-100 py-24 px-6 font-sans relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute left-0 bottom-0 text-[13vw] font-black text-white/[0.02] pointer-events-none select-none">
        CONNECT
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="fade-bot duration-800 mb-20">
          <p className="text-[10px] tracking-[0.5em] text-zinc-500 uppercase mb-4">
            Communication Channel
          </p>
          <h2 className="text-5xl font-black tracking-tight">
            Terhubung dengan <span className="text-zinc-500">Saya</span>
          </h2>
        </div>

        <div className="fade-left duration-800 grid grid-cols-1 lg:grid-cols-12 border border-zinc-800">
          {/* LEFT PANEL */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-zinc-800 p-10 flex flex-col justify-between bg-zinc-950/50 backdrop-blur-sm relative overflow-hidden">
            {/* HEAD */}
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mb-3">
                  Collaboration
                </p>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Mari Bangun Sesuatu <br />
                  yang Berdampak
                </h3>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                Saya terbuka untuk kerja sama dalam pengembangan website, sistem, maupun optimasi proyek digital. Fokus pada solusi yang efisien, terstruktur, persiapan yang matang, dan siap digunakan.
              </p>
            </div>

            {/* VALUE / KELEBIHAN */}
            <div className="mt-10 space-y-4 text-[12px] font-mono text-zinc-500">
              <p>[ terstruktur ] → planning yang rinci & presisi</p>
              <p>[ fleksibel ] → bisa adaptasi kebutuhan proyek</p>
              <p>[ fokus ] → hasil maximal, bukan sekadar coding</p>
            </div>

            {/* CTA MINI */}
            <div className="mt-10 border-t border-zinc-800 pt-6 space-y-4">
              <p className="text-xs text-zinc-500 uppercase tracking-widest">Hubungi melalui:</p>

              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="https://www.instagram.com/hnanrmdhn"
                  className="group flex justify-between items-center text-zinc-400 hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Instagram</span>
                  <span className="w-8 h-[1px] bg-zinc-700 group-hover:bg-white transition" />
                </a>

                <a
                  href="https://github.com/hananchaliq"
                  className="group flex justify-between items-center text-zinc-400 hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>
                  <span className="w-8 h-[1px] bg-zinc-700 group-hover:bg-white transition" />
                </a>

                <a
                  href="https://www.linkedin.com/in/hananchaliq"
                  className="group flex justify-between items-center text-zinc-400 hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
                  <span className="w-8 h-[1px] bg-zinc-700 group-hover:bg-white transition" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-7 p-10 bg-zinc-950/70 backdrop-blur-sm relative overflow-hidden">
            <form id="contactForm" onSubmit={handleSubmit} className="space-y-10" suppressHydrationWarning>
              {/* INPUT GROUP */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-zinc-500">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-zinc-700 py-2 focus:outline-none focus:border-white transition text-sm text-white placeholder-zinc-600"
                    placeholder="Hanan"
                    suppressHydrationWarning
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-zinc-500">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-zinc-700 py-2 focus:outline-none focus:border-white transition text-sm text-white placeholder-zinc-600"
                    placeholder="name@example.com"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-700 py-2 focus:outline-none focus:border-white transition text-sm text-white placeholder-zinc-600 resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                  suppressHydrationWarning
                />
              </div>

              {/* BUTTON */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative w-full py-4 border border-white overflow-hidden transition-all cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 text-sm font-bold uppercase tracking-[0.3em] text-white group-hover:text-black transition-colors">
                    Kirim Pesan
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
