import { motion } from 'framer-motion'
import { Hourglass } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-amber-glow mb-3">Projects</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-fog mb-4">
            My Work
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: projects.length * 0.1, ease: 'easeOut' }}
            className="rounded-xl border border-dashed border-ink-border p-6 flex flex-col items-center justify-center text-center gap-3 min-h-[180px]"
          >
            <Hourglass size={22} className="text-muted" />
            <p className="text-sm text-muted max-w-[220px]">
              More projects coming soon.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
