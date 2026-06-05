import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getQuestionBySlug } from "@/api/questionsApi";

import type { Question } from "@/types/question";

export const useQuestionDetailsPage = () => {
  const { slug } = useParams();

  const [question, setQuestion] = useState<Question | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const loadQuestion = async () => {
      try {
        setIsLoading(true);
        const data = await getQuestionBySlug(slug);
        setQuestion(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestion();
  }, [slug]);

  return {
    question,
    isLoading,
    isSidebarOpen,
    setIsSidebarOpen,
  };
};
