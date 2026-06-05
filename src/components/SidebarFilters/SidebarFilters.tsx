import { useState } from "react";
import type { QuestionFilters } from "@/types/questionFilters";
import { useSidebarFiltersData } from "@/hooks/useSidebarFiltersData";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import skillFallbackIcon from "@/assets/icons/Figma.svg";
import { FilterGroup } from "./FilterGroup";
import { FilterChip } from "./FilterChip";
import "./SidebarFilters.scss";

const complexityLevels = ["1–3", "4–6", "7–8", "9–10"];
const ratings = [1, 2, 3, 4, 5];
const statuses = ["Изученные", "Не изученные", "Все"];

type SidebarFiltersProps = {
  filters: QuestionFilters;
  onChange: <K extends keyof QuestionFilters>(
    key: K,
    value: QuestionFilters[K],
  ) => void;
};

const toggleArrayValue = <T,>(array: T[], value: T) => {
  return array.includes(value)
    ? array.filter((item) => item !== value)
    : [...array, value];
};

const isValidImageSrc = (src: string) => {
  return src.startsWith("http") || src.startsWith("/");
};

export const SidebarFilters = ({ filters, onChange }: SidebarFiltersProps) => {
  const { specializations, skills } = useSidebarFiltersData();

  const [showAllSpecializations, setShowAllSpecializations] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const visibleSpecializations = showAllSpecializations
    ? specializations
    : specializations.slice(0, 5);

  const visibleSkills = showAllSkills ? skills : skills.slice(0, 6);

  return (
    <div className="sidebar-filters">
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
        {visibleSpecializations.map((item) => (
          <FilterChip
            key={item.id}
            isActive={filters.specializationSlug === item.slug}
            onClick={() =>
              onChange(
                "specializationSlug",
                filters.specializationSlug === item.slug ? "" : item.slug,
              )
            }
          >
            {item.title}
          </FilterChip>
        ))}
      </FilterGroup>

      <FilterGroup
        title="Навыки"
        showMoreButton={skills.length > 6}
        isExpanded={showAllSkills}
        onToggleShowMore={() => setShowAllSkills((prev) => !prev)}
      >
        {visibleSkills.map((item) => (
          <FilterChip
            key={item.id}
            iconSrc={
              item.imageSrc && isValidImageSrc(item.imageSrc)
                ? item.imageSrc
                : skillFallbackIcon
            }
            isActive={filters.skills.includes(item.id)}
            onClick={() =>
              onChange("skills", toggleArrayValue(filters.skills, item.id))
            }
          >
            {item.title}
          </FilterChip>
        ))}
      </FilterGroup>

      <FilterGroup title="Уровень сложности">
        {complexityLevels.map((item) => (
          <FilterChip
            key={item}
            isActive={filters.complexity.includes(item)}
            onClick={() =>
              onChange("complexity", toggleArrayValue(filters.complexity, item))
            }
          >
            {item}
          </FilterChip>
        ))}
      </FilterGroup>

      <FilterGroup title="Рейтинг">
        {ratings.map((item) => (
          <FilterChip
            key={item}
            isSmall
            isActive={filters.rate.includes(item)}
            onClick={() =>
              onChange("rate", toggleArrayValue(filters.rate, item))
            }
          >
            {item}
          </FilterChip>
        ))}
      </FilterGroup>

      <FilterGroup title="Статус">
        {statuses.map((item) => (
          <FilterChip
            key={item}
            isActive={filters.status === item}
            onClick={() => onChange("status", item)}
          >
            {item}
          </FilterChip>
        ))}
      </FilterGroup>
    </div>
  );
};
