
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Book, Pen, MessageSquare, Trophy, Play, Github, Linkedin, Twitter } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect, useRef } from "react";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);
  const practiceRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Book className="h-6 w-6 text-orange-500" />,
      title: "Practice Mode",
      description: "Sharpen your skills with practice sessions for multiple programming languages at your own pace.",
      link: "/practice",
      linkText: "Start Practicing",
      id: "practice",
      ref: practiceRef
    },
    {
      icon: <Play className="h-6 w-6 text-orange-500" />,
      title: "Quiz Challenge",
      description: "Test your knowledge with timed quizzes and see how you rank against others.",
      link: "/quiz",
      linkText: "Take a Quiz",
      id: "quiz",
      ref: quizRef
    },
    {
      icon: <Pen className="h-6 w-6 text-orange-500" />,
      title: "Contribute Questions",
      description: "Add your own questions to help grow our question database and challenge others.",
      link: "/add-question",
      linkText: "Add Questions",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-orange-500" />,
      title: "Discussion Room",
      description: "Share insights, ask questions, and learn from the community in topic discussions.",
      link: "/discussion",
      linkText: "Join Discussions",
    },
    {
      icon: <Trophy className="h-6 w-6 text-orange-500" />,
      title: "Leaderboards",
      description: "See how you stack up against other learners and challenge yourself to improve.",
      link: "/leaderboard",
      linkText: "View Rankings",
    },
  ];

  const languages = [
    "JavaScript", "TypeScript", "Java", "HTML", "CSS", "React", "Next.js", "Python",
    "Tailwind CSS", "Bootstrap", "C", "C++", "Ruby", "Rust"
  ];

  // This properly handles scrolling to sections
  const scrollToSection = (id: string) => {
    if (id === 'quiz' && quizRef.current) {
      quizRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'practice' && practiceRef.current) {
      practiceRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'features' && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                    Level Up Your Coding Knowledge
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Master programming concepts through interactive quizzes, focused practice,
                    and community discussion. Your coding journey starts here.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 min-[400px]:gap-4">
                  <Button
                    size="lg"
                    className="animate-fade-in bg-orange-500 hover:bg-orange-600 transform transition-all duration-300 hover:scale-105"
                    onClick={() => scrollToSection('quiz')}
                  >
                    Start a Quiz <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="animate-fade-in hover:bg-orange-500/10 hover:border-orange-500 hover:text-orange-500 transform transition-all duration-300 hover:scale-105"
                    onClick={() => scrollToSection('practice')}
                  >
                    Practice Mode
                  </Button>
                </div>
                <div className="flex items-center space-x-4 mt-6 text-muted-foreground">
                  <a href="https://github.com/Vegadjay/quiz-app" target="_blank" rel="noopener noreferrer"
                    className="hover:text-orange-500 transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="https://linkdin.com/u/vegadjay" target="_blank" rel="noopener noreferrer"
                    className="hover:text-orange-500 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://x.com/JAY_VEGAD_" target="_blank" rel="noopener noreferrer"
                    className="hover:text-orange-500 transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </div>

              <div className="mx-auto lg:ml-auto flex flex-col animate-fade-in">
                <div className="rounded-xl border-2 border-orange-200 dark:border-orange-900/30 bg-card shadow-xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-300/5 z-0"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold mb-4 text-orange-700 dark:text-orange-300">Supported Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((lang) => (
                        <div key={lang} className="bg-background border-2 border-orange-100 dark:border-orange-800 rounded-full px-3 py-1 text-sm animate-scale-in text-orange-600 dark:text-orange-300">
                          {lang}
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mt-6 mb-4 text-orange-700 dark:text-orange-300">Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <span className="mr-2 bg-orange-500/20 text-orange-500 p-1 rounded-full">✓</span>
                        Timed quizzes with scoring
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 bg-orange-500/20 text-orange-500 p-1 rounded-full">✓</span>
                        Customizable practice mode
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 bg-orange-500/20 text-orange-500 p-1 rounded-full">✓</span>
                        Community discussions
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 bg-orange-500/20 text-orange-500 p-1 rounded-full">✓</span>
                        Contribute new questions
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 bg-orange-500/20 text-orange-500 p-1 rounded-full">✓</span>
                        Track progress with leaderboards
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16 md:py-24" ref={featuresRef}>
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
                Boost your programming knowledge with our interactive features designed for effective learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  id={feature.id}
                  ref={feature.ref}
                  className="bg-card border-2 border-orange-200 dark:border-orange-900/30 rounded-xl p-6 transition-all hover:shadow-lg hover:translate-y-[-5px] duration-300 flex flex-col animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="rounded-full bg-orange-500/10 p-3 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-orange-700 dark:text-orange-300">{feature.title}</h3>
                  <p className="text-muted-foreground flex-1 mb-4">
                    {feature.description}
                  </p>
                  <Link to={feature.link} className="mt-auto">
                    <Button variant="outline" className="w-full hover:bg-orange-500/10 hover:border-orange-500 hover:text-orange-500 transform transition-all duration-300 hover:scale-105">
                      {feature.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="bg-orange-500 text-primary-foreground py-16">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ready to Test Your Skills?
            </h2>
            <p className="max-w-[600px] mx-auto text-primary-foreground/90 mb-8 md:text-xl">
              Start learning now and see how you stack up against others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quiz">
                <Button size="lg" variant="secondary" className="transform transition-all duration-300 hover:scale-105">
                  Take a Quiz <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/practice">
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 transform transition-all duration-300 hover:scale-105">
                  Practice Mode
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
