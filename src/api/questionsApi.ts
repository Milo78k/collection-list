import type { Question, QuestionResponse } from "@/types/question";
import type { QuestionFilters } from "@/types/questionFilters";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

type GetPublicQuestionsParams = {
  page: number;
  limit: number;
  filters?: QuestionFilters;
  collectionId?: number;
};

export const getPublicQuestions = async ({
  page,
  limit,
  filters,
  collectionId,
}: GetPublicQuestionsParams): Promise<QuestionResponse> => {
  const params = new URLSearchParams();

  params.set("page", String(page));
  params.set("limit", String(limit));

  if (collectionId) {
    params.set("collection", String(collectionId));
  }

  if (filters?.search) {
    params.set("titleOrDescription", filters.search);
  }

  if (filters?.specializationSlug) {
    params.set("specializationSlug", filters.specializationSlug);
  }

  if (filters?.skills.length) {
    params.set("skills", filters.skills.join(","));
  }

  if (filters?.complexity.length) {
    params.set("complexity", filters.complexity.join(","));
  }

  if (filters?.rate.length) {
    params.set("rate", filters.rate.join(","));
  }

  const response = await fetch(
    `${BASE_URL}/questions/public-questions?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`Ошибка ${response.status}: не удалось загрузить вопросы`);
  }

  return response.json();
};

export const getQuestionBySlug = async (slug: string): Promise<Question> => {
  const response = await fetch(`${BASE_URL}/questions/by-slug/${slug}`);

  if (!response.ok) {
    throw new Error(`Ошибка ${response.status}: не удалось загрузить вопрос`);
  }

  return response.json();
};

export const getQuestionById = async (id: number): Promise<Question> => {
  const response = await fetch(`${BASE_URL}/questions/public-questions/${id}`);

  if (!response.ok) {
    throw new Error(`Ошибка ${response.status}: не удалось загрузить вопрос`);
  }

  return response.json();
};
