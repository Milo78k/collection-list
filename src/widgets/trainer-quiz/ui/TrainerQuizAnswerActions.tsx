import thumbsdownIcon from "@/shared/assets/icons/ThumbsDown.svg";
import thumbsupIcon from "@/shared/assets/icons/ThumbsUp.svg";

import type { QuizAnswerStatus } from "@/entities/quiz";

type TrainerQuizAnswerActionsProps = {
  currentAnswerStatus: QuizAnswerStatus | null;
  onAnswer: (answer: QuizAnswerStatus) => void;
};

export const TrainerQuizAnswerActions = ({
  currentAnswerStatus,
  onAnswer,
}: TrainerQuizAnswerActionsProps) => {
  return (
    <div className="trainer-quiz__answer-actions">
      <button
        type="button"
        className={`trainer-quiz__answer-button ${
          currentAnswerStatus === "UNKNOWN"
            ? "trainer-quiz__answer-button--active"
            : ""
        }`}
        onClick={() => onAnswer("UNKNOWN")}
      >
        <span className="trainer-quiz__answer-icon">
          <img src={thumbsdownIcon} alt="" />
        </span>
        <span className="trainer-quiz__answer-text">Не знаю</span>
      </button>

      <button
        type="button"
        className={`trainer-quiz__answer-button ${
          currentAnswerStatus === "KNOWN"
            ? "trainer-quiz__answer-button--active"
            : ""
        }`}
        onClick={() => onAnswer("KNOWN")}
      >
        <span className="trainer-quiz__answer-icon">
          <img src={thumbsupIcon} alt="" />
        </span>
        <span className="trainer-quiz__answer-text">Знаю</span>
      </button>
    </div>
  );
};
