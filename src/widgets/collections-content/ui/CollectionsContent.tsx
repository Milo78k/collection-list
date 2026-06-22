import filterIcon from "@/shared/assets/icons/Filter-button.svg";

import { Pagination } from "@/shared/ui/Pagination/Pagination";
import type { CollectionsResponse } from "@/entities/collection/model/collection";
import { Loader } from "@/shared/ui/Loader/Loader";
import { CollectionList } from "@/widgets/collection-list";

type CollectionsContentProps = {
  collectionsData: CollectionsResponse | null;
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  errorMessage: string;
  onPageChange: (page: number) => void;
  onOpenFilters: () => void;
};

export const CollectionsContent = ({
  collectionsData,
  currentPage,
  totalPages,
  isLoading,
  errorMessage,
  onPageChange,
  onOpenFilters,
}: CollectionsContentProps) => {
  return (
    <div className="collections-page__content">
      <div className="collections-page__header">
        <h1 className="collections-page__title">Коллекции</h1>

        <button
          type="button"
          className="collections-page__filter-button"
          onClick={onOpenFilters}
        >
          <img src={filterIcon} alt="Фильтры" />
        </button>
      </div>

      {isLoading && <Loader text="Загрузка коллекций..." />}

      {errorMessage && (
        <p className="collections-page__error">{errorMessage}</p>
      )}

      {!isLoading && !errorMessage && collectionsData && (
        <>
          <CollectionList collections={collectionsData.data} />

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
