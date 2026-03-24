'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'O nama', href: '#o-nama' },
  { label: 'Usluge', href: '#usluge' },
  { label: 'Portfolio', href: '#radovi' },
  { label: 'Recenzije', href: '#recenzije' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#111111]/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-28">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#hero')}
              className="flex-shrink-0"
              aria-label="S-Gradnja – početna stranica"
            >
              <Image
                src="/logo/s-gradnja-logo.png"
                alt="S-Gradnja logo"
                height={200}
                width={400}
                className="h-16 md:h-24 w-auto object-contain"
                priority
              />
            </button>

            {/* Desktop nav */}
            <nav
              role="navigation"
              aria-label="Glavna navigacija"
              className="hidden md:flex items-center gap-8"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-white/80 hover:text-white font-inter text-sm uppercase tracking-widest transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <a
                href="tel:06441932756"
                className="bg-primary text-black font-oswald font-bold px-5 py-2 uppercase tracking-wider hover:bg-primary-dark transition-colors text-sm"
                aria-label="Pozovite nas na 064 41 93 275"
              >
                Pozovite nas
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#111111] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8" role="navigation" aria-label="Mobilna navigacija">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white font-oswald font-bold text-3xl uppercase tracking-wider hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                href="tel:06441932756"
                className="mt-4 bg-primary text-black font-oswald font-bold px-8 py-4 uppercase tracking-wider text-xl hover:bg-primary-dark transition-colors"
                aria-label="Pozovite nas"
              >
                Pozovite nas
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
