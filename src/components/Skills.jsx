import { Code2, Database, Layers, LayoutTemplate, Server, Wrench } from 'lucide-react'
import { CORE_CONCEPT, SKILL_GROUPS } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const ICONS = {
  code: Code2,
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  wrench: Wrench,
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="skills-title" title="Technical skills">
          The languages, frameworks and tools I use to build full-stack web applications.
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map(({ title, icon, items }, i) => {
            const Icon = ICONS[icon] ?? Code2
            return (
              <Reveal key={title} delay={i * 0.06} className="panel">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-crimson text-crimson-ember">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl uppercase tracking-wide">{title}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {items.map((skill) => (
                    <li key={skill} className="tag">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}

          <Reveal
            delay={SKILL_GROUPS.length * 0.06}
            className="relative overflow-hidden rounded-2xl border border-crimson bg-crimson/15 p-6 md:p-8"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-crimson text-white">
              <Layers aria-hidden="true" className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-3xl uppercase leading-tight tracking-wide">{CORE_CONCEPT.title}</h3>
            <p className="mt-3 text-white/85">{CORE_CONCEPT.text}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
