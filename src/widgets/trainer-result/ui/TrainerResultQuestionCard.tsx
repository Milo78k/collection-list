import { Link } from "react-router-dom";

import type { Question } from "@/entities/question";

import thumbsupIcon from "@/shared/assets/icons/ThumbsUp.svg";
import thumbsdownIcon from "@/shared/assets/icons/ThumbsDown.svg";

import type { AnswerStatus } from "../model/trainerResultTypes";

type TrainerResultQuestionCardProps = {
  question: Question;
  status: AnswerStatus;
};

const getStatusLabel = (status: AnswerStatus) => {
  if (status === "KNOWN") return "Знаю";
  if (status === "UNKNOWN") return "Не знаю";

  return "Без ответа";
};

const getStatusIcon = (status: AnswerStatus) => {
  if (status === "KNOWN") return thumbsupIcon;
  if (status === "UNKNOWN") return thumbsdownIcon;

  return thumbsdownIcon;
};

export const TrainerResultQuestionCard = ({
  question,
  status,
}: TrainerResultQuestionCardProps) => {
  const statusIcon = getStatusIcon(status);

  return (
    <li className="trainer-result__question-card">
      <Link
        to={`/questions/${question.slug}`}
        className="trainer-result__question-image-link"
      >
        {question.imageSrc ? (
          <img
            className="trainer-result__question-image"
            src={question.imageSrc}
            alt=""
          />
        ) : (
          <div className="trainer-result__question-placeholder">
            <span>YeaHub</span>
          </div>
        )}
      </Link>

      <div className="trainer-result__question-content">
        <Link
          to={`/questions/${question.slug}`}
          className="trainer-result__question-title"
        >
          {question.title}
        </Link>

        <span
          className={`trainer-result__question-status trainer-result__question-status--${status.toLowerCase()}`}
        >
          <img
            className="trainer-result__status-icon"
            src={statusIcon}
            alt=""
          />

          {getStatusLabel(status)}
        </span>
      </div>
    </li>
  );
};
