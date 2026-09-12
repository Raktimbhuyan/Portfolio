import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react'

const CONTACT_LINKS = [
  { icon: Mail, label: 'cseraktim@gmail.com', href: 'mailto:cseraktim@gmail.com' },
  { icon: Github, label: 'Github', href: 'https://github.com/Raktimbhuyan' },
  { icon: Linkedin, label: 'Linkedin', href: 'https://www.linkedin.com/in/raktim-bhuyan-9703582bb?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
]

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please add a short message.'
  return errors
}

// Swap this out for a real request (e.g. to an email service or your own
// backend endpoint) once one is ready — the form above doesn't need to change.
async function submitContactForm(values) {
  const res = await fetch('https://formspree.io/f/xwlkzgnn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(values),
  })
  if (!res.ok) throw new Error('Failed to send')
  return { ok: true }
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | sent

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    setErrors((err) => ({ ...err, [field]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    await submitContactForm(values)
    setStatus('sent')
    setValues({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <p className="font-mono text-sm text-amber-glow mb-3">Contact</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-fog mb-5">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            I&apos;m looking for internships and opportunities to grow as a
            full-stack developer. If you&apos;re a recruiter, a fellow developer,
            or just want to talk about a project, feel free to reach out.
          </p>

          <div className="space-y-4">
            {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted hover:text-amber-glow transition-colors"
              >
                <Icon size={17} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="md:col-span-3 glass rounded-xl p-6 sm:p-8 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-fog font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={values.name}
              onChange={handleChange('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="w-full rounded-lg bg-ink-panel2 border border-ink-border px-4 py-3 text-sm text-fog placeholder:text-muted/60 focus:border-amber-glow/60 outline-none transition-colors"
              placeholder="Your name"
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-red-400 mt-1.5">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-fog font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="w-full rounded-lg bg-ink-panel2 border border-ink-border px-4 py-3 text-sm text-fog placeholder:text-muted/60 focus:border-amber-glow/60 outline-none transition-colors"
              placeholder="yourname@gmail.com"
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-400 mt-1.5">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-fog font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={values.message}
              onChange={handleChange('message')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="w-full rounded-lg bg-ink-panel2 border border-ink-border px-4 py-3 text-sm text-fog placeholder:text-muted/60 focus:border-amber-glow/60 outline-none transition-colors resize-none"
              placeholder="Tell me a bit about the opportunity or project..."
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-red-400 mt-1.5">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-amber-glow text-ink900 font-medium text-sm py-3 hover:bg-amber-soft transition-colors disabled:opacity-60"
          >
            {status === 'sent' ? (
              <>
                <CheckCircle2 size={16} />
                Message Sent
              </>
            ) : (
              <>
                <Send size={16} />
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
