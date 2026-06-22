import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useGetPublicCollectionsQuery } from "@/entities/collection/api/collectionsApi";
import type {
  CollectionAccess,
  CollectionFilters,
} from "@/features/collection-filters/model/collectionFilters";
import { updateCollectionSearchParams } from "@/shared/utils/updateCollectionSearchParams";
import { useDebounce } from "@/shared/hooks/useDebounce";

const LIMIT = 10;

const getNumberArrayFromParams = (value: string): number[] => {
  if (!value) return [];

  return value.split(",").map(Number).filter(Boolean);
};

const getAccessFromParams = (value: string | null): CollectionAccess => {
  if (value === "free" || value === "paid") return value;

  return "all";
};

export const useCollectionsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const currentPage = Number(searchParams.get("page") || 1);

  const search = searchParams.get("search") || "";
  const specializationsParam = searchParams.get("specializations") || "";
  const access = getAccessFromParams(searchParams.get("access"));

  const filters: CollectionFilters = useMemo(
    () => ({
      search,
      specializationIds: getNumberArrayFromParams(specializationsParam),
      access,
    }),
    [search, specializationsParam, access],
  );

  const debouncedSearch = useDebounce(search, 400);

  const queryFilters: CollectionFilters = useMemo(
    () => ({
      search: debouncedSearch,
      specializationIds: getNumberArrayFromParams(specializationsParam),
      access,
    }),
    [debouncedSearch, specializationsParam, access],
  );

  const {
    data: collectionsData,
    isLoading,
    isError,
  } = useGetPublicCollectionsQuery({
    page: currentPage,
    limit: LIMIT,
    filters: queryFilters,
  });

  const changeFilters = <K extends keyof CollectionFilters>(
    key: K,
    value: CollectionFilters[K],
  ) => {
    const nextFilters = {
      ...filters,
      [key]: value,
    };

    setSearchParams(
      updateCollectionSearchParams({
        filters: nextFilters,
        page: 1,
      }),
    );
  };

  const setCurrentPage = (page: number) => {
    setSearchParams(
      updateCollectionSearchParams({
        filters,
        page,
      }),
    );
  };

  const totalPages = collectionsData
    ? Math.ceil(collectionsData.total / collectionsData.limit)
    : 1;

  return {
    collectionsData: collectionsData ?? null,
    currentPage,
    setCurrentPage,
    isLoading,
    errorMessage: isError ? "Не удалось загрузить коллекции" : "",
    totalPages,
    filters,
    changeFilters,
    isFiltersOpen,
    setIsFiltersOpen,
  };
};
