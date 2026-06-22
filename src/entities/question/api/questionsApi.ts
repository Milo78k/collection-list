import { baseApi } from "@/shared/api/baseApi";

import type { Question, QuestionResponse } from "@/entities/question";
import type { QuestionFilters } from "@/features/question-filters/model/questionFilters";

type GetPublicQuestionsParams = {
  page: number;
  limit: number;
  filters?: QuestionFilters;
  collectionId?: number;
};

const buildQuestionsParams = ({
  page,
  limit,
  filters,
  collectionId,
}: GetPublicQuestionsParams) => {
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

  if (filters?.status && filters.status !== "Все") {
    params.set("status", filters.status);
  }

  return params.toString();
};

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<
      QuestionResponse,
      GetPublicQuestionsParams
    >({
      query: (params) =>
        `/questions/public-questions?${buildQuestionsParams(params)}`,
      providesTags: ["Question"],
    }),

    getQuestionBySlug: builder.query<Question, string>({
      query: (slug) => `/questions/by-slug/${slug}`,
      providesTags: (_result, _error, slug) => [{ type: "Question", id: slug }],
    }),

    getQuestionById: builder.query<Question, number>({
      query: (id) => `/questions/public-questions/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Question", id }],
    }),
  }),
});

export const {
  useGetPublicQuestionsQuery,
  useGetQuestionBySlugQuery,
  useLazyGetQuestionBySlugQuery,
  useGetQuestionByIdQuery,
  useLazyGetQuestionByIdQuery,
} = questionsApi;
