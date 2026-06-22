import { useState } from "react";
import { Navigate } from "react-router-dom";

import { StatisticsPromoModal } from "@/features/statistics-promo-modal";

import { useTrainerResult } from "../model/useTrainerResult";
import { TrainerResultQuestionsList } from "./TrainerResultQuestionsList";
import { TrainerResultStats } from "./TrainerResultStats";

import "./TrainerResult.scss";

export const TrainerResult = () => {
  const [isStatisticsModalOpen, setIsStatisticsModalOpen] = useState(false);

  const {
    activeQuiz,
    questions,
    answers,
    totalQuestions,
    knownCount,
    unknownCount,
    unansweredCount,
    learnedPercent,
    skillProgressItems,
  } = useTrainerResult();

  if (!activeQuiz) {
    return <Navigate to="/trainer" replace />;
  }

  return (
    <>
      <section className="trainer-result">
        <TrainerResultStats
          totalQuestions={totalQuestions}
          knownCount={knownCount}
          unknownCount={unknownCount}
          unansweredCount={unansweredCount}
          learnedPercent={learnedPercent}
          skillProgressItems={skillProgressItems}
          onStatisticsClick={() => setIsStatisticsModalOpen(true)}
        />

        <TrainerResultQuestionsList questions={questions} answers={answers} />
      </section>

      {isStatisticsModalOpen && (
        <StatisticsPromoModal onClose={() => setIsStatisticsModalOpen(false)} />
      )}
    </>
  );
};
