import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
});

export const metadata: Metadata = {
  title: 'Hanan Chaliq | Web Developer',
  description:
    'Portfolio Hanan Chaliq, seorang Web Developer dari MAKN Ende yang berfokus pada efisiensi kode dan arsitektur sistem yang bersih.',
  keywords: [
    'Hanan Chaliq',
    'Web Developer',
    'Laravel Developer',
    'MAKN Ende',
    'Portfolio Hanan Chaliq',
  ],
  authors: [{ name: 'Hanan Chaliq' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Hanan Chaliq | Web Developer',
    description: 'Membangun sistem yang terstruktur, rapi, dan efisien.',
    type: 'website',
    url: 'https://portfolio-hanan-chi.vercel.app',
    images: [
      {
        url: 'https://portfolio-hanan-chi.vercel.app/img/hanan.jpg',
        width: 800,
        height: 1000,
        alt: 'Hanan Chaliq - Web Developer dari MAKN Ende',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanan Chaliq | Web Developer',
    description: 'Membangun sistem yang terstruktur, rapi, dan efisien.',
    images: ['https://portfolio-hanan-chi.vercel.app/img/hanan.jpg'],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'Person',
  name: 'Hanan Nurdin Ramadhan Chaliq',
  alternateName: 'Hanan Chaliq',
  jobTitle: 'Web Developer',
  description:
    'Pengembang perangkat lunak yang berfokus pada efisiensi kode dan arsitektur sistem bersih.',
  affiliation: {
    '@type': 'EducationalOrganization',
    name: 'MAKN Ende',
  },
  knowsAbout: ['Web Development', 'Laravel', 'Tailwind CSS', 'PHP'],
  url: 'https://portofolio-hanan.vercel.app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexSans.variable} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-zinc-950 text-white min-h-screen relative" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
