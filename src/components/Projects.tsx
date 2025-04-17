
import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
      <div className="relative h-48 bg-secondary overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted-foreground/20">
          {project.title.charAt(0)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium bg-secondary px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "Personal Blog Platform",
      description:
        "A responsive blog platform with user authentication and markdown support for content creation.",
      image: "",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Pranavkoduri895",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "Admin dashboard for e-commerce platforms with analytics, inventory management, and order tracking.",
      image: "",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/Pranavkoduri895",
    },
    {
      title: "Weather Application",
      description:
        "Real-time weather application that displays current conditions and forecasts for any location.",
      image: "",
      tags: ["JavaScript", "APIs", "CSS", "HTML"],
      github: "https://github.com/Pranavkoduri895",
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management application with real-time updates and deadline tracking.",
      image: "",
      tags: ["React", "Firebase", "Authentication", "Cloud Functions"],
      github: "https://github.com/Pranavkoduri895",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some projects I've built to showcase my skills and explore new technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          
          <div className="glass-card rounded-xl p-6 md:col-span-2 xl:col-span-3 text-center">
            <h3 className="text-xl font-semibold mb-3">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground mb-4">
              I'm constantly working on new projects to improve my skills and explore different technologies.
            </p>
            <a
              href="https://github.com/Pranavkoduri895"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Github size={18} /> Check my GitHub for updates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
