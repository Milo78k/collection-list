import { useState } from "react";
import { HtmlContent } from "@/components/HtmlContent/HtmlContent";
import showMoreIcon from "@/assets/icons/Vector-more.svg";

type QuestionAnswerCardProps = {
  title: string;
  content?: string | null;
  isExpandable?: boolean;
};

export const QuestionAnswerCard = ({
  title,
  content,
  isExpandable = false,
}: QuestionAnswerCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!content) return null;

  return (
    <article className="question-details__card">
      <h2 className="question-details__section-title">{title}</h2>

      {isExpandable ? (
        <>
          <div
            className={`question-details__full-answer ${
              isOpen ? "question-details__full-answer--open" : ""
            }`}
          >
            <HtmlContent
              className="question-details__content"
              content={content}
            />
          </div>

          <button
            type="button"
            className="question-details__expand"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? "Скрыть" : "Развернуть"}
            <img src={showMoreIcon} alt="Show more" />
          </button>
        </>
      ) : (
        <HtmlContent className="question-details__content" content={content} />
      )}
    </article>
  );
};
