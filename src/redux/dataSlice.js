import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    sheetData: [],
  },
  reducers: {
    setSheetData: (state, action) => {
      state.sheetData = action.payload;
    },
  },
});

export const { setSheetData } = dataSlice.actions;
export default dataSlice.reducer;
