import { Bug, ClipboardList, Code2, PenTool, Rocket, Search } from 'lucide-react'
import { PROCESS } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const ICONS = {
  search: Search,
  clipboard: ClipboardList,
  pen: PenTool,
  code: Code2,
  bug: Bug,
  rocket: Rocket,
}

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="process-title" title="My development process">
          A general workflow I follow when building software, not a record of every single project.
        </SectionHeading>

        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map(({ title, text, icon }, i) => {
            const Icon = ICONS[icon] ?? Search
            return (
              <Reveal as="li" key={title} delay={(i % 3) * 0.08} className="flex gap-5">
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-crimson text-crimson-ember">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-crimson font-display text-xs text-white">
                    {i + 1}
                  </span>
                </span>
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wide">{title}</h3>
                  <p className="mt-1 text-mist">{text}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
