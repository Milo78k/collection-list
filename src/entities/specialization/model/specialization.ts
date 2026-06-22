import type { QuestionAuthor } from "@/entities/question";

export type Specialization = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: QuestionAuthor;
};
