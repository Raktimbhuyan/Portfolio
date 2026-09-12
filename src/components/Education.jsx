import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 md:px-8 bg-ink-panel/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-amber-glow mb-3">Education</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-fog">
            Academic background
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="relative pl-10"
        >
          <div className="absolute left-0 top-1 w-9 h-9 rounded-full glass flex items-center justify-center">
            <GraduationCap size={17} className="text-amber-glow" />
          </div>
          <div className="absolute left-[17px] top-10 bottom-0 w-px bg-ink-border" />

          <div className="glass rounded-xl p-6">
            <h3 className="font-display font-semibold text-lg text-fog mb-1">
              B.Tech in Computer Science &amp; Engineering
            </h3>
            <p className="text-violet-signal text-sm font-medium">Assam Down Town University</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
