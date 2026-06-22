import { useGetSkillsQuery } from "@/entities/skill/api/skillsApi";
import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationsApi";

export const useSidebarFiltersData = () => {
  const {
    data: specializationsData,
    isLoading: isSpecializationsLoading,
    isError: isSpecializationsError,
  } = useGetSpecializationsQuery();

  const {
    data: skillsData,
    isLoading: isSkillsLoading,
    isError: isSkillsError,
  } = useGetSkillsQuery();

  return {
    specializations: specializationsData?.data ?? [],
    skills: skillsData?.data ?? [],
    isLoading: isSpecializationsLoading || isSkillsLoading,
    isError: isSpecializationsError || isSkillsError,
  };
};
