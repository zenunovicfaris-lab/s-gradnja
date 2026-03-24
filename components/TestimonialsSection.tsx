'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  name: string
  initials: string
  rating: number
  date: string
  text: string
  category: string
  verified: boolean
}

const testimonials: Testimonial[] = [
  {
    name: 'S-Gradnja (vlasnik)',
    initials: 'SG',
    rating: 5,
    date: 'Novembar 2024',
    text: 'Pružamo kompletne završne građevinske radove na području Zenice i šire. Armiranje, šalovanje, zidanje, krovopokrivački radovi, rigips, keramika, podno grijanje. Radimo sa materijalom ili bez. Sistem ključ u ruke.',
    category: 'Vlasnik',
    verified: true,
  },
  {
    name: 'Amir Hodžić',
    initials: 'AH',
    rating: 5,
    date: 'Oktobar 2024',
    text: 'Odlična ekipa, sve urađeno kako je dogovoreno i u roku. Postavili nam keramiku i uradili malterisanje cijelog stana – savršen posao. Preporučujem bez rezerve!',
    category: 'Završni radovi',
    verified: true,
  },
  {
    name: 'Selma Mujić',
    initials: 'SM',
    rating: 5,
    date: 'Septembar 2024',
    text: 'Profesionalci na djelu! Ugradili podno grijanje i rigips u našoj kući. Čisto, uredno, bez nereda. Cijena fer, dogovor poštovan. Hvala S-Gradnja timu!',
    category: 'Podno grijanje',
    verified: true,
  },
  {
    name: 'Edin Kovačević',
    initials: 'EK',
    rating: 5,
    date: 'Avgust 2024',
    text: 'Kontaktirao sam ih za krovopokrivačke radove na vikendici. Brzo reagirali, dali detaljnu ponudu bez skrivenih troškova. Krov gotov za 4 dana. Vrhunski!',
    category: 'Krovni radovi',
    verified: true,
  },
  {
    name: 'Jasmina Softić',
    initials: 'JS',
    rating: 5,
    date: 'Juli 2024',
    text: 'Kompletna renovacija stana – od armiranja do završnih radova. Ispoštovani svi dogovori, majstori ljubazni i uredni. Rezultat bolji nego što sam se nadala. 5/5!',
    category: 'Kompletna renovacija',
    verified: true,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} od 5 zvjezdica`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-primary text-xl font-oswald" aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(1)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [paused, next])

  const getVisible = () => {
    const indices: number[] = [current]
    return indices
  }

  return (
    <section
      className="py-20 md:py-28 lg:py-36 bg-[#0f0f0f]"
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-oswald uppercase tracking-widest text-sm text-primary mb-2">
            RECENZIJE
          </p>
          <div className="w-12 h-0.5 bg-primary mx-auto my-3" />
          <h2 className="font-oswald font-bold text-white text-4xl md:text-5xl uppercase mb-8 leading-tight">
            Šta kažu naši klijenti
          </h2>

          {/* Google widget */}
          <div className="inline-flex items-center gap-3 bg-white rounded px-4 py-3 shadow-lg">
            {/* Google G */}
            <svg width="24" height="24" viewBox="0 0 24 24" aria-label="Google">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="font-bold text-[#0a0a0a] text-lg leading-none">5.0</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-yellow-400 text-base" aria-hidden="true">★</span>
                  ))}
                </div>
              </div>
              <p className="text-[#6b7280] text-xs">Ocjene na Google-u</p>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[current, (current + 1) % testimonials.length, (current + 2) % testimonials.length].map(
                  (idx, pos) => {
                    const t = testimonials[idx]
                    return (
                      <div
                        key={idx}
                        className={`bg-[#1a1a1a] border border-white/5 p-6 md:p-8 transition-transform duration-300 ${
                          pos === 1 ? 'lg:scale-[1.03]' : ''
                        } ${pos !== 0 ? 'hidden md:block' : ''} ${pos === 2 ? 'md:hidden lg:block' : ''}`}
                      >
                        {/* Verified badge */}
                        {t.verified && (
                          <p className="text-green-400 text-xs font-inter mb-3">
                            ✓ Google recenzija
                          </p>
                        )}

                        {/* Stars */}
                        <Stars count={t.rating} />

                        {/* Quote */}
                        <div className="relative mt-4 mb-4">
                          <span
                            className="absolute -top-2 -left-1 text-primary text-5xl font-oswald leading-none opacity-40 select-none"
                            aria-hidden="true"
                          >
                            &ldquo;
                          </span>
                          <p className="text-white/70 font-inter text-sm leading-relaxed italic pt-4 pl-4">
                            {t.text}
                          </p>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                          <div
                            className="bg-primary text-black rounded-full w-12 h-12 font-oswald font-bold text-lg flex items-center justify-center flex-shrink-0"
                            aria-hidden="true"
                          >
                            {t.initials}
                          </div>
                          <div>
                            <p className="font-oswald font-bold text-white text-lg leading-tight">
                              {t.name}
                            </p>
                            <p className="text-primary/70 text-xs uppercase tracking-wider font-inter">
                              {t.category} · {t.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  }
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center hover:bg-primary-dark transition-colors"
              aria-label="Prethodna recenzija"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`h-2 transition-all duration-300 ${
                    i === current ? 'w-8 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Recenzija ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center hover:bg-primary-dark transition-colors"
              aria-label="Sljedeća recenzija"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
