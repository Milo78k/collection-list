export type CollectionAccess = "all" | "free" | "paid";

export type CollectionFilters = {
  search: string;
  specializationIds: number[];
  access: CollectionAccess;
};
