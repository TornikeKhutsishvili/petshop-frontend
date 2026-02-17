import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store/index";
import type { animals_with_categoriesList } from "../../interfaces/animals_with_categories.interface";
import { get_animals_with_categories } from "./animals_with_categories.thunks";

type TypeError = string | null;

interface Ianimals_with_categories {
  animals_with_categoriesList: animals_with_categoriesList[];
  loading: boolean;
  error: TypeError;
}

const initialState: Ianimals_with_categories = {
  animals_with_categoriesList: [],
  loading: false,
  error: null,
};

const animals_with_categoriesSlice = createSlice({
  name: "animals_with_categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(get_animals_with_categories.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_animals_with_categories.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.animals_with_categoriesList = action.payload;
      })
      .addCase(get_animals_with_categories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default animals_with_categoriesSlice.reducer;

export const animals_with_categoriesStateSelector = (state: RootState) =>
  state.animals_with_categories;

export const animalsWithCategoriesListSelector = createSelector(
  animals_with_categoriesStateSelector,
  (state) => state.animals_with_categoriesList,
);

export const animalsWithCategoriesLoadingSelector = createSelector(
  animals_with_categoriesStateSelector,
  (state) => state.loading,
);

export const animalsWithCategoriesErrorSelector = createSelector(
  animals_with_categoriesStateSelector,
  (state) => state.error,
);
