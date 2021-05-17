import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { QuestionData } from '../questions/model';
import { search } from './api';

//define a type for the slice state
export interface SearchState {
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
  questions?: QuestionData[];
}

const initialState: SearchState = {
  status: 'idle',
  error: null,
};

export const searchAsync = createAsyncThunk(
  'search/searchQuestions',
  async (searchTerm: string) => {
    const response = await search(searchTerm);    
    return response;
  },
);

export const searchSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
      clearSearch: (state) => {
          state.questions = undefined;
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.questions = action.payload;
      });
  },
});

export default searchSlice.reducer;

export const {clearSearch} = searchSlice.actions;

export const selectSearchResults = (state: RootState) => state.search.questions;
