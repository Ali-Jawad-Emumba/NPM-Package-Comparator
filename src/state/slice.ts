import { createSlice } from "@reduxjs/toolkit";

export interface State {}
const initialState: State = {};

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {},
});

export const {} = slice.actions;
export default slice.reducer;
