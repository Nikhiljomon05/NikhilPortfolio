import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content.js'
import useActiveSection from '../hooks/useActiveSection.js'

const IDS = NAV_LINKS.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-ink/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="container-x flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={close}
          aria-label="Nikhil Jomon — back to top"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-crimson font-display text-lg tracking-wide transition hover:bg-crimson"
        >
          NJ
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`relative py-2 text-sm transition-colors hover:text-white ${
                  active === id ? 'text-white' : 'text-mist'
                }`}
              >
                {label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-crimson-ember transition-transform duration-300 ${
                    active === id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden !px-5 !py-2 lg:inline-flex">
          Get in touch
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 lg:hidden">
          <ul className="container-x flex flex-col py-4">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={close}
                  aria-current={active === id ? 'true' : undefined}
                  className={`block border-b border-white/5 py-3 font-display text-2xl uppercase tracking-wide ${
                    active === id ? 'text-crimson-ember' : 'text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
