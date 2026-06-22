import type { QuizAnswer } from "@/entities/quiz";
import type { Question } from "@/entities/question";

import { TrainerResultQuestionCard } from "./TrainerResultQuestionCard";

type TrainerResultQuestionsListProps = {
  questions: Question[];
  answers: QuizAnswer[];
};

export const TrainerResultQuestionsList = ({
  questions,
  answers,
}: TrainerResultQuestionsListProps) => {
  return (
    <div className="trainer-result__questions-card">
      <h2 className="trainer-result__questions-title">
        Список пройденных вопросов собеседования
      </h2>

      <ul className="trainer-result__questions-list">
        {questions.map((question) => {
          const answer = answers.find(
            (item) => item.questionId === question.id,
          );

          return (
            <TrainerResultQuestionCard
              key={question.id}
              question={question}
              status={answer?.answer ?? "UNANSWERED"}
            />
          );
        })}
      </ul>
    </div>
  );
};
