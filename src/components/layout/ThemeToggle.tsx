
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      localStorage.setItem("theme", newTheme);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 150);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-110 active:scale-90"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        {theme === "light" ? (
          <Moon 
            className={`h-5 w-5 text-orange-500 absolute top-0 left-0 transition-all duration-300 ${
              isTransitioning ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
            }`} 
          />
        ) : (
          <Sun 
            className={`h-5 w-5 text-orange-500 absolute top-0 left-0 transition-all duration-300 ${
              isTransitioning ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
            }`} 
          />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
