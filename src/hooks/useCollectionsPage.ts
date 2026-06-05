import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getPublicCollections } from "@/api/collectionsApi";

import type { CollectionsResponse } from "@/types/collection";
import type {
  CollectionAccess,
  CollectionFilters,
} from "@/types/collectionFilters";

import { updateCollectionSearchParams } from "@/utils/updateCollectionSearchParams";
import { useDebounce } from "./useDebounce";

const LIMIT = 10;

const getNumberArrayFromParams = (value: string): number[] => {
  if (!value) return [];

  return value.split(",").map(Number).filter(Boolean);
};

const getAccessFromParams = (value: string | null): CollectionAccess => {
  if (value === "free" || value === "paid") {
    return value;
  }

  return "all";
};

export const useCollectionsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [collectionsData, setCollectionsData] =
    useState<CollectionsResponse | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  const changeFilters = useCallback(
    <K extends keyof CollectionFilters>(
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
    },
    [filters, setSearchParams],
  );

  const setCurrentPage = (page: number) => {
    setSearchParams(
      updateCollectionSearchParams({
        filters,
        page,
      }),
    );
  };

  useEffect(() => {
    const loadCollections = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const data = await getPublicCollections({
          page: currentPage,
          limit: LIMIT,
          filters: {
            search: debouncedSearch,
            specializationIds: getNumberArrayFromParams(specializationsParam),
            access,
          },
        });

        setCollectionsData(data);
      } catch (error) {
        console.error(error);
        setErrorMessage("Не удалось загрузить коллекции");
      } finally {
        setIsLoading(false);
      }
    };
    loadCollections();
  }, [currentPage, debouncedSearch, specializationsParam, access]);

  const totalPages = collectionsData
    ? Math.ceil(collectionsData.total / collectionsData.limit)
    : 1;

  return {
    collectionsData,
    currentPage,
    setCurrentPage,
    isLoading,
    errorMessage,
    totalPages,
    filters,
    changeFilters,
    isFiltersOpen,
    setIsFiltersOpen,
  };
};
