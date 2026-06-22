import type { QuizAnswerStatus } from "@/entities/quiz";

export type AnswerStatus = QuizAnswerStatus | "UNANSWERED";

export type SkillProgressItem = {
  skill: string;
  learned: number;
  total: number;
  percent: number;
};
