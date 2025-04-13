import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LanguageSelector from "@/components/quiz/LanguageSelector";
import QuizCard from "@/components/quiz/QuizCard";
import Timer from "@/components/quiz/Timer";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Check, ChevronLeft, Clock, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Question } from "@/data/quizData";
import { Language, getQuestionsByLanguage } from "@/utils/quizDataHelpers";

const PracticePage = () => {
  const [language, setLanguage] = useState<Language | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [practiceStarted, setPracticeStarted] = useState(false);
  const [practiceFinished, setPracticeFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noQuestions, setNoQuestions] = useState(false);
  
  // Practice configuration
  const [questionCount, setQuestionCount] = useState("10");
  const [timeLimitMinutes, setTimeLimitMinutes] = useState("5");
  const { toast } = useToast();

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    setLoading(true);
    setNoQuestions(false);
    
    // Simulate loading for better UX
    setTimeout(() => {
      const fetchedQuestions = getQuestionsByLanguage(selectedLanguage);
      setQuestions(fetchedQuestions);
      
      if (fetchedQuestions.length === 0) {
        setNoQuestions(true);
      }
      
      setLoading(false);
    }, 800);
  };

  const handleStartPractice = () => {
    const questionsNum = parseInt(questionCount);
    const timeLimit = parseInt(timeLimitMinutes);
    
    if (isNaN(questionsNum) || questionsNum < 1 || questionsNum > questions.length) {
      toast({
        title: "Invalid question count",
        description: `Please enter a number between 1 and ${questions.length}.`,
        variant: "destructive",
      });
      return;
    }

    if (isNaN(timeLimit) || timeLimit < 1 || timeLimit > 60) {
      toast({
        title: "Invalid time limit",
        description: "Please enter a time limit between 1 and 60 minutes.",
        variant: "destructive",
      });
      return;
    }

    // Get random questions based on questionCount
    const randomQuestions = [...questions]
      .sort(() => 0.5 - Math.random())
      .slice(0, questionsNum);
    
    setQuestions(randomQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setPracticeStarted(true);
    setPracticeFinished(false);
  };

  const handleAnswerSubmit = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setCorrectAnswers(prev => prev + 1);
      toast({
        title: "Correct!",
        description: "Good job on getting this right.",
        variant: "default",
      });
    } else {
      setWrongAnswers(prev => prev + 1);
      toast({
        title: "Incorrect",
        description: "Keep practicing to improve.",
        variant: "destructive",
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      handleFinishPractice();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleFinishPractice = () => {
    setPracticeFinished(true);
    toast({
      title: "Practice Completed!",
      description: `You scored ${score} out of ${questions.length}.`,
      variant: "default",
    });
  };

  const handleTimeEnd = () => {
    setPracticeFinished(true);
    toast({
      title: "Time's Up!",
      description: `You completed ${currentQuestionIndex + 1} questions and scored ${score} points.`,
      variant: "destructive",
    });
  };

  const handleRestartPractice = () => {
    setPracticeStarted(false);
    setPracticeFinished(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
  };

  return (
    <div className="min-h-screen flex flex-col" id="practice">
      <Navbar />
      
      <main className="flex-1 container py-8 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 p-4 bg-orange-100 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800/30">
            <p className="text-sm text-center text-orange-800 dark:text-orange-200">
              📢 <strong>Note:</strong> Currently, questions are available for JavaScript and Java. More languages coming soon!
            </p>
          </div>

          <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">Practice Mode</h1>
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-12 w-12 animate-spin text-orange-500 mb-4" />
              <p className="text-muted-foreground">Loading practice questions...</p>
            </div>
          ) : !language ? (
            <LanguageSelector onSelect={handleLanguageSelect} />
          ) : noQuestions ? (
            <div className="text-center py-12 animate-fade-in">
              <AlertTriangle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No Questions Available</h2>
              <p className="text-muted-foreground mb-6">
                We're currently working on adding questions for {language}. Please check back later or try another language.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Our team is continuously updating the question bank. Thank you for your patience!
              </p>
              <button
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                onClick={() => setLanguage(null)}
              >
                Select Another Language
              </button>
            </div>
          ) : !practiceStarted ? (
            <div className="max-w-lg mx-auto bg-card border-2 border-orange-200 dark:border-orange-900/30 shadow-lg rounded-lg p-6 animate-fade-in">
              <h2 className="text-xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Configure Your Practice Session</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="question-count" className="block mb-2">
                    Number of Questions
                  </Label>
                  <Input
                    id="question-count"
                    type="text"
                    value={questionCount}
                    onChange={(e) => setQuestionCount(e.target.value)}
                    className="w-full focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter a number (e.g. 10)"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Available questions: {questions.length}
                  </p>
                </div>
                
                <div>
                  <Label htmlFor="time-limit" className="block mb-2">
                    Time Limit (minutes)
                  </Label>
                  <Input
                    id="time-limit"
                    type="text"
                    value={timeLimitMinutes}
                    onChange={(e) => setTimeLimitMinutes(e.target.value)}
                    className="w-full focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter minutes (e.g. 5)"
                  />
                </div>
                
                <Button
                  onClick={handleStartPractice}
                  disabled={questions.length === 0}
                  className="w-full mt-4 bg-orange-500 hover:bg-orange-600 transition-transform transform hover:scale-105"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Start Practice Session
                </Button>
              </div>
            </div>
          ) : practiceFinished ? (
            <div className="max-w-lg mx-auto bg-card border-2 border-orange-200 dark:border-orange-900/30 shadow-lg rounded-lg p-6 animate-fade-in">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 p-3 mb-4">
                  <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-orange-600 dark:text-orange-400">Practice Completed!</h2>
                <p className="text-muted-foreground">
                  You've completed your practice session.
                </p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4 mb-6 border border-orange-200 dark:border-orange-900/20">
                <div className="flex justify-between items-center mb-2">
                  <span>Score:</span>
                  <span className="font-semibold">{score} / {questions.length}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Correct Answers:</span>
                  <span className="font-semibold text-green-500">{correctAnswers}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Wrong Answers:</span>
                  <span className="font-semibold text-red-500">{wrongAnswers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Accuracy:</span>
                  <span className="font-semibold">
                    {Math.round((score / questions.length) * 100)}%
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={handleRestartPractice}
                  className="flex-1 hover:border-orange-500 hover:text-orange-500 transition-all transform hover:scale-105"
                >
                  Change Settings
                </Button>
                <Button
                  onClick={handleStartPractice}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 transition-all transform hover:scale-105"
                >
                  Restart Practice
                </Button>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="mb-6">
                <Timer
                  totalTime={parseInt(timeLimitMinutes) * 60}
                  onTimeEnd={handleTimeEnd}
                />
              </div>
              
              <div className="mb-4 flex justify-between items-center p-3 bg-orange-100/50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800/30">
                <span className="text-sm font-medium text-muted-foreground">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <div className="flex space-x-4">
                  <span className="text-sm font-medium text-green-500">
                    Correct: {correctAnswers}
                  </span>
                  <span className="text-sm font-medium text-red-500">
                    Wrong: {wrongAnswers}
                  </span>
                  <span className="text-sm font-medium">
                    Score: {score}
                  </span>
                </div>
              </div>
              
              <QuizCard
                question={questions[currentQuestionIndex]}
                onAnswer={handleAnswerSubmit}
                onNext={handleNextQuestion}
                onPrev={handlePrevQuestion}
                showNavigation={true}
                isPractice={true}
              />

              <div className="flex justify-center mt-6">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={handlePrevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="hover:border-orange-500 hover:text-orange-500 transition-transform transform hover:scale-105"
                  >
                    <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PracticePage;
