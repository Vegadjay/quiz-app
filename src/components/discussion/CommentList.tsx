
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, User, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Comment, getCommentsByQuestionId } from "@/utils/quizDataHelpers";

interface CommentListProps {
  questionId: string;
  onAddComment: (comment: string) => void;
}

const CommentList = ({ questionId, onAddComment }: CommentListProps) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(
    getCommentsByQuestionId(questionId)
  );
  const { toast } = useToast();

  const handleAddComment = () => {
    if (!newComment.trim()) {
      toast({
        title: "Empty comment",
        description: "Please write something before posting.",
        variant: "destructive",
      });
      return;
    }

    const username = localStorage.getItem("username") || "Anonymous";
    
    const comment: Comment = {
      id: `c${Date.now()}`,
      questionId,
      username,
      comment: newComment,
      timestamp: new Date().toISOString(),
    };

    setComments([comment, ...comments]);
    onAddComment(newComment);
    setNewComment("");

    toast({
      title: "Comment added",
      description: "Your comment has been posted successfully.",
      variant: "default",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageSquare className="mr-2 h-5 w-5" /> Discussion
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Add a comment</h3>
          <div className="space-y-3">
            <Textarea
              placeholder="Share your thoughts, ask questions, or provide additional insights..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[100px]"
            />
            <Button onClick={handleAddComment} className="w-full sm:w-auto">
              <Send className="mr-2 h-4 w-4" /> Post Comment
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="border-b pb-4 last:border-0">
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-foreground mr-2">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{comment.username}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(comment.timestamp)}
                    </p>
                  </div>
                </div>
                <p className="text-sm ml-10">{comment.comment}</p>
              </div>
            ))
          ) : (
            <div className="text-center py-6">
              <MessageSquare className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">No comments yet. Be the first to share your thoughts!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CommentList;
