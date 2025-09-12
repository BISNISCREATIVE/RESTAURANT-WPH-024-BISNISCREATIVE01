import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartReducer from "@/features/cart/cartSlice";
import filtersReducer from "@/features/filters/filtersSlice";
import authReducer from "@/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
