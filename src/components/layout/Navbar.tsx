
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Practice", path: "/practice" },
    { name: "Quiz", path: "/quiz" },
    { name: "Add Question", path: "/add-question" },
    { name: "Discussion", path: "/discussion" },
    { name: "Leaderboard", path: "/leaderboard" },
  ];

  // Function to scroll to section when clicking navigation links
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 text-primary font-bold text-xl animate-fade-in"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                QuizMaster
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group ${
                    location.pathname === item.path
                      ? "text-orange-500"
                      : "text-foreground hover:text-orange-500"
                  }`}
                  onClick={() => {
                    if (item.name === "Practice" || item.name === "Quiz") {
                      scrollToSection(item.name.toLowerCase());
                    }
                  }}
                >
                  {item.name}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform origin-left transition-transform duration-300 ease-out ${
                      location.pathname === item.path 
                        ? 'scale-x-100' 
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-full hover:bg-accent/10"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-orange-500" />
                ) : (
                  <Menu className="h-5 w-5 text-orange-500" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-orange-500 text-primary-foreground"
                    : "text-foreground hover:bg-orange-500/10 hover:text-orange-500"
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  if (item.name === "Practice" || item.name === "Quiz") {
                    scrollToSection(item.name.toLowerCase());
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
