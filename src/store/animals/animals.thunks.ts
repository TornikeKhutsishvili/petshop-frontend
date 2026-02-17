import { createAsyncThunk } from "@reduxjs/toolkit";
import type { animalsList } from "../../interfaces/animals.interface";

const BASE_URL = "http://localhost:4003/animals";

// GET
export const getAnimals = createAsyncThunk<
  animalsList[],
  void,
  { rejectValue: string }
>("animals/getAnimals", async (_, thunkAPI) => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch {
    return thunkAPI.rejectWithValue("Failed to fetch animals");
  }
});
