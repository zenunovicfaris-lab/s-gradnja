'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const videoY = useTransform(scrollY, [0, 600], [0, 180])

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden w-full"
    >
      {/* Background video with parallax */}
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-video.mp4"
          aria-hidden="true"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-primary/20 border border-primary text-primary text-sm font-inter uppercase tracking-widest px-4 py-2 mb-8"
        >
          <Zap size={14} className="flex-shrink-0" aria-hidden="true" />
          Zenica i šire · Sistem ključ u ruke
        </motion.div>

        {/* H1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-oswald font-bold text-white text-6xl md:text-8xl lg:text-[110px] leading-none tracking-tight uppercase">
            GRADITE?
            <br />
            RENOVIRATE?
          </h1>
          <div className="w-24 h-1 bg-primary mt-4 mb-6 mx-auto" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl font-inter leading-relaxed mx-auto mb-8"
        >
          Vrijeme je da radite s najboljima. S-Gradnja je vaš pouzdan partner za
          kompletne završne radove – preciznost, brzina, bez skrivenih troškova.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:06441932756"
            className="bg-primary text-black font-oswald font-bold text-lg px-8 py-4 uppercase tracking-wider hover:bg-primary-dark hover:scale-105 transition-all duration-200 w-full sm:w-auto text-center"
            aria-label="Pozovite odmah na 064 41 93 275"
          >
            Pozovite odmah
          </a>
          <a
            href="#usluge"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#usluge')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border-2 border-white/50 text-white font-oswald text-lg px-8 py-4 uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-200 w-full sm:w-auto text-center"
          >
            Naše usluge ↓
          </a>
        </motion.div>
      </div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-primary text-black py-3 z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 font-oswald font-bold text-sm uppercase tracking-wider">
          <span>📍 Ravne do 13 A, Zenica</span>
          <span className="hidden sm:block">|</span>
          <a href="tel:06441932756" className="hover:underline">📞 064 41 93 275</a>
          <span className="hidden sm:block">|</span>
          <span>⭐ 5.0 Google ocjena</span>
        </div>
      </motion.div>
    </section>
  )
}
