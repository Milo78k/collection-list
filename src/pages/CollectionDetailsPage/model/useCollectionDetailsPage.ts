import { useState } from "react";
import { useParams } from "react-router-dom";

import { useGetPublicCollectionByIdQuery } from "@/entities/collection/api/collectionsApi";
import { useGetPublicQuestionsQuery } from "@/entities/question/api/questionsApi";

const LIMIT = 10;

export const useCollectionDetailsPage = () => {
  const { collectionId } = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  const numericCollectionId = Number(collectionId);

  const {
    data: collectionData,
    isLoading: isCollectionLoading,
    isError: isCollectionError,
  } = useGetPublicCollectionByIdQuery(numericCollectionId, {
    skip: !numericCollectionId,
  });

  const {
    data: questionsData,
    isLoading: isQuestionsLoading,
    isError: isQuestionsError,
  } = useGetPublicQuestionsQuery(
    {
      page: currentPage,
      limit: LIMIT,
      collectionId: numericCollectionId,
    },
    {
      skip: !numericCollectionId,
    },
  );

  const totalPages = questionsData
    ? Math.ceil(questionsData.total / questionsData.limit)
    : 1;

  return {
    collection: collectionData ?? null,
    questionsData: questionsData ?? null,
    currentPage,
    setCurrentPage,
    isCollectionLoading,
    isQuestionsLoading,
    collectionErrorMessage: isCollectionError
      ? "Не удалось загрузить коллекцию"
      : "",
    questionsErrorMessage: isQuestionsError
      ? "Вопросы по коллекции не найдены"
      : "",
    totalPages,
  };
};
