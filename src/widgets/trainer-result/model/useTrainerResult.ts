import { useAppSelector } from "@/shared/lib/store/hooks";

const SKILLS_LIMIT = 7;

export const useTrainerResult = () => {
  const activeQuiz = useAppSelector((state) => state.quiz.activeQuiz);
  const answers = useAppSelector((state) => state.quiz.answers);

  const questions = activeQuiz?.questions ?? [];

  const totalQuestions = questions.length;

  const knownCount = answers.filter(
    (answer) => answer.answer === "KNOWN",
  ).length;

  const unknownCount = answers.filter(
    (answer) => answer.answer === "UNKNOWN",
  ).length;

  const unansweredCount = Math.max(totalQuestions - answers.length, 0);

  const learnedPercent =
    totalQuestions > 0 ? Math.round((knownCount / totalQuestions) * 100) : 0;

  const knownQuestionIds = new Set(
    answers
      .filter((answer) => answer.answer === "KNOWN")
      .map((answer) => answer.questionId),
  );

  const skillsFromQuestions = questions.flatMap(
    (question) => question.questionSkills ?? [],
  );

  const uniqueSkills = Array.from(
    new Map(
      skillsFromQuestions.map((skill) => [
        String(skill.id),
        {
          id: String(skill.id),
          title: skill.title,
        },
      ]),
    ).values(),
  ).slice(0, SKILLS_LIMIT);

  const skillProgressItems = uniqueSkills.map((skill) => {
    const skillQuestions = questions.filter((question) =>
      question.questionSkills?.some(
        (questionSkill) => String(questionSkill.id) === skill.id,
      ),
    );

    const learned = skillQuestions.filter((question) =>
      knownQuestionIds.has(question.id),
    ).length;

    const total = skillQuestions.length;
    const percent = total > 0 ? Math.round((learned / total) * 100) : 0;

    return {
      skill: skill.title,
      learned,
      total,
      percent,
    };
  });

  return {
    activeQuiz,
    questions,
    answers,
    totalQuestions,
    knownCount,
    unknownCount,
    unansweredCount,
    learnedPercent,
    skillProgressItems,
  };
};
