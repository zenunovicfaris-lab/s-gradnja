'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

interface Project {
  title: string
  tag: string
  src: string
}

const projects: Project[] = [
  { title: 'Stambeni objekat',       tag: 'Zidanje i završni radovi',   src: '/images/stambeni-objekat.jpg' },
  { title: 'AB ploča i armiranje',   tag: 'Konstrukcijski radovi',      src: '/images/ab-ploca-armiranje.jpg' },
  { title: 'Krovopokrivački radovi', tag: 'Krov i izolacija',           src: '/images/krovopokrivacki-radovi.jpg' },
  { title: 'Keramika i malterisanje',tag: 'Završni radovi',             src: '/images/keramika-malterisanje.jpg' },
  { title: 'Instalacije',            tag: 'Struja, voda, kanalizacija', src: '/images/instalacije.jpg' },
  { title: 'Podno grijanje',         tag: 'Grijanje i izolacija',       src: '/images/podno-grijanje.jpg' },
]

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-oswald uppercase tracking-widest text-sm text-primary mb-2">
            NAŠI RADOVI
          </p>
          <div className="w-12 h-0.5 bg-primary mx-auto my-3" />
          <h2 className="font-oswald font-bold text-[#0a0a0a] text-4xl md:text-5xl uppercase leading-tight">
            Kvalitet koji govori sam za sebe
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, tag, src }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-[4/3] relative overflow-hidden group"
            >
              {/* Real image */}
              <Image
                src={src}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark gradient overlay – always visible for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Yellow hover overlay */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Title/tag – visible by default at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[10px] font-oswald uppercase tracking-widest text-white/70 group-hover:text-black/60 mb-1 transition-colors duration-300">
                  {tag}
                </p>
                <h3 className="font-oswald font-bold text-white group-hover:text-black text-xl uppercase transition-colors duration-300">
                  {title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
