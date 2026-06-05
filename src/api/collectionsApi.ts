import type { CollectionsResponse, Collection } from "@/types/collection";
import type { CollectionFilters } from "@/types/collectionFilters";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

type GetPublicCollectionsParams = {
  page: number;
  limit: number;
  filters?: CollectionFilters;
};

export const getPublicCollections = async ({
  page,
  limit,
  filters,
}: GetPublicCollectionsParams): Promise<CollectionsResponse> => {
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

  const response = await fetch(`${BASE_URL}/collections/public?${params}`);

  if (!response.ok) {
    throw new Error(
      `Ошибка ${response.status}: не удалось загрузить коллекции`,
    );
  }

  return response.json();
};

export const getPublicCollectionById = async (
  id: number,
): Promise<Collection> => {
  const response = await fetch(`${BASE_URL}/collections/${id}/public`);

  if (!response.ok) {
    throw new Error(
      `Ошибка ${response.status}: не удалось загрузить коллекцию`,
    );
  }

  return response.json();
};
