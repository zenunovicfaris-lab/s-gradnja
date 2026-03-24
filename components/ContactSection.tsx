'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Clock, Instagram } from 'lucide-react'

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!form.name.trim() || !form.email.trim()) {
      setError('Ime i email su obavezna polja.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json() as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Došlo je do greške. Pokušajte ponovo.')
      } else {
        setSuccess(true)
        setForm({ name: '', email: '', phone: '', service: '', message: '' })
      }
    } catch {
      setError('Greška u mreži. Provjerite konekciju.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'bg-white/5 border border-white/10 focus:border-primary text-white placeholder:text-white/30 px-4 py-3 w-full outline-none transition-colors font-inter text-sm rounded-sm'
  const labelClass =
    'text-white/50 text-xs uppercase tracking-widest font-inter block mb-2'

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-[#111111]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-oswald uppercase tracking-widest text-sm text-primary mb-2">
            KONTAKT
          </p>
          <div className="w-12 h-0.5 bg-primary mx-auto my-3" />
          <h2 className="font-oswald font-bold text-white text-4xl md:text-5xl uppercase leading-tight">
            Kontaktirajte nas danas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left – Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-oswald font-bold text-white text-2xl md:text-3xl uppercase mb-1">
              Zatražite besplatnu procjenu
            </h3>
            <p className="text-primary text-sm font-inter mb-8">
              Odgovaramo u roku od 2 sata
            </p>

            {success ? (
              <div className="bg-green-500/20 border border-green-500 text-green-400 p-6 rounded-sm font-inter">
                <p className="font-bold text-lg mb-1">Poruka primljena!</p>
                <p className="text-sm">Kontaktiramo vas uskoro. Hvala na povjerenju!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Ime i prezime *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Vaše ime"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email adresa *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="vas@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Broj telefona
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+387 6x xxx xxx"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    Vrsta radova
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled className="bg-[#1a1a1a] text-white/50">
                      Odaberite uslugu...
                    </option>
                    <option value="Armiranje i šalovanje" className="bg-[#1a1a1a] text-white">Armiranje i šalovanje</option>
                    <option value="Zidanje" className="bg-[#1a1a1a] text-white">Zidanje</option>
                    <option value="Krovopokrivački radovi" className="bg-[#1a1a1a] text-white">Krovopokrivački radovi</option>
                    <option value="Instalacije (struja/voda)" className="bg-[#1a1a1a] text-white">Instalacije (struja/voda)</option>
                    <option value="Rigips i suha gradnja" className="bg-[#1a1a1a] text-white">Rigips i suha gradnja</option>
                    <option value="Keramika i malterisanje" className="bg-[#1a1a1a] text-white">Keramika i malterisanje</option>
                    <option value="Podno grijanje" className="bg-[#1a1a1a] text-white">Podno grijanje</option>
                    <option value="Kompletna renovacija" className="bg-[#1a1a1a] text-white">Kompletna renovacija</option>
                    <option value="Ostalo" className="bg-[#1a1a1a] text-white">Ostalo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Poruka
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Opišite vaš projekat ili pitanje..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm font-inter bg-red-500/10 border border-red-500/30 px-4 py-3 rounded-sm">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-black font-oswald font-bold uppercase tracking-wider px-8 py-4 hover:bg-primary-dark transition-colors w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Slanje...' : 'Pošalji upit'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right – Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10">
                <MapPin size={20} className="text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-white/80 font-inter text-sm">
                  Ravne do 13 A, Zenica 72000
                </span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10">
                <Phone size={20} className="text-primary flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:06441932756"
                  className="text-white/80 font-inter text-sm hover:text-primary transition-colors"
                  aria-label="Pozovite na 064 41 93 275"
                >
                  064 41 93 275
                </a>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10">
                <Instagram size={20} className="text-primary flex-shrink-0" aria-hidden="true" />
                <a
                  href="https://www.instagram.com/s_gradnja2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 font-inter text-sm hover:text-primary transition-colors"
                  aria-label="S-Gradnja na Instagramu"
                >
                  @s_gradnja2026
                </a>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10">
                <Clock size={20} className="text-primary flex-shrink-0" aria-hidden="true" />
                <div className="text-white/80 font-inter text-sm">
                  <p>Pon–Pet: 07:00–17:00</p>
                  <p>Sub: 08:00–14:00</p>
                </div>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45246.82!2d17.8977!3d44.2030!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee1a6b7cf29c7%3A0x3e5a5e7b9e0c7e8f!2sZenica!5e0!3m2!1sbs!2sba!4v1699000000000!5m2!1sbs!2sba"
              width="100%"
              height="260"
              style={{
                border: 0,
                filter: 'grayscale(30%) contrast(1.1)',
                display: 'block',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="S-Gradnja lokacija – Zenica"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
