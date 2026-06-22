export type {
  GetNewMockQuizResponse,
  QuizAnswer,
  QuizAnswerStatus,
  QuizResponse,
  StartMockQuizParams,
} from "./model/quiz";

export {
  setActiveQuiz,
  addQuizAnswer,
  goToNextQuestion,
  goToPreviousQuestion,
  resetQuiz,
} from "./model/quizSlice";

export { useLazyStartMockQuizQuery } from "./api/quizApi";
