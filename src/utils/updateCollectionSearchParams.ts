import type { CollectionFilters } from "@/types/collectionFilters";

type UpdateCollectionSearchParamsArgs = {
  filters: CollectionFilters;
  page: number;
};

export const updateCollectionSearchParams = ({
  filters,
  page,
}: UpdateCollectionSearchParamsArgs) => {
  const params = new URLSearchParams();

  params.set("page", String(page));

  if (filters.search) {
    params.set("search", filters.search);
  }

  if (filters.specializationIds.length) {
    params.set("specializations", filters.specializationIds.join(","));
  }

  if (filters.access !== "all") {
    params.set("access", filters.access);
  }

  return params;
};
