import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2 } from 'lucide-react'
import { TECH_ICONS } from '../data/techIcons'

export default function ProjectCard({ project, index }) {
  const { title, icon: Icon = Code2, description, tech, liveUrl, githubUrl } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="bracket-frame glass rounded-xl transition-shadow hover:shadow-glow p-6"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-ink-panel2 border border-ink-border text-amber-glow shrink-0">
          <Icon size={18} />
        </span>
        <h3 className="font-display font-semibold text-xl text-fog">{title}</h3>
      </div>
      <p className="text-muted text-sm leading-relaxed mb-5">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => {
          const TechIcon = TECH_ICONS[t]
          return (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-ink-panel2 text-amber-soft border border-ink-border"
            >
              {TechIcon && <TechIcon size={13} />}
              {t}
            </span>
          )
        })}
      </div>

      {/* <div className="flex items-center gap-4">
        <a
          href={liveUrl || '#'}
          target={liveUrl ? '_blank' : undefined}
          rel="noreferrer"
          aria-disabled={!liveUrl}
          onClick={(e) => !liveUrl && e.preventDefault()}
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
            liveUrl ? 'text-amber-glow hover:text-amber-soft' : 'text-muted/50 cursor-not-allowed'
          }`}
        >
          <ExternalLink size={15} />
          Live Demo
        </a>
        <a
          href={githubUrl || '#'}
          target={githubUrl ? '_blank' : undefined}
          rel="noreferrer"
          aria-disabled={!githubUrl}
          onClick={(e) => !githubUrl && e.preventDefault()}
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
            githubUrl ? 'text-fog hover:text-violet-signal' : 'text-muted/50 cursor-not-allowed'
          }`}
        >
          <Github size={15} />
          GitHub
        </a>
      </div> */}
    </motion.div>
  )
}
