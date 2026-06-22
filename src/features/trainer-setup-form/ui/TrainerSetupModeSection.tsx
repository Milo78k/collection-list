import { Controller, type Control } from "react-hook-form";

import type { TrainerSetupFormValues } from "../model/trainerSetupTypes";
import { modeOptions } from "../model/trainerSetupOptions";

import { TrainerSetupChip } from "./TrainerSetupChip";

type TrainerSetupModeSectionProps = {
  control: Control<TrainerSetupFormValues>;
};

export const TrainerSetupModeSection = ({
  control,
}: TrainerSetupModeSectionProps) => {
  return (
    <Controller
      name="mode"
      control={control}
      render={({ field }) => (
        <div className="trainer-setup-form__section">
          <p className="trainer-setup-form__label">Выберите режим</p>

          <div className="trainer-setup-form__chips">
            {modeOptions.map((item) => (
              <TrainerSetupChip
                key={item.value}
                label={item.label}
                isActive={field.value === item.value}
                onClick={() => field.onChange(item.value)}
              />
            ))}
          </div>
        </div>
      )}
    />
  );
};
