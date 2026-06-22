export type TrainerMode = "repeat" | "new" | "random";

export type TrainerSetupFormValues = {
  specialization: number | null;
  collection: number | null;
  complexity: number[];
  skills: string[];
  mode: TrainerMode;
  limit: number;
};
