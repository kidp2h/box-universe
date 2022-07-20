import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import { createWrapper } from 'next-redux-wrapper';

const store = configureStore({
  reducer: rootReducer,
});

export const state = store.getState();
export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
export default store;
export const wrapper = createWrapper(() => store);
