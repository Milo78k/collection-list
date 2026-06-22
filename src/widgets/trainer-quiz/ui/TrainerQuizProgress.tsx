type TrainerQuizProgressProps = {
  currentQuestionNumber: number;
  totalQuestions: number;
  progressPercent: number;
};

export const TrainerQuizProgress = ({
  currentQuestionNumber,
  totalQuestions,
  progressPercent,
}: TrainerQuizProgressProps) => {
  return (
    <div className="trainer-quiz__progress-card">
      <div className="trainer-quiz__progress-header">
        <h1 className="trainer-quiz__progress-title">Вопросы собеседования</h1>

        <span className="trainer-quiz__progress-count">
          {currentQuestionNumber}/{totalQuestions}
        </span>
      </div>

      <div className="trainer-quiz__progress">
        <div
          className="trainer-quiz__progress-line"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};
