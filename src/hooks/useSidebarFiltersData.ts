import { useEffect, useState } from "react";
import { getSkills, getSpecializations } from "@/api/filtersApi";
import type { Skill, Specialization } from "@/types/filters";

export const useSidebarFiltersData = () => {
  const [specializations, setSpecializations] = useState<Specialization[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const [specializationsData, skillsData] = await Promise.all([
          getSpecializations(),
          getSkills(),
        ]);

        setSpecializations(specializationsData.data);
        setSkills(skillsData.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadFilters();
  }, []);

  return { specializations, skills };
};
