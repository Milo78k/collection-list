import { useNavigate } from "react-router-dom";

import { useLazyGetQuestionByIdQuery } from "@/entities/question/api/questionsApi";

import arrowLeft from "@/shared/assets/icons/Vector-left.svg";
import arrowRight from "@/shared/assets/icons/Vector-right.svg";

type QuestionDetailsNavigationProps = {
  currentQuestionId: number;
};

export const QuestionDetailsNavigation = ({
  currentQuestionId,
}: QuestionDetailsNavigationProps) => {
  const navigate = useNavigate();

  const [getQuestionById, { isFetching }] = useLazyGetQuestionByIdQuery();

  const goToQuestionById = async (id: number) => {
    if (id < 1) return;

    try {
      const question = await getQuestionById(id).unwrap();
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
        disabled={currentQuestionId <= 1 || isFetching}
        onClick={() => goToQuestionById(currentQuestionId - 1)}
      >
        <img src={arrowLeft} alt="Previous" />
        <span>Предыдущий</span>
      </button>

      <button
        type="button"
        className="question-details__nav-button"
        disabled={isFetching}
        onClick={() => goToQuestionById(currentQuestionId + 1)}
      >
        <span>Следующий</span>
        <img src={arrowRight} alt="Next" />
      </button>
    </div>
  );
};
