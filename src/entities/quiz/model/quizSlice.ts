import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type {
  GetNewMockQuizResponse,
  QuizAnswer,
  QuizAnswerStatus,
} from "./quiz";

type QuizState = {
  activeQuiz: GetNewMockQuizResponse | null;
  currentQuestionIndex: number;
  answers: QuizAnswer[];
};

const initialState: QuizState = {
  activeQuiz: null,
  currentQuestionIndex: 0,
  answers: [],
};

type AddQuizAnswerPayload = {
  questionId: number;
  questionTitle: string;
  answer: QuizAnswerStatus;
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setActiveQuiz: (state, action: PayloadAction<GetNewMockQuizResponse>) => {
      state.activeQuiz = action.payload;
      state.currentQuestionIndex = 0;
      state.answers = [];
    },

    addQuizAnswer: (state, action: PayloadAction<AddQuizAnswerPayload>) => {
      const existingAnswerIndex = state.answers.findIndex(
        (answer) => answer.questionId === action.payload.questionId,
      );

      if (existingAnswerIndex >= 0) {
        state.answers[existingAnswerIndex] = action.payload;
      } else {
        state.answers.push(action.payload);
      }
    },

    goToNextQuestion: (state) => {
      const questionsCount = state.activeQuiz?.questions.length ?? 0;

      if (state.currentQuestionIndex < questionsCount - 1) {
        state.currentQuestionIndex += 1;
      }
    },

    goToPreviousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },

    resetQuiz: () => initialState,
  },
});

export const {
  setActiveQuiz,
  addQuizAnswer,
  goToNextQuestion,
  goToPreviousQuestion,
  resetQuiz,
} = quizSlice.actions;

export const quizReducer = quizSlice.reducer;
