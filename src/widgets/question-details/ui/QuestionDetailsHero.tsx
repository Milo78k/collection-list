import type { Question } from "@/entities/question";
import filterIconMobile from "@/shared/assets/icons/Icon.svg";

type QuestionDetailsHeroProps = {
  question: Question;
  onOpenSidebar: () => void;
};

export const QuestionDetailsHero = ({
  question,
  onOpenSidebar,
}: QuestionDetailsHeroProps) => {
  return (
    <div className="question-details__hero-card">
      {question.imageSrc && (
        <img
          src={question.imageSrc}
          alt="Question illustration"
          className="question-details__image"
        />
      )}

      <div className="question-details__wrapper">
        <div className="question-details__info">
          <h1 className="question-details__title">{question.title}</h1>

          <p className="question-details__subtitle">{question.description}</p>
        </div>

        <button
          type="button"
          className="question-details__actions"
          onClick={onOpenSidebar}
        >
          <img src={filterIconMobile} alt="Actions" />
        </button>
      </div>
    </div>
  );
};
