import { personalInfo, socialLinks } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-surface w-full py-8 border-t border-surface-container-high">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-lg font-bold text-primary tracking-tight">
          {personalInfo.name}
        </div>
        <p className="text-on-surface-variant text-xs">
          &copy; {new Date().getFullYear()} {personalInfo.name}.
        </p>
        <div className="flex gap-6">
          {socialLinks.map(link => (
            <a
              key={link.label}
              className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors duration-200"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
