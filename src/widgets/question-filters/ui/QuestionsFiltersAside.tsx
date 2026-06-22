import { SidebarFilters } from "@/features/question-filters";
import closeIcon from "@/shared/assets/icons/Close-button.svg";

import type { QuestionFilters } from "@/features/question-filters/model/questionFilters";

type QuestionsFiltersAsideProps = {
  isOpen: boolean;
  filters: QuestionFilters;
  onClose: () => void;
  onChange: <K extends keyof QuestionFilters>(
    key: K,
    value: QuestionFilters[K],
  ) => void;
};

export const QuestionsFiltersAside = ({
  isOpen,
  filters,
  onClose,
  onChange,
}: QuestionsFiltersAsideProps) => {
  return (
    <aside
      className={`questions-page__sidebar ${
        isOpen ? "questions-page__sidebar--open" : ""
      }`}
    >
      <button
        type="button"
        className="questions-page__sidebar-close"
        onClick={onClose}
      >
        <img src={closeIcon} alt="Close icon" />
      </button>

      <SidebarFilters filters={filters} onChange={onChange} />
    </aside>
  );
};
