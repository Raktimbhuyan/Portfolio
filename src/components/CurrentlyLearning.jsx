import { motion } from 'framer-motion'
import { Layers, Server, GitBranch, BrainCircuit } from 'lucide-react'

const ITEMS = [
  {
    icon: Layers,
    title: 'Advanced React',
    desc: 'Deeper patterns around state, performance and component design.',
  },
  {
    icon: Server,
    title: 'Next.js',
    desc: 'Server-side rendering and full-stack React conventions.',
  },
  {
    icon: GitBranch,
    title: 'Full-Stack Development',
    desc: 'Connecting frontend, backend and databases into complete apps.',
  },
  {
    icon: BrainCircuit,
    title: 'Data Structures & Algorithms',
    desc: 'Building a stronger foundation for problem solving and interviews.',
  },
]

export default function CurrentlyLearning() {
  return (
    <section className="py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-sm text-amber-glow mb-3"
        >
          Currently Learning
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-ink-border p-5 hover:border-violet-signal/30 transition-colors"
            >
              <Icon size={18} className="text-violet-signal mb-3" />
              <h3 className="text-fog text-sm font-semibold mb-1">{title}</h3>
              <p className="text-muted text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
