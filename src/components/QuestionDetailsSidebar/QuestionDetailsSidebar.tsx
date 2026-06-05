import type { Question } from "@/types/question";
import "./QuestionDetailsSidebar.scss";

type QuestionDetailsSidebarProps = {
  question: Question;
};

export const QuestionDetailsSidebar = ({
  question,
}: QuestionDetailsSidebarProps) => {
  return (
    <div className="question-details-sidebar">
      <div className="question-details-sidebar__card">
        <div className="question-details-sidebar__section">
          <p className="question-details-sidebar__label">Уровень:</p>

          <div className="question-details-sidebar__badges">
            <span className="question-details-sidebar__badge">
              Сложность: <b>{question.complexity}</b>
            </span>

            <span className="question-details-sidebar__badge">
              Рейтинг: <b>{question.rate}</b>
            </span>
          </div>
        </div>

        <div className="question-details-sidebar__section">
          <p className="question-details-sidebar__label">Навыки:</p>

          <div className="question-details-sidebar__tags">
            {question.questionSkills.map((skill) => (
              <span key={skill.id} className="question-details-sidebar__tag">
                {skill.title}
              </span>
            ))}
          </div>
        </div>

        <div className="question-details-sidebar__section">
          <p className="question-details-sidebar__label">Ключевые слова:</p>

          <div className="question-details-sidebar__keywords">
            {question.keywords.map((keyword) => (
              <span key={keyword}>#{keyword}</span>
            ))}
          </div>
        </div>

        <div className="question-details-sidebar__section">
          <p className="question-details-sidebar__author">
            Автор: <span>{question.createdBy?.username ?? "Неизвестно"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
