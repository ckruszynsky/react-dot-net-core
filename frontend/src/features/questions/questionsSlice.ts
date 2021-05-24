import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { fetchQuestionById, fetchQuestions, addNewQuestion, UpdateQuestion } from './api';
import { NewQuestion, QuestionData, Reaction } from './model';

//define a type for the slice state
export interface QuestionsState {
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
  questionList?: QuestionData[];
  selectedQuestion?: QuestionData;
}

interface ReactionAddedPayload {
  questionId: string;
  reaction: string;
}

const initialState: QuestionsState = {
  status: 'idle',
  error: null,
};

export const fetchQuestionsAsync = createAsyncThunk(
  'questions/fetchQuestions',
  async (showAnsweredQuestions: boolean) => {
    const response = await fetchQuestions(showAnsweredQuestions);
    //value we return becomes the `fulfilled` action payload
    return response;
  },
);

export const fetchQuestionByIdAsync = createAsyncThunk(
  'question/fetchQuestionById',
  async (questionId: string) => {
    const response = await fetchQuestionById(questionId);
    return response;
  },
);

export const addNewQuestionAsync = createAsyncThunk(
  'questions/add',
  async (newQuestion: NewQuestion) => {
    const response = await addNewQuestion(newQuestion);
    return response;
  },
);

export const updateQuestionAsync = createAsyncThunk(
  'question/editQuestion',
  async (question: QuestionData) => {
    const response = await UpdateQuestion(question.questionId, question);
    return response;
  },
);

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    currentQuestionSelected: (state, action: PayloadAction<QuestionData>) => {
      state.selectedQuestion = action.payload;
    },
    reactionAdded: (state, action: PayloadAction<ReactionAddedPayload>) => {
      const { questionId, reaction } = action.payload;
      const existingQuestion = state?.questionList?.find((q) => q.questionId === questionId);
      if (existingQuestion) {
        existingQuestion.reactions[reaction as keyof Reaction]++;
      }
    },   
    clearCurrentQuestion: (state) => {
      state.selectedQuestion = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuestionsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.questionList = action.payload;
      })
      .addCase(fetchQuestionByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuestionByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedQuestion = action.payload;
      })
      .addCase(addNewQuestionAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addNewQuestionAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.questionList?.push(action.payload);
        state.selectedQuestion = action.payload;
      })
      .addCase(updateQuestionAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateQuestionAsync.fulfilled, (state) => {
        state.status = 'idle';
      });
  },
});

export const { reactionAdded, clearCurrentQuestion, currentQuestionSelected } =
  questionsSlice.actions;

export default questionsSlice.reducer;

export const selectAllQuestions = (state: RootState) => state.questions.questionList;
export const selectCurrentQuestion = (state: RootState) => state.questions.selectedQuestion;
