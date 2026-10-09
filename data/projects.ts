export interface Project {
  title: string;
  desc: string;
  image: string;
  tech: string;
  code: string;
  live: string;
  percent: string[];
}

export const projectsData: Project[] = [
  {
    title: "Project Sistem Perpus",
    desc: "Sistem modern untuk pengelolaan perpustakaan dengan dashboard administrasi dan analitik data secara real-time untuk kebutuhan institusi.",
    image: "/projects/e-perpus.png",
    tech: "PHP Native • Tailwind • MySQL",
    code: "https://github.com/hananchaliq/sistem-perpus",
    live: "#",
    percent: ["40%", "30%", "30%"],
  },
  {
    title: "Osim Management System",
    desc: "Desain UI/UX berbasis Figma untuk sistem organisasi OSIS, dilengkapi arsip digital dan manajemen kegiatan sekolah secara terstruktur dan modern.",
    image: "/projects/osim-makn-ende.png",
    tech: "Figma • UI/UX Design • Prototype",
    code: "https://www.figma.com/design/pJglPhbdpgUoQpEMbUKQBr/Untitled?node-id=0-1&p=f&t=lbC5HLPJ48sbAbgk-0",
    live: "https://www.figma.com/proto/pJglPhbdpgUoQpEMbUKQBr/Untitled?node-id=363-52&p=f&t=lbC5HLPJ48sbAbgk-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=363%3A52",
    percent: ["80%", "10%", "10%"],
  },
  {
    title: "Ruang Etalasys",
    desc: "Website organisasi komunitas yang berfokus pada pelaporan keuangan serta kalkulator anggaran otomatis untuk kebutuhan usaha lokal.",
    image: "/projects/ruang-etalasys.png",
    tech: "PHP • Tailwind • MySQL",
    code: "https://github.com/hananchaliq/ruang-etalasys",
    live: "#",
    percent: ["40%", "35%", "25%"],
  },
  {
    title: "Hanan Topup Store",
    desc: "Sistem toko top up digital dengan panel admin berbasis Filament Laravel untuk pengelolaan produk, transaksi, dan data pelanggan secara terstruktur dan efisien.",
    image: "/projects/hanan-topup.png",
    tech: "Filament Laravel • Tailwind • MySQL",
    code: "https://github.com/hananchaliq/hanantopupstore",
    live: "#",
    percent: ["50%", "25%", "25%"],
  },
  {
    title: "Filament Laravel",
    desc: "Proyek pembelajaran pembuatan panel admin menggunakan Filament Laravel dengan integrasi database MySQL untuk memahami struktur CRUD dan manajemen data.",
    image: "/projects/filament-laravel.png",
    tech: "Filament Laravel • MySQL",
    code: "https://github.com/hananchaliq/laravel-filament",
    live: "#",
    percent: ["70%", "30%"],
  },
  {
    title: "Latansa Shop",
    desc: "Website toko sederhana untuk kebutuhan penjualan online dengan sistem dasar yang ringan dan mudah dikelola.",
    image: "/projects/latansa-shop.png",
    tech: "HTML • Tailwind CSS • JavaScript",
    code: "https://github.com/hananchaliq/latansa-shop",
    live: "https://latansa-shop.vercel.app/",
    percent: ["25%", "35%", "40%"],
  },
  {
    title: "Toko Buku Sederhana",
    desc: "Website toko sederhana untuk penjualan buku dengan sistem dasar yang dibangun dengan bahasa pemerograman HTML & CSS Dasar.",
    image: "/projects/toko-buku-sederhana.png",
    tech: "HTML • CSS",
    code: "https://github.com/hananchaliq/flexhan-Toko-buku",
    live: "#",
    percent: ["60%", "40%"],
  },
  {
    title: "Portof FlexHan",
    desc: "Website portofolio sederhana dengan pemrograman html & css dasar dengan tampilan menu yang bersifat berubah.",
    image: "/projects/flexhan.png",
    tech: "HTML • CSS",
    code: "https://github.com/hananchaliq/portofolio",
    live: "#",
    percent: ["65%", "35%"],
  },
  {
    title: "Kasir Halalood",
    desc: "Website Kasir digital dengan tampilan yang dashboard yang lengkap dan cakep, dibangun dengan dasar php yang kuat",
    image: "/projects/kasir-halalood.png",
    tech: "PHP Native • HTML • CSS",
    code: "https://github.com/hananchaliq/project-akhir-crocodic-basic",
    live: "#",
    percent: ["30%", "40%", "30%"],
  },
];
