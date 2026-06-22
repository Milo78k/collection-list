export type ApiListResponse<T> = {
  total: number;
  page: number;
  limit: number;
  data: T[];
};
