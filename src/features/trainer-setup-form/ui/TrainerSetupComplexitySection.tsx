import { Controller, type Control } from "react-hook-form";

import type { TrainerSetupFormValues } from "../model/trainerSetupTypes";
import { complexityOptions } from "../model/trainerSetupOptions";
import { areArraysEqual } from "../model/trainerSetupUtils";

import { TrainerSetupChip } from "./TrainerSetupChip";

type TrainerSetupComplexitySectionProps = {
  control: Control<TrainerSetupFormValues>;
};

export const TrainerSetupComplexitySection = ({
  control,
}: TrainerSetupComplexitySectionProps) => {
  return (
    <Controller
      name="complexity"
      control={control}
      render={({ field }) => (
        <div className="trainer-setup-form__section">
          <p className="trainer-setup-form__label">Уровень сложности</p>

          <div className="trainer-setup-form__chips">
            {complexityOptions.map((item) => (
              <TrainerSetupChip
                key={item.label}
                label={item.label}
                isActive={areArraysEqual(field.value, item.value)}
                onClick={() => field.onChange(item.value)}
              />
            ))}
          </div>
        </div>
      )}
    />
  );
};
