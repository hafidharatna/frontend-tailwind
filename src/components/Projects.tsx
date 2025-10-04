const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application built with React and Tailwind CSS",
      image: "project1.jpg",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project 2",
      description: "An e-commerce platform with a focus on user experience",
      image: "project2.jpg",
      tags: ["Next.js", "Tailwind CSS", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-video w-full overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-text/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-center text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 text-center text-sm"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;