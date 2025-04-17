
import { Code, Lightbulb, PenTool } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Hello! I'm <span className="text-primary font-semibold">Pranav Koduri Naga Sri Sai</span>, 
              a passionate Full Stack Developer currently pursuing my BTech in Computer Science Engineering 
              (2nd year).
            </p>
            
            <p className="text-lg">
              My journey in web development began with curiosity about how websites work, which led me to explore 
              both frontend and backend technologies. I enjoy creating responsive, user-friendly interfaces and 
              building robust backend systems.
            </p>
            
            <p className="text-lg">
              While I'm still early in my professional journey, I'm dedicated to continuous learning and applying 
              my skills to create impactful web applications. I'm particularly interested in modern JavaScript 
              frameworks, responsive design, and scalable backend architectures.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or collaborating with fellow developers to expand my knowledge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <PenTool className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Frontend</h3>
              <p className="text-muted-foreground">
                Creating intuitive and responsive user interfaces with modern frameworks and CSS.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Backend</h3>
              <p className="text-muted-foreground">
                Building secure, scalable APIs and server-side applications.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl space-y-4 sm:col-span-2">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Lightbulb className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Problem Solving</h3>
              <p className="text-muted-foreground">
                Approaching challenges with analytical thinking and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
