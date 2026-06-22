import { baseApi } from "@/shared/api/baseApi";

import type {
  GetNewMockQuizResponse,
  StartMockQuizParams,
} from "../model/quiz";

const buildStartMockQuizParams = ({
  specialization,
  complexity,
  collection,
  limit,
  skills,
}: StartMockQuizParams) => {
  const params = new URLSearchParams();

  params.set("specialization", String(specialization));

  if (skills?.length) {
    skills.forEach((skillId) => {
      params.append("skills", skillId);
    });
  }

  if (complexity?.length) {
    params.set("complexity", complexity.join(","));
  }

  if (collection) {
    params.set("collection", String(collection));
  }

  if (limit) {
    params.set("limit", String(limit));
  }

  return params.toString();
};

export const quizApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    startMockQuiz: builder.query<GetNewMockQuizResponse, StartMockQuizParams>({
      query: (params) =>
        `/interview-preparation/quizzes/mock/new?${buildStartMockQuizParams(params)}`,
      providesTags: ["Quiz"],
    }),
  }),
});

export const { useLazyStartMockQuizQuery } = quizApi;
