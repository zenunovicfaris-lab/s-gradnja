'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './LogoLoop.module.css'

interface Logo {
  src: string
  alt: string
}

interface LogoLoopProps {
  logos: Logo[]
  speed?: number
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
}

export default function LogoLoop({
  logos,
  speed = 35,
  logoHeight = 42,
  gap = 56,
  pauseOnHover = true,
}: LogoLoopProps) {
  const [paused, setPaused] = useState(false)
  const doubled = [...logos, ...logos]

  return (
    <div
      className={`${styles.marqueeWrapper} ${paused ? styles.paused : ''}`}
      style={{ '--duration': `${speed}s` } as React.CSSProperties}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div className={styles.marqueeTrack}>
        {doubled.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className={styles.logoItem}
            style={{ padding: `0 ${gap / 2}px` }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              height={logoHeight}
              width={logoHeight * 3}
              style={{
                height: `${logoHeight}px`,
                width: 'auto',
                objectFit: 'contain',
              }}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
