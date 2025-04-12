import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LanguageSelector from "@/components/quiz/LanguageSelector";
import QuizCard from "@/components/quiz/QuizCard";
import ResultSummary from "@/components/quiz/ResultSummary";
import { useToast } from "@/hooks/use-toast";
import { Loader2, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Question } from "@/data/quizData";
import { Language, getQuestionsByLanguage } from "@/utils/quizDataHelpers";

const QuizPage = () => {
  const [language, setLanguage] = useState<Language | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [timeSpent, setTimeSpent] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noQuestions, setNoQuestions] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (language) {
      setLoading(true);
      setNoQuestions(false);
      // Remove this line to prevent auto-scrolling
      // window.scrollTo(0, 0);
      // Simulate loading for better UX
      setTimeout(() => {
        const fetchedQuestions = getQuestionsByLanguage(language);
        
        if (fetchedQuestions.length === 0) {
          setNoQuestions(true);
          setLoading(false);
          return;
        }
        
        // Get 10 random questions or all if less than 10
        const randomQuestions = [...fetchedQuestions]
          .sort(() => 0.5 - Math.random())
          .slice(0, Math.min(fetchedQuestions.length, 10));
        
        setQuestions(randomQuestions);
        setCurrentQuestionIndex(0);
        setScore(0);
        setCorrectAnswers(0);
        setWrongAnswers(0);
        setAnswers([]);
        setTimeSpent(0);
        setQuizFinished(false);
        setLoading(false);
      }, 800);
    }
  }, [language]);

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
  };

  const handleAnswerSubmit = (isCorrect: boolean, questionTimeSpent: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = isCorrect;
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setCorrectAnswers(prev => prev + 1);
    } else {
      setWrongAnswers(prev => prev + 1);
    }

    setTimeSpent((prev) => prev + questionTimeSpent);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSaveResult = (username: string) => {
    localStorage.setItem("username", username);
    
    const newResult = {
      id: `r${Date.now()}`,
      username,
      language: language as Language,
      score,
      totalQuestions: questions.length,
      timeSpent,
      timestamp: new Date().toISOString(),
    };
    
    // In a real app, this would save to a database
    // For this example, we log to console
    console.log("Saved result:", newResult);
    
    toast({
      title: "Result saved!",
      description: "Your score has been saved to the leaderboard.",
      variant: "default",
    });
  };

  const handleRetry = () => {
    setQuizFinished(false);
    // Get new random questions from the same language
    if (language) {
      setLoading(true);
      setTimeout(() => {
        const fetchedQuestions = getQuestionsByLanguage(language);
        // Get 10 random questions
        const randomQuestions = [...fetchedQuestions]
          .sort(() => 0.5 - Math.random())
          .slice(0, 10);
        
        setQuestions(randomQuestions);
        setCurrentQuestionIndex(0);
        setScore(0);
        setCorrectAnswers(0);
        setWrongAnswers(0);
        setAnswers([]);
        setTimeSpent(0);
        setLoading(false);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" id="quiz">
      <Navbar />
      
      <main className="flex-1 container py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Quiz Challenge</h1>
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-12 w-12 animate-spin text-orange-500 mb-4" />
              <p className="text-muted-foreground">Loading quiz questions...</p>
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
          ) : quizFinished ? (
            <ResultSummary
              score={score}
              totalQuestions={questions.length}
              timeSpent={timeSpent}
              language={language}
              onSaveResult={handleSaveResult}
              onRetry={handleRetry}
              correctAnswers={correctAnswers}
              wrongAnswers={wrongAnswers}
            />
          ) : questions.length > 0 ? (
            <div>
              <div className="mb-4 flex justify-between items-center">
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
                onNext={
                  currentQuestionIndex < questions.length - 1
                    ? handleNextQuestion
                    : () => setQuizFinished(true)
                }
                onPrev={currentQuestionIndex > 0 ? handlePrevQuestion : undefined}
                timeLimit={30}
                showNavigation={false}
              />
            </div>
          ) : (
            <Alert className="bg-orange-100 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900/50">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <AlertDescription className="text-sm text-muted-foreground">
                No questions are available for this language. Please select a different language.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizPage;
