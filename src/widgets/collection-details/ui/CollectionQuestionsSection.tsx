import type { QuestionResponse } from "@/entities/question";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Pagination } from "@/shared/ui/Pagination/Pagination";
import { QuestionList } from "@/widgets/question-list";

type CollectionQuestionsSectionProps = {
  hasQuestions: boolean;
  isQuestionsLoading: boolean;
  questionsErrorMessage: string;
  questionsData: QuestionResponse | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const CollectionQuestionsSection = ({
  hasQuestions,
  isQuestionsLoading,
  questionsErrorMessage,
  questionsData,
  currentPage,
  totalPages,
  onPageChange,
}: CollectionQuestionsSectionProps) => {
  return (
    <div className="collection-details__questions">
      <h2 className="collection-details__section-title">Вопросы коллекции</h2>

      {!hasQuestions && (
        <p className="collection-details__empty">
          В коллекции пока нет вопросов
        </p>
      )}

      {hasQuestions && isQuestionsLoading && (
        <Loader text="Загрузка вопросов..." />
      )}

      {hasQuestions && !isQuestionsLoading && questionsErrorMessage && (
        <p className="collection-details__empty">{questionsErrorMessage}</p>
      )}

      {hasQuestions && !isQuestionsLoading && questionsData && (
        <>
          <QuestionList questions={questionsData.data} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
};
