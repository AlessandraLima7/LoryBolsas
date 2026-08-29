'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { WhatsappIcon } from '@/components/brand-icons'
import { whatsappLink } from '@/lib/site'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Personalizados', href: '#personalizados' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_15px_rgba(233,75,135,0.06)] border-b border-pink-100/70'
          : 'bg-white border-b border-pink-50/70',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <Link
          href="#inicio"
          className="group flex items-center transition-transform duration-200 hover:scale-[1.02]"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/optimized/lory-logo-header.webp"
            alt="Lory Bolsas Personalizadas"
            width={140}
            height={70}
            className="h-11 md:h-12 w-auto object-contain"
            style={{ width: 'auto' }}
            priority
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden items-center gap-1.5 lg:flex xl:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? 'page' : undefined}
              onClick={() => setActiveHref(item.href)}
              className={cn(
                'relative px-3.5 py-2 text-sm font-medium tracking-tight transition-colors duration-200',
                activeHref === item.href
                  ? 'text-[#E94B87] font-semibold'
                  : 'text-[#333333] hover:text-[#E94B87]',
              )}
            >
              {item.label}
              {activeHref === item.href && (
                <span className="absolute inset-x-3.5 bottom-0 h-0.5 rounded-full bg-[#E94B87]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: WhatsApp CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Link
              href={whatsappLink('Olá! Vim pelo site da Lory e gostaria de mais informações. 💕')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#E94B87] px-6 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(233,75,135,0.28)] transition-all duration-200 hover:bg-[#D43875] hover:shadow-[0_6px_18px_rgba(233,75,135,0.38)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsappIcon className="size-4.5" />
              <span>Falar no WhatsApp</span>
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-xl text-[#333333] transition-colors hover:bg-pink-50 hover:text-[#E94B87] lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        id="mobile-navigation"
        className={cn(
          'overflow-hidden border-t border-pink-100/70 bg-white/98 backdrop-blur-md transition-all duration-300 lg:hidden',
          open ? 'max-h-96 py-4' : 'max-h-0 py-0 border-t-0',
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? 'page' : undefined}
              onClick={() => {
                setActiveHref(item.href)
                setOpen(false)
              }}
              className={cn(
                'rounded-xl px-4 py-2.5 text-base font-medium transition-colors',
                activeHref === item.href
                  ? 'text-[#E94B87] bg-pink-50 font-semibold'
                  : 'text-[#333333] hover:text-[#E94B87] hover:bg-pink-50/50',
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-pink-100 sm:hidden">
            <Link
              href={whatsappLink('Olá! Vim pelo site da Lory e gostaria de mais informações. 💕')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E94B87] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(233,75,135,0.28)] transition-all hover:bg-[#D43875]"
            >
              <WhatsappIcon className="size-4.5" />
              <span>Falar no WhatsApp</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
