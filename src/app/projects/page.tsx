import { ProjectGrid } from "@/components/project-grid"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Landing Page",
      description: "Modern and responsive landing page, optimized for conversions.",
      image: "/apex.png",
      technologies: ["React", "Next.js", "TypeScript", "Radix UI", "Tailwind CSS"],
      link: "https://apex-amber-three.vercel.app/",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Featured Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of work showcasing design, development, and problem-solving across various domains.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <ProjectGrid projects={projects} />
      </section>
    </main>
  )
}
