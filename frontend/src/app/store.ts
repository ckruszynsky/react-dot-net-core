import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import questionsReducer from '../features/questions/questionsSlice';
import usersReducer from '../features/users/usersSlice';
import searchReducer from '../features/search/searchSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    questions: questionsReducer,
    users: usersReducer,
    search: searchReducer
  }  
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
