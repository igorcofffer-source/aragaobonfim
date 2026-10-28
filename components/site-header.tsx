'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#grupo', label: 'O Grupo' },
  { href: '#historia', label: 'História' },
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        solid
          ? 'bg-primary/95 shadow-lg backdrop-blur'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3 text-primary-foreground">
          <Image
            src="/images/logo-m.jpg"
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-full bg-white object-cover ring-2 ring-white/30"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-base font-semibold tracking-wide">
              Grupo Aragão Bonfim
            </span>
            <span className="text-xs text-primary-foreground/70">
              Engenharia para a indústria
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contato"
          className="hidden rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Fale conosco
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
          <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Menu móvel" className="border-t border-primary-foreground/10 md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-primary-foreground/90"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
