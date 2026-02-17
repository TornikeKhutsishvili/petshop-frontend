import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store/index";
import type { animalsList } from "../../interfaces/animals.interface";
import { getAnimals } from "./animals.thunks";

type TypeError = string | null;

interface Ianimals {
  animalsList: animalsList[];
  loading: boolean;
  error: TypeError;
}

const initialState: Ianimals = {
  animalsList: [],
  loading: false,
  error: null,
};

const animalsSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(getAnimals.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAnimals.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.animalsList = action.payload;
      })
      .addCase(getAnimals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default animalsSlice.reducer;

export const animalsStateSelector = (state: RootState) => state.animals;

export const animalsListSelector = createSelector(
  animalsStateSelector,
  (state) => state.animalsList,
);

export const animalsLoadingSelector = createSelector(
  animalsStateSelector,
  (state) => state.loading,
);

export const animalsErrorSelector = createSelector(
  animalsStateSelector,
  (state) => state.error,
);
