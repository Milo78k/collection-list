import type { ApiListResponse } from "@/shared/types/api";
import type { Specialization } from "../model/specialization";
import { baseApi } from "@/shared/api/baseApi";

export const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<ApiListResponse<Specialization>, void>({
      query: () => "/specializations",
      providesTags: ["Specialization"],
    }),
  }),
});
export const { useGetSpecializationsQuery } = specializationApi;
