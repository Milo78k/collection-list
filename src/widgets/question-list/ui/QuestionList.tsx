import { QuestionCard, type Question } from "@/entities/question";
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
