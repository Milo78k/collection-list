import type { QuestionFilters } from "../types/questionFilters";

type UpdateSearchParamsArgs = {
  filters: QuestionFilters;
  page: number;
};

export const updateSearchParams = ({
  filters,
  page,
}: UpdateSearchParamsArgs) => {
  const params = new URLSearchParams();

  params.set("page", String(page));

  if (filters.search) {
    params.set("search", filters.search);
  }

  if (filters.specializationSlug) {
    params.set("specializationSlug", filters.specializationSlug);
  }

  if (filters.skills.length) {
    params.set("skills", filters.skills.join(","));
  }

  if (filters.complexity.length) {
    params.set("complexity", filters.complexity.join(","));
  }

  if (filters.rate.length) {
    params.set("rate", filters.rate.join(","));
  }

  if (filters.status && filters.status !== "Все") {
    params.set("status", filters.status);
  }

  return params;
};
