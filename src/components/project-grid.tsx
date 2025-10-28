"use client"

import { ProjectCard } from "./project-card"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
