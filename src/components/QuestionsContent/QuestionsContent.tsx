import filterIcon from "@/assets/icons/Icon.svg";
import { Loader } from "@/components/Loader/Loader";
import { Pagination } from "@/components/Pagination/Pagination";
import { QuestionList } from "@/components/QuestionList/QuestionList";
import type { QuestionResponse } from "@/types/question";

type QuestionsContentProps = {
  questionsData: QuestionResponse | null;
  isLoading: boolean;
  errorMessage: string | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onOpenFilters: () => void;
};

export const QuestionsContent = ({
  questionsData,
  isLoading,
  errorMessage,
  currentPage,
  totalPages,
  onPageChange,
  onOpenFilters,
}: QuestionsContentProps) => {
  return (
    <div className="questions-page__content">
      <div className="questions-page__header">
        <h1 className="questions-page__title">Вопросы React, JavaScript</h1>

        <button
          type="button"
          className="questions-page__filter-button"
          onClick={onOpenFilters}
        >
          <img src={filterIcon} alt="Filter icon" />
        </button>
      </div>

      {isLoading && <Loader />}

      {errorMessage && <p>{errorMessage}</p>}

      {!isLoading && !errorMessage && questionsData && (
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
