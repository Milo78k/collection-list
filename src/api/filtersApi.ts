import type { ApiListResponse, Skill, Specialization } from "@/types/filters";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getSpecializations = async (): Promise<
  ApiListResponse<Specialization>
> => {
  const response = await fetch(`${BASE_URL}/specializations`);

  if (!response.ok) {
    throw new Error("Не удалось загрузить специализации");
  }

  return response.json();
};

export const getSkills = async (): Promise<ApiListResponse<Skill>> => {
  const response = await fetch(`${BASE_URL}/skills`);

  if (!response.ok) {
    throw new Error("Не удалось загрузить навыки");
  }

  return response.json();
};
