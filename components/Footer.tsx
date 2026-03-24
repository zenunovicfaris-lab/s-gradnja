'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram, MapPin, Phone, Clock } from 'lucide-react'

const serviceLinks = [
  'Armiranje i šalovanje',
  'Zidanje',
  'Krovopokrivački radovi',
  'Rigips i suha gradnja',
  'Keramika i malterisanje',
  'Podno grijanje',
]

const sectionIds: Record<string, string> = {
  'Armiranje i šalovanje': '#usluge',
  'Zidanje': '#usluge',
  'Krovopokrivački radovi': '#usluge',
  'Rigips i suha gradnja': '#usluge',
  'Keramika i malterisanje': '#usluge',
  'Podno grijanje': '#usluge',
}

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0a0a0a] border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 – Brand */}
          <div>
            <button
              onClick={() => scrollTo('#hero')}
              aria-label="S-Gradnja – povratak na vrh"
              className="block mb-4"
            >
              <Image
                src="/logo/s-gradnja-logo.png"
                alt="S-Gradnja logo"
                height={60}
                width={170}
                className="h-14 w-auto object-contain"
              />
            </button>
            <p className="text-white/50 text-sm font-inter mt-3">
              Gradnja · Renoviranje · Završni radovi
            </p>
            <p className="text-white/40 text-sm font-inter mt-2 leading-relaxed max-w-xs">
              Vaš pouzdan partner u Zenici i šire. Preciznost i kvalitet su naš standard.
            </p>
            <motion.a
              href="https://www.instagram.com/s_gradnja2026/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="inline-block mt-5 text-white/50 hover:text-primary transition-colors"
              aria-label="S-Gradnja Instagram profil"
            >
              <Instagram size={22} />
            </motion.a>
          </div>

          {/* Column 2 – Services */}
          <div>
            <p className="font-oswald text-primary uppercase tracking-wider font-bold mb-5 text-sm">
              USLUGE
            </p>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <motion.button
                    onClick={() => scrollTo(sectionIds[s] ?? '#usluge')}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                    className="text-white/50 font-inter text-sm hover:text-primary transition-colors text-left"
                  >
                    {s}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Contact */}
          <div>
            <p className="font-oswald text-primary uppercase tracking-wider font-bold mb-5 text-sm">
              KONTAKT
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-white/50 font-inter text-sm leading-relaxed">
                  Ravne do 13 A<br />
                  Zenica 72000, BiH
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:06441932756"
                  className="text-white/50 font-inter text-sm hover:text-primary transition-colors"
                  aria-label="Pozovite na 064 41 93 275"
                >
                  064 41 93 275
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="text-white/50 font-inter text-sm leading-relaxed">
                  Pon–Pet: 07:00–17:00<br />
                  Sub: 08:00–14:00
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-inter">
            © 2024 S-Gradnja. Sva prava zadržana.
          </p>
          <p className="text-white/30 text-xs font-inter">
            Made with <span className="text-primary">♥</span> in Zenica
          </p>
        </div>
      </div>
    </footer>
  )
}
