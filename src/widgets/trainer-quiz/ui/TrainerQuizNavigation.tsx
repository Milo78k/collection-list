import rightIcon from "@/shared/assets/icons/Vector-right.svg";
import leftIcon from "@/shared/assets/icons/Vector-left.svg";

type TrainerQuizNavigationProps = {
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

export const TrainerQuizNavigation = ({
  isFirstQuestion,
  isLastQuestion,
  onPrevious,
  onNext,
}: TrainerQuizNavigationProps) => {
  return (
    <div className="trainer-quiz__nav">
      <button
        type="button"
        className="trainer-quiz__nav-button"
        disabled={isFirstQuestion}
        onClick={onPrevious}
      >
        <span className="trainer-quiz__nav-icon">
          <img src={leftIcon} alt="" className="trainer-quiz__nav-icon-img" />
        </span>
        Назад
      </button>

      <button
        type="button"
        className="trainer-quiz__nav-button"
        onClick={onNext}
      >
        {isLastQuestion ? "Результат" : "Далее"}
        <span className="trainer-quiz__nav-icon">
          <img src={rightIcon} alt="" className="trainer-quiz__nav-icon-img" />
        </span>
      </button>
    </div>
  );
};
