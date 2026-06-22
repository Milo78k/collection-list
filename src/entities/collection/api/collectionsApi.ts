import { baseApi } from "@/shared/api/baseApi";
import type { Collection, CollectionsResponse } from "../model/collection";
import type { CollectionFilters } from "@/features/collection-filters/model/collectionFilters";

type GetPublicCollectionsParams = {
  page: number;
  limit: number;
  filters?: CollectionFilters;
};

const buildCollectionsParams = ({
  page,
  limit,
  filters,
}: GetPublicCollectionsParams) => {
  const params = new URLSearchParams();

  params.set("page", String(page));
  params.set("limit", String(limit));

  if (filters?.search) {
    params.set("titleOrDescriptionSearch", filters.search);
  }

  if (filters?.specializationIds.length) {
    params.set("specializations", filters.specializationIds.join(","));
  }

  if (filters?.access === "free") {
    params.set("isFree", "true");
  }

  if (filters?.access === "paid") {
    params.set("isFree", "false");
  }

  return params.toString();
};

export const collectionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicCollections: builder.query<
      CollectionsResponse,
      GetPublicCollectionsParams
    >({
      query: (params) =>
        `/collections/public?${buildCollectionsParams(params)}`,
      providesTags: ["Collection"],
    }),

    getPublicCollectionById: builder.query<Collection, number>({
      query: (id) => `/collections/${id}/public`,
      providesTags: (_result, _error, id) => [{ type: "Collection", id }],
    }),
  }),
});

export const { useGetPublicCollectionsQuery, useGetPublicCollectionByIdQuery } =
  collectionsApi;
