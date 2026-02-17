import { createAsyncThunk } from "@reduxjs/toolkit";
import type { categoriesList } from "../../interfaces/categories.interface";

const BASE_URL = "http://localhost:4003/categories";

// GET
export const getCategories = createAsyncThunk<
  categoriesList[],
  void,
  { rejectValue: string }
>("categories/getCategories", async (_, thunkAPI) => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch {
    return thunkAPI.rejectWithValue("Failed to fetch categories");
  }
});
