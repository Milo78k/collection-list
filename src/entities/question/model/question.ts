import type { ApiListResponse } from "@/shared/types/api";

import type { Skill } from "@/entities/skill";
import type { Specialization } from "@/entities/specialization";
import type { Topic } from "@/entities/topic";

export type QuestionAuthor = {
  id: string;
  username: string;
};

export type Question = {
  id: number;
  title: string;
  slug: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string | null;
  shortAnswer: string | null;
  status: string;
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  createdBy?: QuestionAuthor;
  updatedBy?: QuestionAuthor;
  questionSpecializations: Specialization[];
  questionSkills: Skill[];
  questionTopics: Topic[];
};

export type QuestionResponse = ApiListResponse<Question>;
