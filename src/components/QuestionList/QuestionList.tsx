import type { Question } from "@/types/question";
import { QuestionCard } from "@/components/QuestionCard/QuestionCard";
import "./QuestionList.scss";

type QuestionsListProps = {
  questions: Question[];
};

export const QuestionList = ({ questions }: QuestionsListProps) => {
  return (
    <div className="questions-list">
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
};
