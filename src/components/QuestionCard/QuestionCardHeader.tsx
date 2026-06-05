import { memo } from "react";

type QuestionCardHeaderProps = {
  title: string;
  isOpen: boolean;
  isDetailsOpen: boolean;
  onToggle: () => void;
  onToggleDetails: () => void;
  onDetailsClick: () => void;
};

export const QuestionCardHeader = memo(
  ({
    title,
    isOpen,
    isDetailsOpen,
    onToggle,
    onToggleDetails,
    onDetailsClick,
  }: QuestionCardHeaderProps) => {
    return (
      <div className="question-card__top">
        <button
          className="question-card__header"
          onClick={onToggle}
          type="button"
        >
          <span className="question-card__title-wrapper">
            <span className="question-card__dot" />

            <h3 className="question-card__title">{title}</h3>
          </span>

          <span
            className={`question-card__toggle ${
              isOpen ? "question-card__toggle--active" : ""
            }`}
          >
            ⌄
          </span>
        </button>

        {isOpen && (
          <div className="question-card__details-wrapper">
            <button
              type="button"
              className="question-card__details-button"
              onClick={onToggleDetails}
            >
              ⋮
            </button>

            {isDetailsOpen && (
              <div className="question-card__details">
                <button
                  type="button"
                  className="question-card__details-item"
                  onClick={onDetailsClick}
                >
                  Подробнее
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
);
