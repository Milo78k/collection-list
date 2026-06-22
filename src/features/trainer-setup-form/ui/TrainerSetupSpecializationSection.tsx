import { Controller, type Control, type FieldErrors } from "react-hook-form";

import type { Specialization } from "@/entities/specialization";

import type { TrainerSetupFormValues } from "../model/trainerSetupTypes";

import { TrainerSetupChip } from "./TrainerSetupChip";

type TrainerSetupSpecializationSectionProps = {
  control: Control<TrainerSetupFormValues>;
  errors: FieldErrors<TrainerSetupFormValues>;
  specializations: Specialization[];
};

export const TrainerSetupSpecializationSection = ({
  control,
  errors,
  specializations,
}: TrainerSetupSpecializationSectionProps) => {
  return (
    <Controller
      name="specialization"
      control={control}
      rules={{
        validate: (value) => value !== null || "Выберите специализацию",
      }}
      render={({ field }) => (
        <div className="trainer-setup-form__section">
          <p className="trainer-setup-form__label">Выбор специализации</p>

          <div className="trainer-setup-form__chips">
            {specializations.map((item) => (
              <TrainerSetupChip
                key={item.id}
                label={item.title}
                isActive={field.value === item.id}
                onClick={() => field.onChange(item.id)}
              />
            ))}
          </div>

          {errors.specialization && (
            <p className="trainer-setup-form__error">
              {errors.specialization.message}
            </p>
          )}
        </div>
      )}
    />
  );
};
