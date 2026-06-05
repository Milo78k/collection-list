import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPublicQuestions } from "@/api/questionsApi";
import type { QuestionResponse } from "@/types/question";
import type { QuestionFilters } from "@/types/questionFilters";
import { updateSearchParams } from "@/utils/updateSearchParams";
import { useDebounce } from "./useDebounce";

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

  const [questionsData, setQuestionsData] = useState<QuestionResponse | null>(
    null,
  );
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const data = await getPublicQuestions({
          page: currentPage,
          limit: LIMIT,
          filters: {
            search: debouncedSearch,
            specializationSlug,
            skills: getNumberArrayFromParams(skillsParam),
            complexity: getStringArrayFromParams(complexityParam),
            rate: getNumberArrayFromParams(rateParam),
            status,
          },
        });

        setQuestionsData(data);
      } catch (error) {
        console.error(error);
        setErrorMessage("Не удалось загрузить вопросы");
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, [
    currentPage,
    debouncedSearch,
    specializationSlug,
    skillsParam,
    complexityParam,
    rateParam,
    status,
  ]);

  const totalPages = questionsData
    ? Math.ceil(questionsData.total / questionsData.limit)
    : 1;

  return {
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
  };
};
