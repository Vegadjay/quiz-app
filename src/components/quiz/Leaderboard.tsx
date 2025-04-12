
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Clock, Filter, Medal, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Language, QuizResult, leaderboard } from "@/utils/quizDataHelpers";

interface LeaderboardProps {
  selectedLanguage?: Language;
}

const Leaderboard = ({ selectedLanguage }: LeaderboardProps) => {
  const [language, setLanguage] = useState<Language | "All">(
    selectedLanguage || "All"
  );
  const [sortedResults, setSortedResults] = useState<QuizResult[]>([]);
  const [votes, setVotes] = useState<{[key: string]: {upvotes: number, downvotes: number, userVote: 'up' | 'down' | null}}>({}); 

  useEffect(() => {
    // Add JAY VEGAD to the first position
    const jayResult: QuizResult = {
      id: "jay1",
      username: "JAY VEGAD",
      language: "JavaScript",
      score: 10,
      totalQuestions: 10,
      timeSpent: 120,
      timestamp: new Date().toISOString(),
    };
    
    let filtered = [jayResult, ...leaderboard];
    
    if (language !== "All") {
      filtered = filtered.filter((result) => result.language === language);
    }
    
    // Sort by score first, then by time spent
    const sorted = filtered.sort((a, b) => {
      if (a.id === "jay1") return -1; // Always keep JAY VEGAD at the top
      if (b.id === "jay1") return 1;
      if (b.score !== a.score) return b.score - a.score;
      return a.timeSpent - b.timeSpent;
    });
    
    setSortedResults(sorted);
    
    // Initialize votes
    const initialVotes: {[key: string]: {upvotes: number, downvotes: number, userVote: 'up' | 'down' | null}} = {};
    sorted.forEach(result => {
      initialVotes[result.id] = {
        upvotes: Math.floor(Math.random() * 10),
        downvotes: Math.floor(Math.random() * 3),
        userVote: null
      };
    });
    
    // Make sure JAY VEGAD has more upvotes
    if (initialVotes["jay1"]) {
      initialVotes["jay1"] = {
        upvotes: 42,
        downvotes: 0,
        userVote: null
      };
    }
    
    setVotes(initialVotes);
  }, [language]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const getMedalColor = (index: number) => {
    switch (index) {
      case 0:
        return "text-yellow-500";
      case 1:
        return "text-gray-400";
      case 2:
        return "text-amber-800";
      default:
        return "text-muted-foreground";
    }
  };
  
  const handleVote = (id: string, voteType: 'up' | 'down') => {
    setVotes(prev => {
      const currentVotes = {...prev};
      const userVote = currentVotes[id]?.userVote;
      
      if (userVote === voteType) {
        // Removing vote
        currentVotes[id] = {
          ...currentVotes[id],
          upvotes: voteType === 'up' ? currentVotes[id].upvotes - 1 : currentVotes[id].upvotes,
          downvotes: voteType === 'down' ? currentVotes[id].downvotes - 1 : currentVotes[id].downvotes,
          userVote: null
        };
      } else if (userVote === null) {
        // New vote
        currentVotes[id] = {
          ...currentVotes[id],
          upvotes: voteType === 'up' ? currentVotes[id].upvotes + 1 : currentVotes[id].upvotes,
          downvotes: voteType === 'down' ? currentVotes[id].downvotes + 1 : currentVotes[id].downvotes,
          userVote: voteType
        };
      } else {
        // Switching vote
        currentVotes[id] = {
          ...currentVotes[id],
          upvotes: voteType === 'up' ? currentVotes[id].upvotes + 1 : currentVotes[id].upvotes - 1,
          downvotes: voteType === 'down' ? currentVotes[id].downvotes + 1 : currentVotes[id].downvotes - 1,
          userVote: voteType
        };
      }
      
      return currentVotes;
    });
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <Trophy className="mr-2 h-5 w-5 text-yellow-500" /> Leaderboard
          </CardTitle>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select
              value={language}
              onValueChange={(value) => setLanguage(value as Language | "All")}
            >
              <SelectTrigger className="w-[180px]">
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
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedResults.length > 0 ? (
            sortedResults.map((result, index) => (
              <div
                key={result.id}
                className="flex items-center p-3 bg-card border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-8 h-8 mr-4">
                  {index < 3 ? (
                    <Medal className={`h-6 w-6 ${getMedalColor(index)}`} />
                  ) : (
                    <span className="text-muted-foreground font-medium">
                      {index + 1}
                    </span>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium">{result.username}</h3>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span className="bg-muted rounded px-1.5 py-0.5 mr-2">
                      {result.language}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatTime(result.timeSpent)}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mr-4">
                  <button 
                    onClick={() => handleVote(result.id, 'up')}
                    className={`flex items-center gap-1 text-sm ${votes[result.id]?.userVote === 'up' ? 'text-orange-500' : 'text-muted-foreground hover:text-orange-500'}`}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{votes[result.id]?.upvotes || 0}</span>
                  </button>
                  
                  <button 
                    onClick={() => handleVote(result.id, 'down')}
                    className={`flex items-center gap-1 text-sm ${votes[result.id]?.userVote === 'down' ? 'text-orange-500' : 'text-muted-foreground hover:text-orange-500'}`}
                  >
                    <ThumbsDown className="h-4 w-4" />
                    <span>{votes[result.id]?.downvotes || 0}</span>
                  </button>
                </div>
                
                <div className="text-right">
                  <span className="font-bold">
                    {result.score}/{result.totalQuestions}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {Math.round((result.score / result.totalQuestions) * 100)}%
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No results found for this language.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setLanguage("All")}
              >
                Show all languages
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
