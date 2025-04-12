
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-8 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">QuizMaster</h3>
            <p className="text-sm text-muted-foreground">
              Enhance your knowledge with interactive quizzes and practice sessions.
            </p>
            
            <div className="flex mt-4 space-x-3">
              <a href="https://github.com/vegadjay" target="_blank" rel="noopener noreferrer" 
                 className="text-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkdin.com/u/vegadjay" target="_blank" rel="noopener noreferrer" 
                 className="text-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/JAY_VEGAD_" target="_blank" rel="noopener noreferrer" 
                 className="text-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/practice" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Practice Tests
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Timed Quizzes
                </Link>
              </li>
              <li>
                <Link to="/discussion" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Discussion Forum
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/add-question" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contribute Questions
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Leaderboards
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "Java", "HTML", "CSS", "React", "Next.js", "Python", "TypeScript", "Tailwind CSS", "Bootstrap", "C", "C++", "Ruby", "Rust"].map((lang) => (
                <span 
                  key={lang} 
                  className="inline-block bg-muted text-foreground text-xs px-2 py-1 rounded"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} QuizMaster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
