import closeIcon from "@/assets/icons/Close-button.svg";
import { CollectionFilters } from "@/components/CollectionFilters/CollectionFilters";
import type { CollectionFilters as CollectionFiltersType } from "@/types/collectionFilters";

type CollectionsSidebarProps = {
  isOpen: boolean;
  filters: CollectionFiltersType;
  onChange: <K extends keyof CollectionFiltersType>(
    key: K,
    value: CollectionFiltersType[K],
  ) => void;
  onClose: () => void;
};

export const CollectionsSidebar = ({
  isOpen,
  filters,
  onChange,
  onClose,
}: CollectionsSidebarProps) => {
  return (
    <aside
      className={`collections-page__sidebar ${
        isOpen ? "collections-page__sidebar--open" : ""
      }`}
    >
      <button
        type="button"
        className="collections-page__sidebar-close"
        onClick={onClose}
      >
        <img src={closeIcon} alt="Закрыть" />
      </button>
      <CollectionFilters filters={filters} onChange={onChange} />
    </aside>
  );
};
