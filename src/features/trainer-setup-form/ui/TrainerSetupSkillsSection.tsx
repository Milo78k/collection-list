import { Controller, type Control } from "react-hook-form";

import type { Skill } from "@/entities/skill";

import type { TrainerSetupFormValues } from "../model/trainerSetupTypes";
import { toggleStringValue } from "../model/trainerSetupUtils";

import { TrainerSetupChip } from "./TrainerSetupChip";

type TrainerSetupSkillsSectionProps = {
  control: Control<TrainerSetupFormValues>;
  skills: Skill[];
};

export const TrainerSetupSkillsSection = ({
  control,
  skills,
}: TrainerSetupSkillsSectionProps) => {
  return (
    <Controller
      name="skills"
      control={control}
      render={({ field }) => (
        <div className="trainer-setup-form__section">
          <p className="trainer-setup-form__label">Категории вопросов</p>

          <div className="trainer-setup-form__chips trainer-setup-form__chips--categories">
            {skills.map((item) => {
              const skillId = String(item.id);

              return (
                <TrainerSetupChip
                  key={item.id}
                  label={item.title}
                  isActive={field.value.includes(skillId)}
                  onClick={() =>
                    field.onChange(toggleStringValue(field.value, skillId))
                  }
                />
              );
            })}
          </div>
        </div>
      )}
    />
  );
};
