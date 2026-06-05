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
  questionSpecializations: QuestionSpecialization[];
  questionSkills: QuestionSkill[];
  questionTopics: QuestionTopic[];
};

export type QuestionSpecialization = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: QuestionAuthor;
};

export type QuestionSkill = {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt?: string;
  updatedAt?: string;

  specializations?: QuestionSpecialization[];
  createdBy?: QuestionAuthor;
};

export type QuestionTopic = {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
};

export type QuestionResponse = {
  total: number;
  page: number;
  limit: number;
  data: Question[];
};
