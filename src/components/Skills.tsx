const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "RESTful APIs", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "Figma", "Jest", "Webpack"],
    },
  ];

  return (
    <section id="skills" className="bg-accent">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;