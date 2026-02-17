import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store/index";
import type { categoriesList } from "../../interfaces/categories.interface";
import { getCategories } from "./categories.thunks";

type TypeError = string | null;

interface Icategories {
  categoriesList: categoriesList[];
  loading: boolean;
  error: TypeError;
}

const initialState: Icategories = {
  categoriesList: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.categoriesList = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default categoriesSlice.reducer;

export const categoriesStateSelector = (state: RootState) => state.categories;

export const categoriesListSelector = createSelector(
  categoriesStateSelector,
  (state) => state.categoriesList,
);

export const categoriesLoadingSelector = createSelector(
  categoriesStateSelector,
  (state) => state.loading,
);

export const categoriesErrorSelector = createSelector(
  categoriesStateSelector,
  (state) => state.error,
);
