import { Github, Linkedin, Mail } from 'lucide-react'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const handleClick = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-ink-border px-6 md:px-8 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-10">
        <div>
          <p className="font-display font-semibold text-lg text-fog">Raktim Bhuyan</p>
          <p className="text-muted text-sm mt-1">Full-Stack Developer</p>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleClick(link.id)}
                  className="text-sm text-muted hover:text-amber-glow transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-amber-glow transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-amber-glow transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:hello@raktimbhuyan.dev" aria-label="Email" className="text-muted hover:text-amber-glow transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <p className="max-w-6xl mx-auto text-xs text-muted/70 mt-10 pt-6 border-t border-ink-border">
        © {new Date().getFullYear()} Raktim Bhuyan. All rights reserved.
      </p>
    </footer>
  )
}
