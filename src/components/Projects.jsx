import { PROJECTS } from '../data/content.js'
import ProjectCard from './ProjectCard.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Projects() {
  const single = PROJECTS.length === 1

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="projects-title" title="Selected projects">
          Work built with the MERN stack. More projects will appear here as they are completed.
        </SectionHeading>

        <div className={single ? '' : 'grid gap-6 sm:grid-cols-2 xl:grid-cols-4'}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} featured={single} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
