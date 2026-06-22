import type { Question } from "@/entities/question";

import { HtmlContent } from "@/shared/ui/HtmlContent/ui/HtmlContent";

type TrainerQuizQuestionProps = {
  question: Question;
  answerContent: string;
  isAnswerVisible: boolean;
  onToggleAnswer: () => void;
};

export const TrainerQuizQuestion = ({
  question,
  answerContent,
  isAnswerVisible,
  onToggleAnswer,
}: TrainerQuizQuestionProps) => {
  return (
    <div className="trainer-quiz__question-column">
      <div className="trainer-quiz__question">
        <span className="trainer-quiz__dot" />
        <h2 className="trainer-quiz__question-title">{question.title}</h2>
      </div>

      {answerContent && (
        <button
          type="button"
          className="trainer-quiz__show-answer"
          onClick={onToggleAnswer}
        >
          {isAnswerVisible ? "Скрыть ответ" : "Посмотреть ответ"}
        </button>
      )}

      {isAnswerVisible && answerContent && (
        <div className="trainer-quiz__answer">
          <HtmlContent content={answerContent} />
        </div>
      )}
    </div>
  );
};
