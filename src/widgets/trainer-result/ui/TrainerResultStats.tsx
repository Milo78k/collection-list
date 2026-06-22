import type { SkillProgressItem } from "../model/trainerResultTypes";

import { TrainerResultCircleStats } from "./TrainerResultCircleStats";
import { TrainerResultSkills } from "./TrainerResultSkills";

type TrainerResultStatsProps = {
  totalQuestions: number;
  knownCount: number;
  unknownCount: number;
  unansweredCount: number;
  learnedPercent: number;
  skillProgressItems: SkillProgressItem[];
  onStatisticsClick: () => void;
};

export const TrainerResultStats = ({
  totalQuestions,
  knownCount,
  unknownCount,
  unansweredCount,
  learnedPercent,
  skillProgressItems,
  onStatisticsClick,
}: TrainerResultStatsProps) => {
  return (
    <div className="trainer-result__stats-card">
      <div className="trainer-result__header">
        <h1 className="trainer-result__title">Умный режим изучения вопросов</h1>

        <button
          type="button"
          className="trainer-result__statistics-button"
          onClick={onStatisticsClick}
        >
          Посмотреть статистику
          <span>→</span>
        </button>
      </div>

      <div className="trainer-result__overview">
        <TrainerResultCircleStats
          totalQuestions={totalQuestions}
          knownCount={knownCount}
          unknownCount={unknownCount}
          unansweredCount={unansweredCount}
          learnedPercent={learnedPercent}
        />

        <TrainerResultSkills skillProgressItems={skillProgressItems} />
      </div>
    </div>
  );
};
