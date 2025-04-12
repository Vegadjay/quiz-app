
import { useEffect, useState, useCallback } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock } from "lucide-react";

interface TimerProps {
  totalTime: number; // in seconds
  onTimeEnd?: () => void;
  isPaused?: boolean;
}

const Timer = ({ totalTime, onTimeEnd, isPaused = false }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isFinished, setIsFinished] = useState(false);

  const handleTimeEnd = useCallback(() => {
    setIsFinished(true);
    onTimeEnd && onTimeEnd();
  }, [onTimeEnd]);

  useEffect(() => {
    setTimeLeft(totalTime);
    setIsFinished(false);
  }, [totalTime]);

  useEffect(() => {
    if (isPaused || isFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, isFinished, handleTimeEnd]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const percentage = (timeLeft / totalTime) * 100;

  const getProgressColor = () => {
    if (percentage > 60) return "bg-orange-500";
    if (percentage > 30) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium flex items-center">
          <Clock className="mr-1 h-4 w-4" /> Time Remaining
        </span>
        <span className="text-sm font-medium">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </span>
      </div>
      <Progress
        value={percentage}
        className={`h-2 ${getProgressColor()}`}
      />
    </div>
  );
};

export default Timer;
