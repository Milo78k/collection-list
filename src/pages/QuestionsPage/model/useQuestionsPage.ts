import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useGetPublicQuestionsQuery } from "@/entities/question/api/questionsApi";

import type { QuestionFilters } from "@/features/question-filters/model/questionFilters";

import { updateSearchParams } from "@/shared/utils/updateSearchParams";
import { useDebounce } from "@/shared/hooks/useDebounce";

const LIMIT = 10;

const getNumberArrayFromParams = (value: string): number[] => {
  if (!value) return [];

  return value.split(",").map(Number).filter(Boolean);
};

const getStringArrayFromParams = (value: string): string[] => {
  if (!value) return [];

  return value.split(",").filter(Boolean);
};

export const useQuestionsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const currentPage = Number(searchParams.get("page") || 1);

  const search = searchParams.get("search") || "";
  const specializationSlug = searchParams.get("specializationSlug") || "";
  const skillsParam = searchParams.get("skills") || "";
  const complexityParam = searchParams.get("complexity") || "";
  const rateParam = searchParams.get("rate") || "";
  const status = searchParams.get("status") || "Все";

  const filters: QuestionFilters = useMemo(
    () => ({
      search,
      specializationSlug,
      skills: getNumberArrayFromParams(skillsParam),
      complexity: getStringArrayFromParams(complexityParam),
      rate: getNumberArrayFromParams(rateParam),
      status,
    }),
    [
      search,
      specializationSlug,
      skillsParam,
      complexityParam,
      rateParam,
      status,
    ],
  );

  const debouncedSearch = useDebounce(search, 400);

  const queryFilters: QuestionFilters = useMemo(
    () => ({
      search: debouncedSearch,
      specializationSlug,
      skills: getNumberArrayFromParams(skillsParam),
      complexity: getStringArrayFromParams(complexityParam),
      rate: getNumberArrayFromParams(rateParam),
      status,
    }),
    [
      debouncedSearch,
      specializationSlug,
      skillsParam,
      complexityParam,
      rateParam,
      status,
    ],
  );

  const {
    data: questionsData,
    isLoading,
    isError,
  } = useGetPublicQuestionsQuery({
    page: currentPage,
    limit: LIMIT,
    filters: queryFilters,
  });

  const changeFilters = <K extends keyof QuestionFilters>(
    key: K,
    value: QuestionFilters[K],
  ) => {
    setSearchParams(
      updateSearchParams({
        filters: {
          ...filters,
          [key]: value,
        },
        page: 1,
      }),
    );
  };

  const setCurrentPage = (page: number) => {
    setSearchParams(
      updateSearchParams({
        filters,
        page,
      }),
    );
  };

  const totalPages = questionsData
    ? Math.ceil(questionsData.total / questionsData.limit)
    : 1;

  return {
    questionsData: questionsData ?? null,
    isFiltersOpen,
    setIsFiltersOpen,
    currentPage,
    setCurrentPage,
    isLoading,
    errorMessage: isError ? "Не удалось загрузить вопросы" : "",
    filters,
    changeFilters,
    totalPages,
  };
};
