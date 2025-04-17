
const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="glass-card rounded-xl p-6 space-y-4">
    <h3 className="text-xl font-semibold text-center text-primary">{title}</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-secondary px-4 py-2 rounded-full text-sm font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "TypeScript"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "SQL", "REST APIs", "Firebase"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Responsive Design", "Problem Solving", "Algorithms", "Data Structures"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the technologies and tools I've been working with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <SkillCard key={index} title={category.title} skills={category.skills} />
          ))}
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-6">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Current Learning</h3>
              <p className="text-muted-foreground text-center mb-6">
                I'm continuously expanding my skill set. Here's what I'm currently focused on:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium">Advanced React</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Hooks, Context API, Redux
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium">Backend Development</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Node.js, Express, Database Design
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium">Cloud Services</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    AWS, Firebase, Deployment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
