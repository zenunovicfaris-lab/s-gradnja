'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Layers,
  Building2,
  Home,
  Zap,
  Square,
  Grid3x3,
  Thermometer,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  Icon: LucideIcon
  title: string
  desc: string
  tag: string
}

const services: Service[] = [
  {
    Icon: Layers,
    title: 'Armiranje i šalovanje',
    desc: 'Svih vrsta AB ploča, temelja i stubova. Kvalitetno i sigurno po normativima.',
    tag: 'Konstrukcija',
  },
  {
    Icon: Building2,
    title: 'Zidanje',
    desc: 'Zidanje svih vrsta objekata – od stambenih do poslovnih, brzo i precizno.',
    tag: 'Gradnja',
  },
  {
    Icon: Home,
    title: 'Krovopokrivački radovi',
    desc: 'Postavljanje i sanacija krovova svih vrsta – vodootporno i trajno.',
    tag: 'Krov',
  },
  {
    Icon: Zap,
    title: 'Struja, voda, kanalizacija',
    desc: 'Kompletno razvođenje instalacija prema projektu i standardima.',
    tag: 'Instalacije',
  },
  {
    Icon: Square,
    title: 'Rigips i suha gradnja',
    desc: 'Pregradni zidovi, spušteni plafoni, termička i zvučna izolacija.',
    tag: 'Završni radovi',
  },
  {
    Icon: Grid3x3,
    title: 'Keramika i malterisanje',
    desc: 'Postavljanje keramike, malterisanje zidova i podova – besprijekorna završnica.',
    tag: 'Završni radovi',
  },
  {
    Icon: Thermometer,
    title: 'Podno grijanje',
    desc: 'Ugradnja sistema podnog grijanja za maksimalnu udobnost i energetsku efikasnost.',
    tag: 'Grijanje',
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-[#111111]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-oswald uppercase tracking-widest text-sm text-primary mb-2">
            ŠTA RADIMO
          </p>
          <div className="w-12 h-0.5 bg-primary mx-auto my-3" />
          <h2 className="font-oswald font-bold text-white text-4xl md:text-6xl uppercase leading-tight mb-4">
            Kompletna usluga od A do Z
          </h2>
          <p className="text-white/60 font-inter text-lg max-w-xl mx-auto">
            Sistem ključ u ruke – radimo sa materijalom ili bez
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/5">
          {services.map(({ Icon, title, desc, tag }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#1a1a1a] p-7 md:p-8 group cursor-default hover:bg-[#1f1f1f] hover:border-t hover:border-primary transition-all duration-300"
            >
              <p className="text-[10px] font-oswald uppercase tracking-widest text-primary/70 mb-3">
                {tag}
              </p>
              <Icon
                size={40}
                className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
              <h3 className="font-oswald font-bold text-white text-xl md:text-2xl uppercase mb-3 leading-tight">
                {title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-inter">
                {desc}
              </p>
              <div className="h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-500 mt-4" />
            </motion.div>
          ))}
        </div>

        {/* CTA below grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-white/60 font-inter mb-6 text-lg">
            Trebate procjenu cijene? Kontaktirajte nas – besplatna konzultacija!
          </p>
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-block bg-primary text-black font-oswald font-bold uppercase tracking-wider px-8 py-4 hover:bg-primary-dark hover:scale-105 transition-all duration-200"
          >
            Zatraži besplatnu procjenu
          </a>
        </motion.div>
      </div>
    </section>
  )
}
