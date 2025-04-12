
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Leaderboard from "@/components/quiz/Leaderboard";
import { Trophy, Info, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8 px-4 bg-gradient-to-b from-background via-orange-50/20 dark:via-orange-950/10 to-muted/50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent flex justify-center items-center gap-2">
            <Trophy className="h-8 w-8 text-orange-500 animate-bounce" />
            Leaderboard
          </h1>
          <p className="text-center text-muted-foreground mb-8">Top performers in our coding quizzes</p>
          
          <Alert className="mb-6 bg-orange-100 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900/50">
            <Info className="h-4 w-4 text-orange-500" />
            <AlertDescription className="text-sm text-muted-foreground">
              We've added many new questions for all programming languages. If you find a language with missing questions, please let us know!
            </AlertDescription>
          </Alert>
          
          <Alert className="mb-6 bg-yellow-100 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900/50">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <AlertDescription className="text-sm text-muted-foreground">
              Some languages may not have questions available yet. We're actively working to add more content. Thank you for your patience!
            </AlertDescription>
          </Alert>
          
          <div className="grid gap-8 animate-fade-in">
            <div className="border-2 border-orange-200 dark:border-orange-900/30 rounded-lg shadow-lg overflow-hidden hover:shadow-orange-500/10 transition-all duration-300">
              <Leaderboard />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
