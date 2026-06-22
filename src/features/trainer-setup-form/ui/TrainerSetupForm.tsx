import { useForm } from "react-hook-form";

import type { Specialization } from "@/entities/specialization";
import type { Skill } from "@/entities/skill";

import type { TrainerSetupFormValues } from "../model/trainerSetupTypes";

import { TrainerSetupComplexitySection } from "./TrainerSetupComplexitySection";
import { TrainerSetupLimitSection } from "./TrainerSetupLimitSection";
import { TrainerSetupModeSection } from "./TrainerSetupModeSection";
import { TrainerSetupSkillsSection } from "./TrainerSetupSkillsSection";
import { TrainerSetupSpecializationSection } from "./TrainerSetupSpecializationSection";

import "./TrainerSetupForm.scss";

type TrainerSetupFormProps = {
  specializations: Specialization[];
  skills: Skill[];
  isLoading: boolean;
  onSubmit: (values: TrainerSetupFormValues) => void;
};

export const TrainerSetupForm = ({
  isLoading,
  onSubmit,
  specializations,
  skills,
}: TrainerSetupFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TrainerSetupFormValues>({
    defaultValues: {
      specialization: null,
      skills: [],
      complexity: [1, 2, 3],
      mode: "random",
      limit: 10,
      collection: null,
    },
  });

  return (
    <form className="trainer-setup-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="trainer-setup-form__main">
        <div className="trainer-setup-form__left">
          <TrainerSetupSpecializationSection
            control={control}
            errors={errors}
            specializations={specializations}
          />

          <TrainerSetupSkillsSection control={control} skills={skills} />
        </div>

        <div className="trainer-setup-form__right">
          <TrainerSetupComplexitySection control={control} />

          <TrainerSetupModeSection control={control} />

          <TrainerSetupLimitSection control={control} />
        </div>
      </div>

      <button
        type="submit"
        className="trainer-setup-form__submit"
        disabled={isLoading}
      >
        <span>{isLoading ? "Создаём..." : "Начать"}</span>
        <span>→</span>
      </button>
    </form>
  );
};
