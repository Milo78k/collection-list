import "./CollectionsPage.scss";
import { useCollectionsPage } from "../model/useCollectionsPage";
import { CollectionsSidebar } from "@/widgets/collections-sidebar/ui/CollectionsSidebar";
import { CollectionsContent } from "@/widgets/collections-content/ui/CollectionsContent";

export const CollectionsPage = () => {
  const {
    collectionsData,
    currentPage,
    setCurrentPage,
    isLoading,
    errorMessage,
    totalPages,
    filters,
    changeFilters,
    isFiltersOpen,
    setIsFiltersOpen,
  } = useCollectionsPage();

  return (
    <section className="collections-page">
      <div className="collections-page__container">
        <CollectionsContent
          collectionsData={collectionsData}
          currentPage={currentPage}
          totalPages={totalPages}
          isLoading={isLoading}
          errorMessage={errorMessage}
          onPageChange={setCurrentPage}
          onOpenFilters={() => setIsFiltersOpen(true)}
        />
        <CollectionsSidebar
          isOpen={isFiltersOpen}
          filters={filters}
          onChange={changeFilters}
          onClose={() => setIsFiltersOpen(false)}
        />
      </div>
    </section>
  );
};
