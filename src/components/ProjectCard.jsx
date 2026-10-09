import { ArrowUpRight } from 'lucide-react'
import ProjectArt from './ProjectArt.jsx'
import Reveal from './Reveal.jsx'

/**
 * Reusable project card. Pass a project object from src/data/content.js.
 * `featured` lays the card out horizontally (used when there is only one project).
 */
export default function ProjectCard({ project, index, featured = false, delay = 0 }) {
  const { title, category, year, description, tech = [], responsibilities = [], href, linkLabel, art, image } = project
  const number = String(index + 1).padStart(2, '0')

  return (
    <Reveal
      as="article"
      delay={delay}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface transition-colors duration-300 hover:border-crimson ${
        featured ? 'lg:grid lg:grid-cols-2' : 'flex flex-col'
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[26rem]' : 'aspect-[16/10]'}`}>
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <ProjectArt name={art} className="h-full w-full transition-transform duration-700 group-hover:scale-105" />
        )}
        <span
          aria-hidden="true"
          className="absolute left-4 top-3 font-display text-4xl text-crimson-ember drop-shadow"
        >
          {number}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-sm text-mist">
          {category}
          {year && <span className="ml-3 text-white/60">{year}</span>}
        </p>

        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="font-display text-4xl uppercase leading-none tracking-wide md:text-5xl">{title}</h3>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${linkLabel ?? 'Open project'}: ${title} (opens in a new tab)`}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-crimson text-crimson-ember transition duration-300 after:absolute after:inset-0 group-hover:bg-crimson group-hover:text-white"
            >
              <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>

        <p className="mt-4 max-w-xl leading-relaxed text-white/85">{description}</p>

        {responsibilities.length > 0 && (
          <ul className="mt-5 space-y-2 text-sm text-mist">
            {responsibilities.map((r) => (
              <li key={r} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-crimson-ember" />
                {r}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Technologies used">
          {tech.map((t) => (
            <li key={t} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/90">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
