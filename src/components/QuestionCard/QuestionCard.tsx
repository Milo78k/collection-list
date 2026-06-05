import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestionBySlug } from "@/api/questionsApi";
import type { Question } from "@/types/question";
import { HtmlContent } from "@/components/HtmlContent/HtmlContent";
import { QuestionCardHeader } from "./QuestionCardHeader";
import { QuestionCardMeta } from "./QuestionCardMeta";
import { Loader } from "@/components/Loader/Loader";

import "./QuestionCard.scss";

type QuestionCardProps = {
  question: Question;
};

export const QuestionCard = ({ question }: QuestionCardProps) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [questionDetails, setQuestionDetails] = useState<Question | null>(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, questionDetails, isLoadingDetails]);

  const handleToggle = async () => {
    const nextIsOpen = !isOpen;

    setIsOpen(nextIsOpen);

    if (nextIsOpen && !questionDetails) {
      try {
        setIsLoadingDetails(true);

        const data = await getQuestionBySlug(question.slug);

        setQuestionDetails(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingDetails(false);
      }
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
