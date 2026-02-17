import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { animalsList } from "../../interfaces/animals.interface";
import type { RootState } from "../../store";

interface WishlistState {
  items: animalsList[];
}

const loadWishlistFromLocalStorage = (): animalsList[] => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const initialState: WishlistState = {
  items: loadWishlistFromLocalStorage(),
};

const saveWishlistToLocalStorage = (items: animalsList[]) => {
  localStorage.setItem("wishlist", JSON.stringify(items));
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<animalsList>) => {
      if (!state.items.find((i) => i.id === action.payload.id)) {
        state.items.push(action.payload);
        saveWishlistToLocalStorage(state.items);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      saveWishlistToLocalStorage(state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
      saveWishlistToLocalStorage(state.items);
    },
    moveToCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      saveWishlistToLocalStorage(state.items);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist, moveToCart } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
export const wishlistSelector = (state: RootState) => state.wishlist.items;
