import { createSlice } from '@reduxjs/toolkit';

type AppState = {
  page: string;
};
const initialState = {
  page: '',
} as AppState;
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changePage(state: any, action: any) {
      // state.page = action.payload;
      // return { ...state, action.payload };
      return { page: action.payload };
    },
  },
});

export const { changePage } = appSlice.actions;
export default appSlice.reducer;
