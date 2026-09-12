import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, FileDown } from 'lucide-react'
import CodeWindow from './CodeWindow'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
     className="relative min-h-dvh flex items-start md:items-center pt-28 md:pt-24 pb-16 px-6 md:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-amber-glow/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-signal/10 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center w-full">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p variants={item} className="font-mono text-sm text-amber-glow mb-4">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-fog leading-[1.08] text-balance"
          >
            Raktim Bhuyan
          </motion.h1>

          <motion.h2
            variants={item}
            className="font-display text-xl sm:text-2xl text-violet-signal mt-3 mb-6"
          >
            Full-Stack Developer
          </motion.h2>

          <motion.p variants={item} className="text-muted text-base sm:text-lg leading-relaxed max-w-md mb-9">
            I build modern and responsive web applications using modern frontend and
            backend technologies, with a focus on creating clean, functional and
            user-friendly experiences.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-9">
            <a
              href="#projects"
              onClick={scrollTo('projects')}
              className="px-5 py-3 rounded-lg bg-amber-glow text-ink900 font-medium text-sm hover:bg-amber-soft transition-colors shadow-glow"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              onClick={scrollTo('contact')}
              className="px-5 py-3 rounded-lg border border-ink-border text-fog font-medium text-sm hover:border-violet-signal/50 hover:text-violet-signal transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-muted font-medium text-sm hover:text-fog transition-colors"
            >
              <FileDown size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-amber-glow transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-amber-glow transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hello@raktimbhuyan.dev"
              aria-label="Email"
              className="text-muted hover:text-amber-glow transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="hidden md:block"
        >
          <CodeWindow />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={scrollTo('about')}
        aria-label="Scroll to About section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-amber-glow transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
