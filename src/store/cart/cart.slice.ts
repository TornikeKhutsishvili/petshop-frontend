import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { animalsList } from "../../interfaces/animals.interface";
import type { RootState } from "../../store";

interface CartItem extends animalsList {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// const loadCartFromLocalStorage = (): CartItem[] => {
//   try {
//     const data = localStorage.getItem("cart");
//     if (!data) return [];
//     const parsed: animalsList[] = JSON.parse(data);
//     return parsed.map((item) => ({
//       ...item,
//       // quantity: item.quantity ?? 1,
//     }));
//   } catch {
//     return [];
//   }
// };

const loadCartFromLocalStorage = (): CartItem[] => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

const saveCartToLocalStorage = (items: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<animalsList>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      saveCartToLocalStorage(state.items);
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
export const cartSelector = (state: RootState) => state.cart.items;
