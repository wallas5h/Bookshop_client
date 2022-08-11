import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../auth/authSlice";


import {
  FLUSH, PAUSE,
  PERSIST, persistReducer, persistStore, PURGE,
  REGISTER, REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartWishlistSlice } from "../cart/cartSlice";

const Reducer = combineReducers({
  auth: authSlice.reducer,
  cartWishlist: cartWishlistSlice.reducer
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, Reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

// export const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer
//   }
// })

export type RootState = ReturnType<typeof store.getState>