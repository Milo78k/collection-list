import { Controller, type Control } from "react-hook-form";

import type { TrainerSetupFormValues } from "../model/trainerSetupTypes";

import { TrainerSetupCounter } from "./TrainerSetupCounter";

type TrainerSetupLimitSectionProps = {
  control: Control<TrainerSetupFormValues>;
};

export const TrainerSetupLimitSection = ({
  control,
}: TrainerSetupLimitSectionProps) => {
  return (
    <Controller
      name="limit"
      control={control}
      render={({ field }) => (
        <div className="trainer-setup-form__section">
          <p className="trainer-setup-form__label">Количество вопросов</p>

          <TrainerSetupCounter
            value={field.value}
            min={1}
            max={50}
            onChange={field.onChange}
          />
        </div>
      )}
    />
  );
};
