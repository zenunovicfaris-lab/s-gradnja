import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'S-Gradnja Zenica – Kompletni Građevinski Radovi | Zenica i šire',
  description:
    'S-Gradnja Zenica – vaš pouzdan partner za kompletne završne građevinske radove. Armiranje, zidanje, krovovi, keramika, rigips, podno grijanje. Sistem ključ u ruke. Pozovite: 064 41 93 275',
  keywords:
    'S-Gradnja Zenica, građevinski radovi Zenica, završni radovi, armiranje, zidanje, krovovi, keramika, rigips, podno grijanje, ključ u ruke',
  openGraph: {
    title: 'S-Gradnja Zenica – Kompletni Građevinski Radovi',
    description:
      'Gradite? Renovirate? Radite s najboljima! Kompletan servis od temelja do završnih radova.',
    locale: 'bs_BA',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://s-gradnja.ba',
  name: 'S-Gradnja',
  description:
    'Kompletni završni građevinski radovi u Zenici i šire. Sistem ključ u ruke.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ravne do 13 A',
    addressLocality: 'Zenica',
    postalCode: '72000',
    addressCountry: 'BA',
  },
  telephone: '+38764419327',
  priceRange: '$$',
  openingHours: 'Mo-Fr 07:00-17:00',
  hasMap: 'https://maps.google.com/?q=Zenica,+Bosna+i+Hercegovina',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="bs"
      className={`${oswald.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter bg-white text-[#0a0a0a] antialiased">
        {children}
      </body>
    </html>
  )
}
