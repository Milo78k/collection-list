import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPublicCollectionById } from "@/api/collectionsApi";
import { getPublicQuestions } from "@/api/questionsApi";

import type { Collection } from "@/types/collection";
import type { QuestionResponse } from "@/types/question";

const LIMIT = 10;

export const useCollectionDetailsPage = () => {
  const { collectionId } = useParams();

  const [collection, setCollection] = useState<Collection | null>(null);
  const [questionsData, setQuestionsData] = useState<QuestionResponse | null>(
    null,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isCollectionLoading, setIsCollectionLoading] = useState(false);
  const [isQuestionsLoading, setIsQuestionsLoading] = useState(false);
  const [collectionErrorMessage, setCollectionErrorMessage] = useState("");
  const [questionsErrorMessage, setQuestionsErrorMessage] = useState("");

  const numericCollectionId = Number(collectionId);

  useEffect(() => {
    if (!numericCollectionId) return;

    const loadCollection = async () => {
      try {
        setIsCollectionLoading(true);
        setCollectionErrorMessage("");

        const data = await getPublicCollectionById(numericCollectionId);

        setCollection(data);
      } catch (error) {
        console.error(error);
        setCollectionErrorMessage("Не удалось загрузить коллекцию");
      } finally {
        setIsCollectionLoading(false);
      }
    };
    loadCollection();
  }, [numericCollectionId]);

  useEffect(() => {
    if (!numericCollectionId) return;

    const loadQuestions = async () => {
      try {
        setIsQuestionsLoading(true);
        setQuestionsErrorMessage("");

        const data = await getPublicQuestions({
          page: currentPage,
          limit: LIMIT,
          collectionId: numericCollectionId,
        });

        setQuestionsData(data);
      } catch {
        setQuestionsData(null);
        setQuestionsErrorMessage("Вопросы по коллекции не найдены");
      } finally {
        setIsQuestionsLoading(false);
      }
    };

    loadQuestions();
  }, [numericCollectionId, currentPage]);

  const totalPages = questionsData
    ? Math.ceil(questionsData.total / questionsData.limit)
    : 1;

  return {
    collection,
    questionsData,
    currentPage,
    setCurrentPage,
    isCollectionLoading,
    isQuestionsLoading,
    collectionErrorMessage,
    questionsErrorMessage,
    totalPages,
  };
};
