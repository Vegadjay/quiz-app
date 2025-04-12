
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Question } from "@/utils/quizDataHelpers";

interface QuizCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean, timeSpent: number) => void;
  onNext?: () => void;
  onPrev?: () => void;
  timeLimit?: number; // in seconds
  showNavigation?: boolean;
  isPractice?: boolean;
}

const QuizCard = ({
  question,
  onAnswer,
  onNext,
  onPrev,
  timeLimit = 30,
  showNavigation = true,
  isPractice = false,
}: QuizCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [timeSpent, setTimeSpent] = useState(0);
  const { toast } = useToast();

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
    setTimeLeft(timeLimit);
    setTimeSpent(0);
  }, [question, timeLimit]);

  // Timer effect
  useEffect(() => {
    if (isAnswered || isPractice) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsAnswered(true);
          onAnswer(false, timeLimit);
          toast({
            title: "Time's up!",
            description: "You ran out of time for this question.",
            variant: "destructive",
          });
          return 0;
        }
        setTimeSpent(timeLimit - prev + 1);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isAnswered, onAnswer, timeLimit, toast, isPractice]);

  // Auto-advance to next question in practice mode
  useEffect(() => {
    if (isPractice && isAnswered && onNext) {
      const timer = setTimeout(() => {
        onNext();
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isPractice, isAnswered, onNext]);

  const handleOptionSelect = (index: number) => {
    if (isAnswered && !isPractice) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) {
      toast({
        title: "Please select an option",
        description: "You need to select an answer before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsAnswered(true);
    // Ensure correctAnswer is treated as a number for comparison
    const correctAnswer = typeof question.correctAnswer === 'string' 
      ? parseInt(question.correctAnswer, 10) 
      : question.correctAnswer;
    
    const isCorrect = selectedOption === correctAnswer;

    if (isCorrect) {
      toast({
        title: "Correct Answer!",
        description: question.explanation || "Well done!",
        variant: "default",
      });
    } else {
      toast({
        title: "Incorrect Answer",
        description: question.explanation || `The correct answer was option ${correctAnswer + 1}.`,
        variant: "destructive",
      });
    }

    onAnswer(isCorrect, timeSpent);
    
    // Automatically move to next question after answering
    if (onNext && !isPractice) {
      setTimeout(() => {
        onNext();
      }, 1500);
    }
  };

  const getTimerColor = () => {
    if (timeLeft > timeLimit * 0.6) return "";
    if (timeLeft > timeLimit * 0.3) return "warning";
    return "danger";
  };

  return (
    <Card className="quiz-card max-w-4xl mx-auto transition-all duration-300 transform hover:shadow-lg dark:hover:shadow-orange-700/20 border-2 border-orange-200 dark:border-orange-800/30">
      {!isPractice && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium flex items-center">
              <Clock className="mr-1 h-4 w-4" /> Time Left
            </span>
            <span className="text-sm font-bold">{timeLeft}s</span>
          </div>
          <div className="timer-bar h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                timeLeft < timeLimit * 0.3 ? "bg-red-500" : timeLeft < timeLimit * 0.6 ? "bg-yellow-500" : "bg-orange-500"
              }`}
              style={{ width: `${(timeLeft / timeLimit) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      <CardContent className="pt-6">
        <div className="mb-2 text-xs font-medium uppercase text-muted-foreground">
          {question.type || "Quiz Question"}
        </div>
        <h3 className="text-xl font-bold mb-6 text-orange-700 dark:text-orange-400">{question.question}</h3>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            // Convert to number if needed for comparison
            const correctAnswer = typeof question.correctAnswer === 'string' 
              ? parseInt(question.correctAnswer, 10) 
              : question.correctAnswer;
            
            return (
              <div
                key={index}
                className={cn(
                  "option-card p-3 border rounded-lg cursor-pointer transition-all hover:border-orange-500 hover:bg-orange-500/5 hover:scale-[1.01]", 
                  {
                  "border-orange-500 bg-orange-500/10": selectedOption === index && !isAnswered,
                  "border-green-500 bg-green-100 dark:bg-green-900/30": isAnswered && index === correctAnswer,
                  "border-red-500 bg-red-100 dark:bg-red-900/30": isAnswered && selectedOption === index && selectedOption !== correctAnswer,
                })}
                onClick={() => handleOptionSelect(index)}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <div className={cn(
                      "flex items-center justify-center w-6 h-6 rounded-full transition-all", 
                      selectedOption === index && !isAnswered ? "bg-orange-500 text-white transform rotate-3" : "bg-muted text-foreground"
                    )}>
                      {isAnswered && index === correctAnswer ? (
                        <Check className="h-4 w-4 text-green-500 animate-pulse" />
                      ) : isAnswered && selectedOption === index && selectedOption !== correctAnswer ? (
                        <X className="h-4 w-4 text-red-500 animate-bounce" />
                      ) : (
                        <span>{String.fromCharCode(65 + index)}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base">{option}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-6">
        {showNavigation && onPrev && (
          <Button
            variant="outline"
            size="sm"
            onClick={onPrev}
            className="hover:bg-orange-500/10 hover:text-orange-500 transform transition-transform hover:scale-105"
          >
            Previous
          </Button>
        )}

        {!isAnswered ? (
          <Button 
            onClick={handleSubmitAnswer} 
            disabled={selectedOption === null} 
            className={`ml-auto bg-orange-500 hover:bg-orange-600 transform transition-all hover:scale-105 ${selectedOption === null ? 'opacity-50' : ''}`}
          >
            Submit Answer
          </Button>
        ) : (
          showNavigation && onNext && !isPractice && (
            <Button 
              onClick={onNext} 
              className="ml-auto bg-orange-500 hover:bg-orange-600 transform transition-all hover:scale-105"
            >
              Next Question
            </Button>
          )
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
