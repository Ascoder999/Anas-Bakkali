import { ProjectGrid } from "@/components/project-grid"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["React", "Next.js", "TypeScript", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "Design System",
      description: "Comprehensive component library and design tokens for consistent UI across products.",
      image: "/design-system-components-showcase.jpg",
      technologies: ["React", "Storybook", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time analytics platform with interactive charts and data visualization.",
      image: "/analytics-dashboard.png",
      technologies: ["Next.js", "Recharts", "PostgreSQL"],
      link: "#",
    },
    {
      id: 4,
      title: "Mobile App",
      description: "Cross-platform mobile application for task management and collaboration.",
      image: "/mobile-app-interface.png",
      technologies: ["React Native", "Firebase", "TypeScript"],
      link: "#",
    },
    {
      id: 5,
      title: "Content Management",
      description: "Headless CMS with powerful content editing and multi-language support.",
      image: "/cms-interface.png",
      technologies: ["Next.js", "Supabase", "MDX"],
      link: "#",
    },
    {
      id: 6,
      title: "AI Chat Application",
      description: "Intelligent chatbot with natural language processing and context awareness.",
      image: "/ai-chat-interface-with-messages.jpg",
      technologies: ["Next.js", "OpenAI", "Vercel AI SDK"],
      link: "#",
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
