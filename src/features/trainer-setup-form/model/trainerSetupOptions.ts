import type { TrainerMode } from "./trainerSetupTypes";

export const complexityOptions: { label: string; value: number[] }[] = [
  { label: "1–3", value: [1, 2, 3] },
  { label: "4–6", value: [4, 5, 6] },
  { label: "7–8", value: [7, 8] },
  { label: "9–10", value: [9, 10] },
];

export const modeOptions: { label: string; value: TrainerMode }[] = [
  { label: "Повторение", value: "repeat" },
  { label: "Только новые", value: "new" },
  { label: "Случайные", value: "random" },
];
