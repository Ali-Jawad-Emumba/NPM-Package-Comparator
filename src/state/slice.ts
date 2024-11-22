import { createSlice } from "@reduxjs/toolkit";

export interface State {
  firstPackageData: any;
  secondPackageData: any;
}
const initialState: State = {
  firstPackageData: null,
  secondPackageData: null,
};

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    storeSelectedPackagesData(state, action) {
      state.firstPackageData = action.payload[0];
      state.secondPackageData = action.payload[1];
      console.log(action.payload);
    },
  },
});

export const { storeSelectedPackagesData } = slice.actions;
export default slice.reducer;
