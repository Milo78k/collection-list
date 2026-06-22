import type { QuestionAuthor } from "@/entities/question";
import type { Specialization } from "@/entities/specialization";

export type Skill = {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt?: string;
  updatedAt?: string;
  specializations?: Specialization[];
  createdBy?: QuestionAuthor;
};
