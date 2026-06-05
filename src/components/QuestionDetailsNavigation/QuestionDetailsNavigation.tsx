import { useNavigate } from "react-router-dom";
import { getQuestionById } from "@/api/questionsApi";
import arrowLeft from "@/assets/icons/Vector-left.svg";
import arrowRight from "@/assets/icons/Vector-right.svg";

type QuestionDetailsNavigationProps = {
  currentQuestionId: number;
};

export const QuestionDetailsNavigation = ({
  currentQuestionId,
}: QuestionDetailsNavigationProps) => {
  const navigate = useNavigate();

  const goToQuestionById = async (id: number) => {
    if (id < 1) return;
    try {
      const question = await getQuestionById(id);
      navigate(`/questions/${question.slug}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="question-details__navigation">
      <button
        type="button"
        className="question-details__nav-button"
        disabled={currentQuestionId <= 1}
        onClick={() => goToQuestionById(currentQuestionId - 1)}
      >
        <img src={arrowLeft} alt="Previous" />
        <span>Предыдущий</span>
      </button>

      <button
        type="button"
        className="question-details__nav-button"
        onClick={() => goToQuestionById(currentQuestionId + 1)}
      >
        <span>Следующий</span>
        <img src={arrowRight} alt="Next" />
      </button>
    </div>
  );
};
