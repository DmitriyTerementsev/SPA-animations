import { combineReducers } from 'redux';
import animationSlice from './animationSlice';

export const rootReducer = combineReducers({
  animation: animationSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
