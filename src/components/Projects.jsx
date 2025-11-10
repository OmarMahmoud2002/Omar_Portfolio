import React, { useState } from "react";
import { Github, ExternalLink, Code2, Folder } from "lucide-react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Nursing Platform",
      description:
        "NurseConnect is a full-stack healthcare platform connecting verified nurses with patients for at-home care, featuring location-based matching, secure bookings, and commission-based payments.",
      image: "",
      technologies: ["NestJS", "Next.js", "TypeScript", "PostgreSQL"],
      github: "https://github.com/OmarMahmoud2002/Graduation-Project-ITI",
      // live: "#",
    },
    {
      title: "Laravel Job Board Platform",
      description:
        "A comprehensive job board system with multi-role access (Admin, Employer, Candidate) featuring job listings, applications management, and role-based dashboards.",
      image: "/job.png",
      technologies: ["Laravel", "PHP", "MySQL", "Blade"],
      github: "https://github.com/OmarMahmoud2002/Laravel-Job-Board",
      // live: "#",
    },
    {
      title: "Exam System",
      description:
        "A full-stack web application enabling students to take exams and view results, while admins manage exams, questions, and results with role-based access control.",
      image: "/exam.png",
      technologies: ["Angular", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/OmarMahmoud2002/Exam_System_Project",
      // live: "#",
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Folder className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold underline decoration-green-500">
              Featured Projects
            </h2>
          </div>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto px-4">
            A collection of projects showcasing my skills in full-stack
            development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/30 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-40 sm:h-48 md:h-52 lg:h-56 bg-gradient-to-br from-green-900/20 to-gray-900 flex items-center justify-center overflow-hidden">
                {!project.image ? (
                  <Code2
                    className={`w-16 h-16 sm:w-20 sm:h-20 text-green-500/30 transition-all duration-300 ${
                      hoveredIndex === index ? "scale-110 rotate-12" : ""
                    }`}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs sm:text-sm bg-green-500/10 text-green-400 border border-green-500/30 px-2 sm:px-3 py-1 rounded-full font-mono hover:bg-green-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm sm:text-base text-green-400 hover:text-white transition-colors group/link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github
                      size={18}
                      className="group-hover/link:rotate-12 transition-transform"
                    />
                    <span className="font-mono">Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm sm:text-base text-green-400 hover:text-white transition-colors group/link"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink
                        size={18}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                      <span className="font-mono">Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 border-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <a
            href="https://github.com/OmarMahmoud2002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
            aria-label="View all projects on GitHub"
          >
            <Github size={24} />
            <span>View All Projects on GitHub</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
