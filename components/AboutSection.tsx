'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Calendar, Building2, Users, Star } from 'lucide-react'

const stats = [
  { number: 5, suffix: '+', label: 'Godina iskustva', Icon: Calendar },
  { number: 50, suffix: '+', label: 'Završenih projekata', Icon: Building2 },
  { number: 30, suffix: '+', label: 'Zadovoljnih klijenata', Icon: Users },
  { number: 5, suffix: '★', label: 'Google ocjena', Icon: Star },
]

const values = [
  'Preciznost i pažnja prema detaljima',
  'Poštovanje rokova bez izuzetka',
  'Transparentne cijene, bez iznenađenja',
  'Iskusni i certificirani majstori',
  'Kompletna usluga od A do Ž',
]

function AnimatedCounter({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const duration = 1500
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [trigger, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <p className="font-oswald uppercase tracking-widest text-sm text-primary">
                O NAMA
              </p>
              <div className="w-12 h-0.5 bg-primary my-3" />
              <h2 className="font-oswald font-bold text-[#0a0a0a] text-4xl md:text-5xl uppercase leading-tight mb-6">
                Vaš pouzdan partner<br />za gradnju i renoviranje
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-[#374151] font-inter leading-relaxed mb-8">
              <p>
                S-Gradnja je građevinska firma iz Zenice specijalizirana za kompletne
                završne radove. Sa godinama iskustva i predanim timom stručnjaka,
                garantujemo preciznost, poštovanje rokova i kvalitet koji traje.
              </p>
              <p>
                Radimo sa materijalom ili bez – prema vašim željama i budžetu.
                Sistem &quot;ključ u ruke&quot; znači da vi mirujete, a mi radimo sve.
              </p>
            </motion.div>

            <motion.ul variants={itemVariants} className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-inter text-[#374151]">{v}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right column – stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ number, suffix, label, Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-[#111] text-white p-6 md:p-8 border border-transparent hover:border-primary/30 transition-colors duration-300"
              >
                <Icon size={32} className="text-primary mb-3" aria-hidden="true" />
                <p className="font-oswald font-bold text-4xl md:text-5xl text-primary">
                  <AnimatedCounter target={number} suffix={suffix} trigger={isInView} />
                </p>
                <p className="text-white/60 text-sm uppercase tracking-wider mt-1 font-inter">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
