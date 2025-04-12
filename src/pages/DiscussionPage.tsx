
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CommentList from "@/components/discussion/CommentList";
import { Search, MessageSquare, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Question } from "@/data/quizData";
import { Language, getQuestionsByLanguage } from "@/utils/quizDataHelpers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DiscussionPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const { toast } = useToast();

  // Load all questions
  useEffect(() => {
    const allLanguages: Language[] = [
      "JavaScript",
      "Java",
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Python",
      "Other",
    ];
    
    let allQuestions: Question[] = [];
    
    // Fetch questions for all languages
    allLanguages.forEach((lang) => {
      const langQuestions = getQuestionsByLanguage(lang);
      allQuestions = [...allQuestions, ...langQuestions];
    });
    
    setQuestions(allQuestions);
    setFilteredQuestions(allQuestions);
  }, []);

  // Filter questions when language or search query changes
  useEffect(() => {
    let filtered = [...questions];
    
    if (selectedLanguage !== "All") {
      filtered = filtered.filter(
        (q) => q.type === selectedLanguage
      );
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (q) =>
          q.question.toLowerCase().includes(query) ||
          q.options.some((opt) => opt.toLowerCase().includes(query))
      );
    }
    
    setFilteredQuestions(filtered);
  }, [selectedLanguage, searchQuery, questions]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled in the useEffect
  };

  const handleSelectQuestion = (question: Question) => {
    setSelectedQuestion(question);
  };

  const handleAddComment = (comment: string) => {
    // In a real app, this would save to a database
    console.log("Added comment:", comment);
  };

  const handleBackToList = () => {
    setSelectedQuestion(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Discussion Room</h1>
          
          {selectedQuestion ? (
            <div className="animate-fade-in">
              <Button
                variant="outline"
                onClick={handleBackToList}
                className="mb-4"
              >
                ← Back to Questions
              </Button>
              
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="mb-2 text-xs font-medium uppercase text-muted-foreground">
                    {selectedQuestion.type || "Quiz Question"}
                  </div>
                  <h2 className="text-xl font-bold mb-6">{selectedQuestion.question}</h2>
                  <div className="space-y-3">
                    {selectedQuestion.options.map((option, index) => {
                      // Convert to number if needed for comparison
                      const correctAnswer = typeof selectedQuestion.correctAnswer === 'string' 
                        ? parseInt(selectedQuestion.correctAnswer, 10) 
                        : selectedQuestion.correctAnswer;
                      
                      return (
                        <div
                          key={index}
                          className={`option-card ${
                            index === correctAnswer
                              ? "correct"
                              : ""
                          }`}
                        >
                          <div className="flex items-center">
                            <div className="flex-shrink-0 mr-3">
                              <div
                                className={`flex items-center justify-center w-6 h-6 rounded-full ${
                                  index === correctAnswer
                                    ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                                    : "bg-muted text-foreground"
                                }`}
                              >
                                <span>{String.fromCharCode(65 + index)}</span>
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
                  
                  {selectedQuestion.explanation && (
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-medium mb-2">Explanation:</h3>
                      <p className="text-sm">{selectedQuestion.explanation}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <CommentList
                questionId={selectedQuestion.id}
                onAddComment={handleAddComment}
              />
            </div>
          ) : (
            <div className="animate-fade-in">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <div className="flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5" /> Questions
                    </div>
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4 text-muted-foreground" />
                      <Select
                        value={selectedLanguage}
                        onValueChange={(value) => setSelectedLanguage(value as Language | "All")}
                      >
                        <SelectTrigger className="w-[150px]">
                          <SelectValue placeholder="Filter by language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All">All Languages</SelectItem>
                          <SelectItem value="JavaScript">JavaScript</SelectItem>
                          <SelectItem value="Java">Java</SelectItem>
                          <SelectItem value="HTML">HTML</SelectItem>
                          <SelectItem value="CSS">CSS</SelectItem>
                          <SelectItem value="React">React</SelectItem>
                          <SelectItem value="Next.js">Next.js</SelectItem>
                          <SelectItem value="Python">Python</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSearch} className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search questions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </form>
                  
                  <div className="space-y-4">
                    {filteredQuestions.length > 0 ? (
                      filteredQuestions.map((q) => (
                        <div
                          key={q.id}
                          className="border rounded-lg p-4 hover:bg-accent/10 cursor-pointer transition-colors"
                          onClick={() => handleSelectQuestion(q)}
                        >
                          <div className="flex justify-between mb-2">
                            <span className="text-xs px-2 py-1 bg-primary/10 rounded-full">
                              {q.type || "General"}
                            </span>
                          </div>
                          <h3 className="font-medium text-sm sm:text-base mb-2">
                            {q.question}
                          </h3>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MessageSquare className="h-3 w-3 mr-1" />{" "}
                            Join discussion
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <MessageSquare className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">No questions found.</p>
                        {searchQuery && (
                          <Button
                            variant="link"
                            onClick={() => setSearchQuery("")}
                            className="mt-2"
                          >
                            Clear search
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DiscussionPage;
