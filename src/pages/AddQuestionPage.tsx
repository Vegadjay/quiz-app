import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Trash, 
  Plus, 
  Check, 
  PenLine 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Language } from "@/utils/quizDataHelpers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddQuestionPage = () => {
  const [language, setLanguage] = useState<Language | "">("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [explanation, setExplanation] = useState("");
  const { toast } = useToast();

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (index: number) => {
    if (options.length <= 2) {
      toast({
        title: "Cannot remove option",
        description: "A question must have at least 2 options.",
        variant: "destructive",
      });
      return;
    }

    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);

    // Adjust correctAnswer if needed
    if (correctAnswer >= newOptions.length) {
      setCorrectAnswer(newOptions.length - 1);
    }
  };

  const handleSubmit = () => {
    // Validate inputs
    if (!language) {
      toast({
        title: "Missing language",
        description: "Please select a programming language.",
        variant: "destructive",
      });
      return;
    }

    if (!question.trim()) {
      toast({
        title: "Missing question",
        description: "Please enter a question.",
        variant: "destructive",
      });
      return;
    }

    // Check if all options have content
    if (options.some(option => !option.trim())) {
      toast({
        title: "Empty options",
        description: "Please fill in all options.",
        variant: "destructive",
      });
      return;
    }

    // Create question object
    const newQuestion = {
      id: `q${Date.now()}`,
      language: language as Language,
      question,
      options,
      correctAnswer,
      explanation: explanation.trim() || undefined,
    };

    // In a real app, this would save to a database
    // For this example, we log to console
    console.log("New question:", newQuestion);

    // Show success message
    toast({
      title: "Question submitted!",
      description: "Your question has been added successfully.",
      variant: "default",
    });

    // Reset form
    setLanguage("");
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer(0);
    setExplanation("");
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setLanguage("");
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer(0);
    setExplanation("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8 px-4 bg-gradient-to-b from-background to-muted/50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">Add a Question</h1>
          
          <Card className="animate-fade-in border-2 border-orange-200 dark:border-orange-900/30 shadow-lg">
            <CardHeader className="bg-orange-50 dark:bg-orange-900/10 rounded-t-lg">
              <CardTitle className="flex items-center text-orange-700 dark:text-orange-300">
                <PenLine className="mr-2 h-5 w-5" /> Create a New Question
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div>
                <Label htmlFor="language" className="block mb-2 text-orange-700 dark:text-orange-300">
                  Programming Language
                </Label>
                <Select
                  value={language}
                  onValueChange={(value) => setLanguage(value as Language)}
                >
                  <SelectTrigger className="border-orange-200 dark:border-orange-800 focus:ring-orange-500">
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-orange-200 dark:border-orange-800">
                    <SelectItem value="JavaScript">JavaScript</SelectItem>
                    <SelectItem value="Java">Java</SelectItem>
                    <SelectItem value="HTML">HTML</SelectItem>
                    <SelectItem value="CSS">CSS</SelectItem>
                    <SelectItem value="React">React</SelectItem>
                    <SelectItem value="Next.js">Next.js</SelectItem>
                    <SelectItem value="Python">Python</SelectItem>
                    <SelectItem value="TypeScript">TypeScript</SelectItem>
                    <SelectItem value="Tailwind CSS">Tailwind CSS</SelectItem>
                    <SelectItem value="Bootstrap">Bootstrap</SelectItem>
                    <SelectItem value="C">C</SelectItem>
                    <SelectItem value="C++">C++</SelectItem>
                    <SelectItem value="Ruby">Ruby</SelectItem>
                    <SelectItem value="Rust">Rust</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="question" className="block mb-2 text-orange-700 dark:text-orange-300">
                  Question
                </Label>
                <Textarea
                  id="question"
                  placeholder="Enter your question here..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="min-h-[100px] border-orange-200 dark:border-orange-800 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label className="text-orange-700 dark:text-orange-300">Options</Label>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleAddOption}
                    disabled={options.length >= 8}
                    className="border-orange-300 hover:bg-orange-100 hover:text-orange-700 transition-all duration-300 dark:border-orange-700 dark:hover:bg-orange-900/30"
                  >
                    <Plus className="h-4 w-4 mr-1" /> Add Option
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {options.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant={correctAnswer === index ? "default" : "outline"}
                        size="icon"
                        className={`flex-shrink-0 w-8 h-8 transition-all duration-300 ${
                          correctAnswer === index 
                            ? "bg-orange-500 hover:bg-orange-600" 
                            : "border-orange-300 hover:border-orange-500 dark:border-orange-700"
                        }`}
                        onClick={() => setCorrectAnswer(index)}
                        title={correctAnswer === index ? "Correct answer" : "Set as correct answer"}
                      >
                        {correctAnswer === index ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <span>{String.fromCharCode(65 + index)}</span>
                        )}
                      </Button>
                      <Input
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        placeholder={`Option ${String.fromCharCode(65 + index)}`}
                        className="flex-1 border-orange-200 dark:border-orange-800 focus:ring-orange-500"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="flex-shrink-0 border-orange-300 hover:bg-orange-100 hover:text-red-500 transition-all duration-300 dark:border-orange-700 dark:hover:bg-orange-900/30"
                        onClick={() => handleRemoveOption(index)}
                        disabled={options.length <= 2}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Label htmlFor="explanation" className="block mb-2 text-orange-700 dark:text-orange-300">
                  Explanation (Optional)
                </Label>
                <Textarea
                  id="explanation"
                  placeholder="Provide an explanation for the correct answer..."
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  className="min-h-[100px] border-orange-200 dark:border-orange-800 focus:ring-orange-500"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button 
                  variant="outline" 
                  onClick={handleReset}
                  className="sm:flex-1 border-orange-300 hover:bg-orange-100 hover:text-orange-700 transition-all transform hover:scale-105 duration-300 dark:border-orange-700 dark:hover:bg-orange-900/30"
                >
                  Reset Form
                </Button>
                <Button 
                  onClick={handleSubmit}
                  className="sm:flex-1 bg-orange-500 hover:bg-orange-600 transition-all transform hover:scale-105 duration-300"
                >
                  Submit Question
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AddQuestionPage;
