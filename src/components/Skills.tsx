
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
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["Python", "C++", "C"],
    },
    {
      title: "Learning Path",
      skills: ["React", "TypeScript", "Web Development", "Advanced Programming"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies I'm proficient in and continuously learning
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
              <h3 className="text-xl font-semibold mb-4 text-center">Future Goals</h3>
              <p className="text-muted-foreground text-center mb-6">
                As a 2nd year BTech CSE student, I'm focused on expanding my technical skills
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium">Web Frameworks</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Exploring Modern Web Technologies
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium">Backend Development</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Enhancing Python & C++ Skills
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium">Software Engineering</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Data Structures & Algorithms
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
