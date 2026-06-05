import { QuestionsContent } from "@/components/QuestionsContent/QuestionsContent";
import { QuestionsFiltersAside } from "@/components/QuestionsFiltersAside/QuestionsFiltersAside";
import { useQuestionsPage } from "@/hooks/useQuestionsPage";
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
