import { Mail } from 'lucide-react'
import { PROFILE, SOCIAL } from '../data/content.js'
import ContactForm from './ContactForm.jsx'
import { GithubIcon, LinkedinIcon } from './icons.jsx'
import Reveal from './Reveal.jsx'

const LINKS = [
  { label: 'Email', text: PROFILE.email, href: `mailto:${PROFILE.email}`, Icon: Mail, external: false },
  { label: 'GitHub', text: 'github.com/Nikhiljomon05', href: SOCIAL.github, Icon: GithubIcon, external: true },
  {
    label: 'LinkedIn',
    text: 'linkedin.com/in/nikhil-jomon-78b518313',
    href: SOCIAL.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden section-y"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_100%,rgba(181,18,32,0.28),transparent_70%)]"
      />
      <div className="container-x">
        <div className="mb-6 h-px w-full bg-gradient-to-r from-crimson via-crimson/30 to-transparent" />

        <Reveal>
          <h2
            id="contact-title"
            className="max-w-5xl font-display uppercase leading-[0.95] tracking-wide [font-size:clamp(2.75rem,8.5vw,7.5rem)]"
          >
            Let's build something great together.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-white/90">
              Recruiters, developers and collaborators are welcome to get in touch. If you have a role, a project or an
              idea that needs a full-stack developer who enjoys learning, send me a message.
            </p>

            <ul className="mt-8 space-y-4">
              {LINKS.map(({ label, text, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-crimson text-crimson-ember transition duration-300 group-hover:bg-crimson group-hover:text-white">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-mist">
                        {label}
                        {external && <span className="sr-only"> (opens in a new tab)</span>}
                      </span>
                      <span className="block break-all text-base group-hover:text-crimson-ember">{text}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="relative lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
