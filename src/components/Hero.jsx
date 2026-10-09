import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Plus } from 'lucide-react'
import portrait from '../assets/nikhil-cutout.webp'
import { HERO_HIGHLIGHTS, PROFILE } from '../data/content.js'

export default function Hero() {
  const reduce = useReducedMotion()

  // One orchestrated page-load sequence. Disabled entirely for reduced-motion visitors.
  const enter = (delay = 0, y = 24) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section id="home" aria-label="Introduction" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(80%_55%_at_50%_0%,rgba(181,18,32,0.22),transparent_70%)]"
      />

      <div className="container-x">
        <div className="relative flex min-h-[100svh] flex-col pb-14 pt-24 md:pt-28">
          {/* Top row: role label + availability */}
          <div className="relative z-30 flex items-start justify-between gap-6">
            <div>
              <p className="font-display text-lg uppercase tracking-wide text-crimson-ember sm:text-2xl">
                Full-Stack Developer
              </p>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-white sm:text-xs">
                Computer Science Engineering Student
              </p>
            </div>
            <a
              href="#contact"
              className="group flex items-center gap-2 text-right text-[0.68rem] uppercase tracking-[0.16em] text-white sm:text-xs"
            >
              <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson-ember opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-crimson-ember" />
              </span>
              <span>Available for opportunities</span>
              <Plus
                aria-hidden="true"
                className="hidden h-5 w-5 text-crimson-ember transition-transform duration-300 group-hover:rotate-90 sm:block"
              />
            </a>
          </div>

          {/* Visual layer: giant name, glow, portrait */}
          <div className="pointer-events-none absolute inset-x-0 top-24 h-[62svh] md:top-0 md:h-full">
            <motion.span
              aria-hidden="true"
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, scale: 1.04 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
                  })}
              className="absolute inset-x-0 top-[4%] block select-none bg-gradient-to-b from-crimson via-crimson-deep to-transparent bg-clip-text text-center font-display uppercase leading-[0.85] text-transparent [font-size:clamp(5.5rem,30vw,27rem)] md:top-[13%]"
            >
              Nikhil
            </motion.span>

            <div className="absolute bottom-0 left-1/2 h-[94%] -translate-x-1/2 md:left-[58%] md:h-[88%]">
              <motion.div {...enter(0.2, 40)} className="relative h-full">
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-[38%] aspect-square h-[85%] -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-[radial-gradient(closest-side,rgba(181,18,32,0.6),transparent)] blur-2xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-[44%] aspect-square h-[72%] -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full border border-crimson/60"
                />
                <img
                  src={portrait}
                  width="460"
                  height="680"
                  alt="Portrait of Nikhil Jomon wearing sunglasses and a striped shirt"
                  fetchpriority="high"
                  decoding="async"
                  className="relative h-full w-auto max-w-none"
                />
              </motion.div>
            </div>
          </div>

          {/* Mobile spacer so the text starts below the portrait */}
          <div className="h-[52svh] md:hidden" aria-hidden="true" />

          {/* Text content */}
          <div className="relative z-20 grid items-end gap-10 md:mt-auto md:grid-cols-12">
            <div className="md:col-span-5 lg:col-span-4">
              <h1>
                <motion.span
                  {...enter(0.35)}
                  className="block -rotate-3 font-script text-5xl leading-none text-crimson-ember sm:text-6xl"
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  {...enter(0.45)}
                  className="mt-1 block font-display text-6xl uppercase leading-[0.95] sm:text-7xl"
                >
                  Nikhil Jomon
                </motion.span>
              </h1>

              <motion.p
                {...enter(0.55)}
                className="mt-2 font-display text-xl uppercase tracking-wide text-white/90 sm:text-2xl"
              >
                {PROFILE.subtitle}
              </motion.p>

              <motion.p {...enter(0.65)} className="mt-5 max-w-md text-sm leading-relaxed text-mist sm:text-base">
                {PROFILE.intro}
              </motion.p>

              <motion.p {...enter(0.75)} className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.16em]">
                <MapPin aria-hidden="true" className="h-4 w-4 text-crimson-ember" />
                {PROFILE.location}
              </motion.p>

              <motion.div {...enter(0.85)} className="mt-7 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary">
                  Explore My Work
                </a>
                <a href="#contact" className="btn-ghost">
                  Get In Touch
                </a>
              </motion.div>
            </div>

            <motion.div
              {...enter(0.95)}
              className="md:col-span-3 md:col-start-10 md:pb-4"
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-crimson text-crimson-ember"
                >
                  <Plus className="h-6 w-6" />
                </span>
                <p className="max-w-[14rem] text-lg leading-snug text-white/90">
                  Building practical digital solutions.
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                {HERO_HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-white/90 lg:text-lg">
                    <Plus aria-hidden="true" className="h-4 w-4 shrink-0 text-crimson-ember" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-crimson/60 to-transparent" />
    </section>
  )
}
