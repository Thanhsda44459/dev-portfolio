import { useEffect, useState } from 'react'
import { navLinks, personalInfo } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(l => document.getElementById(l.href.slice(1)))
      const scrollPos = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActive(navLinks[i].href.slice(1))
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md transition-shadow duration-200 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="flex justify-between items-center h-16 max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-xl font-bold text-primary tracking-tight">
          {personalInfo.name}
        </div>

        <button
          className="!hidden max-md:!flex material-symbols-outlined text-on-surface text-[26px] cursor-pointer select-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? 'close' : 'menu'}
        </button>

        <div className="max-md:hidden flex gap-6 items-center text-sm font-medium">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleClick(e, link.href)}
              className={
                active === link.href.slice(1)
                  ? 'text-primary border-b-2 border-primary pb-0.5 transition-colors duration-200'
                  : 'text-on-surface-variant hover:text-primary transition-colors duration-200'
              }
            >
              {link.label}
            </a>
          ))}
          <button className="bg-primary text-on-primary px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-container transition-colors duration-200 cursor-pointer">
            Hire Me
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 max-md:block hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-surface z-50 max-md:block hidden shadow-2xl transform transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-5">
          <button
            className="material-symbols-outlined text-on-surface text-[26px] cursor-pointer"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            close
          </button>
        </div>

        <div className="flex flex-col gap-3 px-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleClick(e, link.href)}
              className={
                active === link.href.slice(1)
                  ? 'text-primary font-medium text-base border-l-2 border-primary pl-3 py-2'
                  : 'text-on-surface-variant hover:text-primary font-medium text-base pl-3 py-2 transition-colors'
              }
            >
              {link.label}
            </a>
          ))}
          <button className="bg-primary text-on-primary w-full py-3 rounded-lg text-sm font-medium hover:bg-primary-container transition-colors duration-200 mt-3 cursor-pointer">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  )
}
