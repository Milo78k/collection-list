import { QuestionsContent } from "@/widgets/question-content/ui/QuestionsContent";
import { QuestionsFiltersAside } from "@/widgets/question-filters/ui/QuestionsFiltersAside";
import { useQuestionsPage } from "@/pages/QuestionsPage/model/useQuestionsPage";
import "./QuestionsPage.scss";

export const QuestionsPage = () => {
  const {
    questionsData,
    isFiltersOpen,
    setIsFiltersOpen,
    currentPage,
    setCurrentPage,
    isLoading,
    errorMessage,
    filters,
    changeFilters,
    totalPages,
  } = useQuestionsPage();

  return (
    <section className="questions-page">
      <div className="questions-page__container">
        <QuestionsContent
          questionsData={questionsData}
          isLoading={isLoading}
          errorMessage={errorMessage}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          onOpenFilters={() => setIsFiltersOpen(true)}
        />

        <QuestionsFiltersAside
          isOpen={isFiltersOpen}
          filters={filters}
          onClose={() => setIsFiltersOpen(false)}
          onChange={changeFilters}
        />
      </div>
    </section>
  );
};
