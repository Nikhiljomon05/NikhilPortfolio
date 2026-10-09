import { PROFILE, SOCIAL } from '../data/content.js'
import { GithubIcon, LinkedinIcon } from './icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-sm text-mist sm:flex-row">
        <p>
          © {year} <span className="text-white">{PROFILE.name}</span>. Built with React, Vite and Tailwind CSS.
        </p>
        <ul className="flex items-center gap-3">
          <li>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-crimson-ember hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-crimson-ember hover:text-white"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
