import { motion } from 'framer-motion'
import { GraduationCap, Code2, Globe, Rocket } from 'lucide-react'

const INFO_CARDS = [
  { icon: GraduationCap, label: 'Computer Science Student' },
  { icon: Code2, label: 'Full-Stack Developer' },
  { icon: Globe, label: 'Web Application Development' },
  { icon: Rocket, label: 'Project-Based Learning' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p className="font-mono text-sm text-amber-glow mb-3">About</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-fog mb-6">
            About me
          </h2>
          <div className="space-y-4 text-muted text-base leading-relaxed max-w-md">
            <p>
              I&apos;m a Computer Science undergraduate with a strong interest in technology and software development. I enjoy learning new technologies, exploring how things work, and turning ideas into practical applications. I&apos;m particularly interested in full-stack development and problem solving, and I&apos;m continuously working on improving my skills by building projects and learning through hands-on experience.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {INFO_CARDS.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="glass rounded-xl p-5 flex flex-col gap-3 hover:border-amber-glow/30 transition-colors"
            >
              <Icon size={22} className="text-amber-glow" />
              <span className="text-fog text-sm font-medium leading-snug">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
