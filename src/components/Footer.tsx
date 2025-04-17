
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 bg-card/80 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} <span className="text-primary">Pranav Koduri</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground">
              Made with passion and code
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
