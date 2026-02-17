import { combineReducers, configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./categories/categories.slice";
import animalsReducer from "./animals/animals.slice";
import animals_with_categoriesReducer from "./animals_with_categories/animals_with_categories.slice";
import currencyReducer from "./currency/currency.slice";
import wishlistReducer from "./wishlist/wishlist.slice";
import cartReducer from "./cart/cart.slice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  animals: animalsReducer,
  animals_with_categories: animals_with_categoriesReducer,
  currency: currencyReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
