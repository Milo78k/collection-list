import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLazyGetQuestionBySlugQuery } from "@/entities/question/api/questionsApi";
import type { Question } from "../model/question";

import { HtmlContent } from "@/shared/ui/HtmlContent/ui/HtmlContent";
import { Loader } from "@/shared/ui/Loader/Loader";

import { QuestionCardHeader } from "./QuestionCardHeader";
import { QuestionCardMeta } from "./QuestionCardMeta";

import "./QuestionCard.scss";

type QuestionCardProps = {
  question: Question;
};

export const QuestionCard = ({ question }: QuestionCardProps) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const [
    getQuestionBySlug,
    {
      data: questionDetails,
      isFetching: isLoadingDetails,
      isError: isDetailsError,
    },
  ] = useLazyGetQuestionBySlugQuery();

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, questionDetails, isLoadingDetails, isDetailsError]);

  const handleToggle = async () => {
    const nextIsOpen = !isOpen;

    setIsOpen(nextIsOpen);

    if (nextIsOpen && !questionDetails) {
      getQuestionBySlug(question.slug);
    }
  };

  const handleToggleDetails = useCallback(() => {
    setIsDetailsOpen((prev) => !prev);
  }, []);

  const handleDetailsClick = useCallback(() => {
    navigate(`/questions/${question.slug}`);
  }, [navigate, question.slug]);

  return (
    <article className="question-card">
      <QuestionCardHeader
        title={question.title}
        isOpen={isOpen}
        isDetailsOpen={isDetailsOpen}
        onToggle={handleToggle}
        onToggleDetails={handleToggleDetails}
        onDetailsClick={handleDetailsClick}
      />

      <div
        ref={contentRef}
        className="question-card__content"
        style={{ maxHeight: `${height}px` }}
      >
        <QuestionCardMeta
          rate={question.rate}
          complexity={question.complexity}
        />

        {isLoadingDetails && <Loader />}

        {isDetailsError && (
          <p className="question-card__error">Не удалось загрузить ответ</p>
        )}

        {!isLoadingDetails && questionDetails?.shortAnswer && (
          <HtmlContent
            className="question-card__answer"
            content={questionDetails.shortAnswer}
          />
        )}
      </div>
    </article>
  );
};
