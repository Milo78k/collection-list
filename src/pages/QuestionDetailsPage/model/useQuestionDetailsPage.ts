import { useState } from "react";
import { useParams } from "react-router-dom";

import { useGetQuestionBySlugQuery } from "@/entities/question/api/questionsApi";

export const useQuestionDetailsPage = () => {
  const { slug } = useParams();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionBySlugQuery(slug ?? "", {
    skip: !slug,
  });

  return {
    question: question ?? null,
    isLoading,
    errorMessage: isError ? "Не удалось загрузить вопрос" : "",
    isSidebarOpen,
    setIsSidebarOpen,
  };
};
