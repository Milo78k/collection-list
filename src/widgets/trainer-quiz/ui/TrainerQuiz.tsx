import { Navigate } from "react-router-dom";

import { useTrainerQuiz } from "../model/useTrainerQuiz";

import { TrainerQuizAnswerActions } from "./TrainerQuizAnswerActions";
import { TrainerQuizImage } from "./TrainerQuizImage";
import { TrainerQuizNavigation } from "./TrainerQuizNavigation";
import { TrainerQuizProgress } from "./TrainerQuizProgress";
import { TrainerQuizQuestion } from "./TrainerQuizQuestion";

import "./TrainerQuiz.scss";

export const TrainerQuiz = () => {
  const {
    activeQuiz,
    currentQuestion,
    currentQuestionNumber,
    totalQuestions,
    progressPercent,
    isFirstQuestion,
    isLastQuestion,
    currentAnswerStatus,
    answerContent,
    isAnswerVisible,
    handleToggleAnswer,
    handlePreviousQuestion,
    handleNextQuestion,
    handleFinishQuiz,
    handleAnswer,
  } = useTrainerQuiz();

  if (!activeQuiz) {
    return <Navigate to="/trainer" replace />;
  }

  if (!currentQuestion) {
    return <Navigate to="/trainer/result" replace />;
  }

  return (
    <section className="trainer-quiz">
      <TrainerQuizProgress
        currentQuestionNumber={currentQuestionNumber}
        totalQuestions={totalQuestions}
        progressPercent={progressPercent}
      />

      <article className="trainer-quiz__card">
        <TrainerQuizNavigation
          isFirstQuestion={isFirstQuestion}
          isLastQuestion={isLastQuestion}
          onPrevious={handlePreviousQuestion}
          onNext={handleNextQuestion}
        />

        <div className="trainer-quiz__content">
          <TrainerQuizQuestion
            question={currentQuestion}
            answerContent={answerContent}
            isAnswerVisible={isAnswerVisible}
            onToggleAnswer={handleToggleAnswer}
          />

          <TrainerQuizImage imageSrc={currentQuestion.imageSrc} />

          <TrainerQuizAnswerActions
            currentAnswerStatus={currentAnswerStatus}
            onAnswer={handleAnswer}
          />
        </div>

        <div className="trainer-quiz__bottom">
          <button
            type="button"
            className="trainer-quiz__finish"
            onClick={handleFinishQuiz}
          >
            Завершить
          </button>
        </div>
      </article>
    </section>
  );
};
