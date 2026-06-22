import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  addQuizAnswer,
  goToNextQuestion,
  goToPreviousQuestion,
  type QuizAnswerStatus,
} from "@/entities/quiz";

import { useAppDispatch, useAppSelector } from "@/shared/lib/store/hooks";

export const useTrainerQuiz = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [visibleAnswerQuestionId, setVisibleAnswerQuestionId] = useState<
    number | null
  >(null);

  const activeQuiz = useAppSelector((state) => state.quiz.activeQuiz);
  const currentQuestionIndex = useAppSelector(
    (state) => state.quiz.currentQuestionIndex,
  );
  const answers = useAppSelector((state) => state.quiz.answers);

  const questions = activeQuiz?.questions ?? [];
  const currentQuestion = questions[currentQuestionIndex] ?? null;

  const currentQuestionNumber = currentQuestionIndex + 1;
  const totalQuestions = questions.length;

  const progressPercent =
    totalQuestions > 0
      ? Math.round((currentQuestionNumber / totalQuestions) * 100)
      : 0;

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  const currentAnswer = currentQuestion
    ? answers.find((answer) => answer.questionId === currentQuestion.id)
    : undefined;

  const answerContent = currentQuestion
    ? currentQuestion.shortAnswer || currentQuestion.longAnswer || ""
    : "";

  const isAnswerVisible =
    currentQuestion !== null && visibleAnswerQuestionId === currentQuestion.id;

  const handleToggleAnswer = () => {
    if (!currentQuestion) return;

    setVisibleAnswerQuestionId((prevId) =>
      prevId === currentQuestion.id ? null : currentQuestion.id,
    );
  };

  const handlePreviousQuestion = () => {
    dispatch(goToPreviousQuestion());
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      navigate("/trainer/result");
      return;
    }

    dispatch(goToNextQuestion());
  };

  const handleFinishQuiz = () => {
    navigate("/trainer/result");
  };

  const handleAnswer = (answer: QuizAnswerStatus) => {
    if (!currentQuestion) return;

    dispatch(
      addQuizAnswer({
        questionId: currentQuestion.id,
        questionTitle: currentQuestion.title,
        answer,
      }),
    );
  };

  return {
    activeQuiz,
    currentQuestion,
    currentQuestionNumber,
    totalQuestions,
    progressPercent,
    isFirstQuestion,
    isLastQuestion,
    currentAnswerStatus: currentAnswer?.answer ?? null,
    answerContent,
    isAnswerVisible,
    handleToggleAnswer,
    handlePreviousQuestion,
    handleNextQuestion,
    handleFinishQuiz,
    handleAnswer,
  };
};
