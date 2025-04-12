
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Language } from "@/data/quizData";
import { CheckCircle, Clock, RotateCcw, Trophy, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ResultSummaryProps {
  score: number;
  totalQuestions: number;
  timeSpent: number;
  language: Language;
  onSaveResult: (username: string) => void;
  onRetry: () => void;
  correctAnswers?: number;
  wrongAnswers?: number;
}

const ResultSummary = ({
  score,
  totalQuestions,
  timeSpent,
  language,
  onSaveResult,
  onRetry,
  correctAnswers = 0,
  wrongAnswers = 0
}: ResultSummaryProps) => {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const { toast } = useToast();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      toast({
        title: "Username required",
        description: "Please enter a username to save your result.",
        variant: "destructive",
      });
      return;
    }
    onSaveResult(username);
  };

  return (
    <Card className="max-w-lg mx-auto animate-fade-in">
      <CardContent className="pt-6">
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex p-3 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-2">
            <Trophy className="h-8 w-8 text-orange-500" />
          </div>
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="text-muted-foreground">
            Here's how you did on the {language} quiz.
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="flex items-center">
                <Trophy className="mr-2 h-4 w-4 text-orange-500" />
                Final Score
              </span>
              <span className="font-bold text-lg">
                {score}/{totalQuestions}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                Correct Answers
              </span>
              <span className="font-bold text-green-500">
                {correctAnswers}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="flex items-center">
                <XCircle className="mr-2 h-4 w-4 text-red-500" />
                Wrong Answers
              </span>
              <span className="font-bold text-red-500">
                {wrongAnswers}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-blue-500" />
                Time Taken
              </span>
              <span className="font-mono">
                {formatTime(timeSpent)}
              </span>
            </div>
            
            <div className="pt-2 mt-2 border-t">
              <div className="flex justify-between">
                <span>Accuracy</span>
                <span className="font-bold">
                  {Math.round((score / totalQuestions) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2 mb-4">
              <Label htmlFor="username">Your Name</Label>
              <Input
                id="username"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Enter your name to save your score to the leaderboard.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                className="flex-1 bg-orange-500 hover:bg-orange-600"
              >
                Save to Leaderboard
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 hover:bg-orange-500/10 hover:text-orange-500 hover:border-orange-500"
                onClick={onRetry}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultSummary;
