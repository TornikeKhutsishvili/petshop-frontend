import { createAsyncThunk } from "@reduxjs/toolkit";
import type { animals_with_categoriesList } from "../../interfaces/animals_with_categories.interface";

const BASE_URL = "http://localhost:4003/animals_with_categories";

// GET
export const get_animals_with_categories = createAsyncThunk<
  animals_with_categoriesList[],
  void,
  { rejectValue: string }
>(
  "animals_with_categories/get_animals_with_categories",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(BASE_URL);
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return thunkAPI.rejectWithValue(
        "Failed to fetch animals_with_categories",
      );
    }
  },
);
