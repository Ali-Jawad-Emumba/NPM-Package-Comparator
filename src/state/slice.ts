import { createSlice } from "@reduxjs/toolkit";

export interface State {
  selectedPackages: string[];
  firstPackageData: any;
  secondPackageData: any;
}
const initialState: State = {
  selectedPackages: [],
  firstPackageData: null,
  secondPackageData: null,
};

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    storeSelectedPackages(state, action) {
      state.selectedPackages = action.payload;
    },
    storeSelectedPackagesData(state, action) {
      state.firstPackageData = action.payload[0];
      state.secondPackageData = action.payload[1];
      console.log(action.payload);
    },
  },
});

export const { storeSelectedPackages, storeSelectedPackagesData } =
  slice.actions;
export default slice.reducer;
