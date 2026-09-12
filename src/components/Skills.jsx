import { motion } from 'framer-motion'
import { TECH_ICONS } from '../data/techIcons'

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js'],
  },
  {
    label: 'Database',
    skills: ['MongoDB', 'Mongoose'],
  },
  {
    label: 'Other',
    skills: ['Git', 'GitHub'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05, ease: 'easeOut' },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-8 bg-ink-panel/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-amber-glow mb-3">Skills</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-fog">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="space-y-10">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-sm text-muted mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((name, i) => {
                  const Icon = TECH_ICONS[name]
                  return (
                    <motion.div
                      key={name}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.6 }}
                      variants={fadeUp}
                      whileHover={{ scale: 1.05 }}
                      className="glass flex items-center gap-2.5 rounded-lg px-4 py-3 hover:border-amber-glow/40 hover:shadow-glow transition-shadow"
                    >
                      {Icon && <Icon size={18} className="text-amber-glow" />}
                      <span className="text-sm text-fog font-medium">{name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
