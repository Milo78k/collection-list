import type { Question } from "@/entities/question";

export type QuizAnswerStatus = "KNOWN" | "UNKNOWN";

export type QuizAnswer = {
  questionId: number;
  questionTitle: string;
  answer: QuizAnswerStatus;
};

export type QuizResponse = {
  answers: QuizAnswer[];
};

export type GetNewMockQuizResponse = {
  id: string;
  startDate: string;
  fullCount: number;
  skills: string[];
  response: QuizResponse;
  questions: Question[];
};

export type StartMockQuizParams = {
  specialization: number;
  complexity?: number[];
  collection?: number;
  limit?: number;
  skills?: string[];
};
