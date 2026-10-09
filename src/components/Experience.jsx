import { Briefcase } from 'lucide-react'
import { EXPERIENCE } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="experience-title" title="Internship & experience" />

        <ol className="relative ml-3 border-l border-crimson/60">
          {EXPERIENCE.map((job, i) => (
            <Reveal as="li" key={job.role} delay={i * 0.08} className="relative pb-4 pl-8 md:pl-12">
              <span
                aria-hidden="true"
                className="absolute -left-[15px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-crimson bg-ink text-crimson-ember"
              >
                <Briefcase className="h-3.5 w-3.5" />
              </span>

              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <p className="text-sm font-bold text-crimson-ember">{job.period}</p>
                  <h3 className="mt-1 font-display text-3xl uppercase tracking-wide md:text-4xl">{job.role}</h3>
                  <p className="mt-1 text-lg text-mist">{job.company}</p>
                  <ul className="mt-6 space-y-3 text-white/90">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-crimson-ember" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-5">
                  <p className="mb-3 text-sm text-mist">Worked with</p>
                  <ul className="flex flex-wrap gap-2.5">
                    {job.tech.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
