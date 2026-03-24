'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import LogoLoop from './LogoLoop'

const logos = [
  { src: '/brendovi/Austrotherm.png', alt: 'Austrotherm' },
  { src: '/brendovi/baumit.png',      alt: 'Baumit' },
  { src: '/brendovi/Bekament.png',    alt: 'Bekament' },
  { src: '/brendovi/bosch.png',       alt: 'Bosch' },
  { src: '/brendovi/ceresit.png',     alt: 'Ceresit' },
  { src: '/brendovi/Hilti.png',       alt: 'Hilti' },
  { src: '/brendovi/JCB.png',         alt: 'JCB' },
  { src: '/brendovi/makita.png',      alt: 'Makita' },
  { src: '/brendovi/Nexe.png',        alt: 'Nexe' },
  { src: '/brendovi/sika.png',        alt: 'Sika' },
  { src: '/brendovi/Ytong.png',       alt: 'Ytong' },
]

export default function BrandsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 md:py-28 border-t-4 border-primary bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-oswald uppercase tracking-widest text-sm text-primary mb-2">
            PARTNERI I MATERIJALI
          </p>
          <div className="w-12 h-0.5 bg-primary mx-auto my-3" />
          <h2 className="font-oswald font-bold text-[#0a0a0a] text-4xl md:text-5xl uppercase leading-tight mb-3">
            Radimo isključivo sa<br />certificiranim brendovima
          </h2>
          <p className="text-[#6b7280] font-inter text-base max-w-xl mx-auto">
            Kvalitetni materijali su temelj dugovječnih radova
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <LogoLoop
            logos={logos}
            speed={80}
            direction="left"
            logoHeight={44}
            gap={56}
            pauseOnHover
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#ffffff"
            scaleOnHover
            ariaLabel="Brendovi sa kojima radimo"
          />
        </motion.div>
      </div>
    </section>
  )
}
