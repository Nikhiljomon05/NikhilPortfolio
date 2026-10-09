import { useRef, useState } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { PROFILE } from '../data/content.js'

// Set VITE_FORM_ENDPOINT (see README) to send messages through a form service such as Formspree.
// Without it, the form falls back to opening the visitor's email app with the message filled in.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const EMPTY = { name: '', email: '', message: '', website: '' } // `website` is a honeypot for bots

function validate({ name, email, message }) {
  const errors = {}
  if (name.trim().length < 2) errors.name = 'Enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
    errors.email = 'Enter a valid email address, like name@example.com.'
  if (message.trim().length < 10) errors.message = 'Write a message of at least 10 characters.'
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', text: '' })
  const formRef = useRef(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      setStatus({ type: 'error', text: 'Fix the highlighted fields and send again.' })
      const first = ['name', 'email', 'message'].find((k) => found[k])
      formRef.current?.querySelector(`[name="${first}"]`)?.focus()
      return
    }

    // Honeypot filled in: act as if it worked, send nothing.
    if (values.website) {
      setStatus({ type: 'success', text: 'Message sent. Thank you!' })
      setValues(EMPTY)
      return
    }

    const { name, email, message } = values

    if (ENDPOINT) {
      setStatus({ type: 'sending', text: 'Sending your message…' })
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, email, message }),
        })
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
        setStatus({ type: 'success', text: `Message sent. Thank you, ${name.trim()} — I'll reply soon.` })
        setValues(EMPTY)
      } catch {
        setStatus({
          type: 'error',
          text: `The message didn't send. Check your connection and try again, or email ${PROFILE.email} directly.`,
        })
      }
      return
    }

    // Fallback: no backend configured — open the visitor's email app.
    const subject = encodeURIComponent(`Portfolio message from ${name.trim()}`)
    const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()} (${email.trim()})`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
    setStatus({
      type: 'success',
      text: `Your email app should open with the message ready to send. If it doesn't, write to ${PROFILE.email}.`,
    })
  }

  const field = (id, label, props = {}) => {
    const error = errors[id]
    const Tag = props.as ?? 'input'
    return (
      <div>
        <label htmlFor={id} className="mb-2 block text-sm font-bold">
          {label}
        </label>
        <Tag
          id={id}
          name={id}
          value={values[id]}
          onChange={onChange}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-lg border bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:border-crimson-ember focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-ember/60 ${
            error ? 'border-crimson-ember' : 'border-white/15'
          }`}
          {...props.input}
        />
        {error && (
          <p id={`${id}-error`} className="mt-2 flex items-start gap-2 text-sm text-crimson-ember">
            <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            {error}
          </p>
        )}
      </div>
    )
  }

  const sending = status.type === 'sending'

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="panel space-y-5" aria-label="Contact form">
      {field('name', 'Name', { input: { type: 'text', autoComplete: 'name', placeholder: 'Your name' } })}
      {field('email', 'Email', {
        input: { type: 'email', autoComplete: 'email', placeholder: 'you@example.com' },
      })}
      {field('message', 'Message', {
        as: 'textarea',
        input: { rows: 5, placeholder: 'Tell me about the role, project or idea.' },
      })}

      {/* Honeypot: hidden from people, visible to simple bots */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} />
      </div>

      <button type="submit" disabled={sending} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        {sending ? <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> : <Send aria-hidden="true" className="h-4 w-4" />}
        {sending ? 'Sending…' : 'Send message'}
      </button>

      <div role="status" aria-live="polite" className="min-h-[1.5rem] text-sm">
        {status.type === 'success' && (
          <p className="flex items-start gap-2 text-emerald-300">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            {status.text}
          </p>
        )}
        {status.type === 'error' && (
          <p className="flex items-start gap-2 text-crimson-ember">
            <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            {status.text}
          </p>
        )}
        {status.type === 'sending' && <p className="text-mist">{status.text}</p>}
      </div>
    </form>
  )
}
