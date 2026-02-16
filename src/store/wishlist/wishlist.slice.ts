import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { animalsList } from "../../interfaces/animals.interface";
import type { RootState } from "../../store";

interface WishlistState {
  items: animalsList[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<animalsList>) => {
      if (!state.items.find((i) => i.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
    moveToCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist, moveToCart } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
export const wishlistSelector = (state: RootState) => state.wishlist.items;
