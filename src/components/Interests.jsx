import { BookOpen, Languages, Plane, Trophy } from 'lucide-react'
import { INTERESTS, LANGUAGES } from '../data/content.js'
import Reveal from './Reveal.jsx'

const ICONS = { book: BookOpen, plane: Plane, trophy: Trophy }

export default function Interests() {
  return (
    <section id="interests" aria-label="Languages and interests" className="section-y !pt-0">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="panel">
            <h3 className="flex items-center gap-3 font-display text-2xl uppercase tracking-wide">
              <Languages aria-hidden="true" className="h-6 w-6 text-crimson-ember" />
              Languages
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {LANGUAGES.map((l) => (
                <li key={l} className="tag">
                  {l}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="panel">
            <h3 className="font-display text-2xl uppercase tracking-wide">Interests</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {INTERESTS.map(({ label, icon }) => {
                const Icon = ICONS[icon] ?? BookOpen
                return (
                  <li key={label} className="tag gap-2">
                    <Icon aria-hidden="true" className="h-4 w-4 text-crimson-ember" />
                    {label}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
