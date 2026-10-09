import { ABOUT } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="about-title" title="About me" />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl md:leading-relaxed">
              {ABOUT.paragraph}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <dl className="panel divide-y divide-white/10 !py-2 md:!py-3">
              {ABOUT.facts.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <dt className="text-sm text-mist">{label}</dt>
                  <dd className="text-base text-white sm:text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
