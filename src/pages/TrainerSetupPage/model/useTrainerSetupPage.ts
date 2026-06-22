import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import type { TrainerSetupFormValues } from "@/features/trainer-setup-form";

import { setActiveQuiz, useLazyStartMockQuizQuery } from "@/entities/quiz";
import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationsApi";
import { useGetSkillsQuery } from "@/entities/skill/api/skillsApi";

import { useAppDispatch } from "@/shared/lib/store/hooks";

const getQuizErrorMessage = (error: unknown) => {
  const fetchError = error as FetchBaseQueryError;

  if (fetchError.status === 404) {
    return "По выбранным настройкам вопросы не найдены. Попробуйте выбрать другую категорию или сложность.";
  }

  if (fetchError.status === 500) {
    return "Не удалось создать квиз. Попробуйте изменить параметры.";
  }

  return "Произошла ошибка при создании квиза.";
};

export const useTrainerSetupPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [quizErrorMessage, setQuizErrorMessage] = useState("");

  const [startMockQuiz, { isFetching: isQuizCreating }] =
    useLazyStartMockQuizQuery();

  const { data: specializationsData, isLoading: isSpecializationsLoading } =
    useGetSpecializationsQuery();

  const { data: skillsData, isLoading: isSkillsLoading } = useGetSkillsQuery();

  const specializations = specializationsData?.data ?? [];
  const skills = skillsData?.data ?? [];

  const isInitialLoading = isSpecializationsLoading || isSkillsLoading;

  const handleSubmit = async (values: TrainerSetupFormValues) => {
    if (!values.specialization) return;

    try {
      setQuizErrorMessage("");

      const quiz = await startMockQuiz({
        specialization: values.specialization,
        collection: values.collection ?? undefined,
        complexity: values.complexity,
        skills: values.skills,
        limit: values.limit,
      }).unwrap();

      dispatch(setActiveQuiz(quiz));
      navigate("/trainer/quiz");
    } catch (error) {
      console.error("Ошибка создания квиза:", error);
      setQuizErrorMessage(getQuizErrorMessage(error));
    }
  };

  return {
    specializations,
    skills,
    isInitialLoading,
    isQuizCreating,
    quizErrorMessage,
    handleSubmit,
  };
};
