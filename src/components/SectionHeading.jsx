import Reveal from './Reveal.jsx'

export default function SectionHeading({ id, title, children, className = '' }) {
  return (
    <Reveal className={`mb-10 md:mb-14 ${className}`}>
      <div className="mb-6 h-px w-full bg-gradient-to-r from-crimson via-crimson/30 to-transparent" />
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2
          id={id}
          className="font-display text-4xl uppercase leading-none tracking-wide sm:text-5xl md:text-6xl"
        >
          {title}
        </h2>
        {children && <p className="max-w-md text-mist">{children}</p>}
      </div>
    </Reveal>
  )
}
