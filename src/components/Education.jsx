import { Award, GraduationCap } from 'lucide-react'
import { CERTIFICATIONS, EDUCATION } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="education-title" title="Education & certifications" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="mb-8 flex items-center gap-3 font-display text-2xl uppercase tracking-wide">
              <GraduationCap aria-hidden="true" className="h-6 w-6 text-crimson-ember" />
              Education
            </h3>
            <ol className="relative ml-3 border-l border-crimson/60">
              {EDUCATION.map((item, i) => (
                <Reveal as="li" key={item.degree} delay={i * 0.08} className="relative pb-10 pl-8 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-crimson bg-ink"
                  />
                  <p className="text-sm font-bold text-crimson-ember">{item.period}</p>
                  <h4 className="mt-1 text-xl font-bold leading-snug">{item.degree}</h4>
                  <p className="mt-1 text-mist">{item.school}</p>
                  {item.note && <p className="mt-2 text-white/90">{item.note}</p>}
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-8 flex items-center gap-3 font-display text-2xl uppercase tracking-wide">
              <Award aria-hidden="true" className="h-6 w-6 text-crimson-ember" />
              Certifications & professional development
            </h3>
            <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface">
              {CERTIFICATIONS.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 0.05} className="flex items-start gap-4 p-5">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-crimson-ember" />
                  <div>
                    <p className="font-bold">{c.title}</p>
                    <p className="text-sm text-mist">{c.issuer}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
