
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import AnimatedBackground from './AnimatedBackground';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="block">Hi, I'm</span>
                <span className="text-gradient block">Pranav Koduri</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground">
                Full Stack Developer
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Currently a 2nd year BTech CSE student specializing in building web applications. 
              Passionate about both frontend and backend development.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Me <ArrowRight size={18} />
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Pranavkoduri895"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/pranav-koduri-b9b3a12b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/pranav0100/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden border-4 border-primary rounded-full glass-card">
              <Avatar className="w-full h-full">
                <AvatarImage
                  src="/lovable-uploads/ff06387d-2ce4-4f42-b101-3df5ce70ad2d.png"
                  alt="Pranav Koduri"
                  className="object-cover w-full h-full"
                />
                <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/50 flex items-center justify-center text-4xl font-bold text-primary-foreground">
                  PK
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
