import { useState } from "react";

import type {
  CollectionAccess,
  CollectionFilters as CollectionFiltersType,
} from "@/features/collection-filters/model/collectionFilters";

import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationsApi";

import { SearchInput } from "@/shared/ui/SearchInput";
import { FilterGroup } from "@/features/question-filters/ui/FilterGroup";
import { FilterChip } from "@/features/question-filters/ui/FilterChip";

import "./CollectionFilters.scss";

type CollectionFiltersProps = {
  filters: CollectionFiltersType;
  onChange: <K extends keyof CollectionFiltersType>(
    key: K,
    value: CollectionFiltersType[K],
  ) => void;
};

const toggleArrayValue = <T,>(array: T[], value: T) => {
  return array.includes(value)
    ? array.filter((item) => item !== value)
    : [...array, value];
};

const accessOptions: {
  label: string;
  value: CollectionAccess;
}[] = [
  {
    label: "Все",
    value: "all",
  },
  {
    label: "Для всех",
    value: "free",
  },
  {
    label: "Для участников",
    value: "paid",
  },
];

export const CollectionFilters = ({
  filters,
  onChange,
}: CollectionFiltersProps) => {
  const [showAllSpecializations, setShowAllSpecializations] = useState(false);

  const {
    data: specializationsData,
    isLoading,
    isError,
  } = useGetSpecializationsQuery();

  const specializations = specializationsData?.data ?? [];

  const visibleSpecializations = showAllSpecializations
    ? specializations
    : specializations.slice(0, 5);

  return (
    <div className="collection-filters">
      <SearchInput
        value={filters.search}
        onChange={(value) => onChange("search", value)}
      />

      <FilterGroup
        title="Специализация"
        showMoreButton={specializations.length > 5}
        isExpanded={showAllSpecializations}
        onToggleShowMore={() => setShowAllSpecializations((prev) => !prev)}
      >
        {isLoading && (
          <p className="collection-filters__message">Загрузка...</p>
        )}

        {isError && (
          <p className="collection-filters__message">
            Не удалось загрузить специализации
          </p>
        )}

        {!isLoading &&
          !isError &&
          visibleSpecializations.map((item) => (
            <FilterChip
              key={item.id}
              isActive={filters.specializationIds.includes(item.id)}
              onClick={() =>
                onChange(
                  "specializationIds",
                  toggleArrayValue(filters.specializationIds, item.id),
                )
              }
            >
              {item.title}
            </FilterChip>
          ))}
      </FilterGroup>

      <FilterGroup title="Доступ">
        {accessOptions.map((item) => (
          <FilterChip
            key={item.value}
            isActive={filters.access === item.value}
            onClick={() => onChange("access", item.value)}
          >
            {item.label}
          </FilterChip>
        ))}
      </FilterGroup>
    </div>
  );
};
