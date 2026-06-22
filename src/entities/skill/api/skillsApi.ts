import type { ApiListResponse } from "@/shared/types/api";
import type { Skill } from "../model/skill";
import { baseApi } from "@/shared/api/baseApi";

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<ApiListResponse<Skill>, void>({
      query: () => "/skills",
      providesTags: ["Skill"],
    }),
  }),
});
export const { useGetSkillsQuery } = skillsApi;
