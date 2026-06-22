import type { SkillProgressItem } from "../model/trainerResultTypes";

type TrainerResultSkillsProps = {
  skillProgressItems: SkillProgressItem[];
};

export const TrainerResultSkills = ({
  skillProgressItems,
}: TrainerResultSkillsProps) => {
  return (
    <div className="trainer-result__skills-card">
      <h2 className="trainer-result__section-title">
        Прогресс обучения по навыкам
      </h2>

      <div className="trainer-result__skills-list">
        {skillProgressItems.map((item) => (
          <div key={item.skill} className="trainer-result__skill">
            <div className="trainer-result__skill-header">
              <span>{item.skill}</span>
              <span>
                {item.learned}/{item.total}
              </span>
            </div>

            <div className="trainer-result__skill-progress">
              <div
                className="trainer-result__skill-progress-line"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
