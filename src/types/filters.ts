export type ApiListResponse<T> = {
  total: number;
  page: number;
  limit: number;
  data: T[];
};

export type Specialization = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
};

export type Skill = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
};
