import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../auth/authSlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { adminAuthSlice } from "../admin/adminAuthSlice";
import { cartWishlistSlice } from "../cart/cartSlice";
import { defaultPropsSlice } from "../defaultProps/defaultPropsSlice";
import { paymentSlice } from "../payment/paymentSlice";
import { searchSlice } from "../search/searchSlice";

const Reducer = combineReducers({
  auth: authSlice.reducer,
  cartWishlist: cartWishlistSlice.reducer,
  search: searchSlice.reducer,
  payment: paymentSlice.reducer,
  adminAuth: adminAuthSlice.reducer,
  defaultProps: defaultPropsSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
