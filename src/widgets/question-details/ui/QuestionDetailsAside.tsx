import { QuestionDetailsSidebar } from "@/widgets/question-details/ui/QuestionDetailsSidebar";
import { MentorCard } from "@/entities/mentor/ui/MentorCard";
import closeIcon from "@/shared/assets/icons/Close-button.svg";
import type { Question } from "@/entities/question";

type QuestionDetailsAsideProps = {
  question: Question;
  isOpen: boolean;
  onClose: () => void;
};

export const QuestionDetailsAside = ({
  question,
  isOpen,
  onClose,
}: QuestionDetailsAsideProps) => {
  return (
    <div className="question-details__aside-column">
      <aside
        className={`question-details__sidebar ${
          isOpen ? "question-details__sidebar--open" : ""
        }`}
      >
        <button
          type="button"
          className="question-details__sidebar-close"
          onClick={onClose}
        >
          <img src={closeIcon} alt="close icon" />
        </button>

        <QuestionDetailsSidebar question={question} />
      </aside>

      <div className="question-details__mentor-desktop">
        <MentorCard />
      </div>
    </div>
  );
};
