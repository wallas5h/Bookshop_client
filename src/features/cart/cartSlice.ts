import { createSlice } from "@reduxjs/toolkit";

export interface CartChangeStateInterface {
  changeBetweenCartWishlist: number;
  cartId: string | null;
  booksCost: number;
}

const initialState: CartChangeStateInterface = {
  changeBetweenCartWishlist: 0,
  cartId: null,
  booksCost: 0,
};

interface AddChangeBetweenCartWishlist {
  payload: number;
}

interface SetCartId {
  payload: string | null;
}

interface SetTotalCost {
  payload: number;
}

export const cartWishlistSlice = createSlice({
  name: "cartWishlist",
  initialState,
  reducers: {
    addChangeBetweenCartWishlist: (
      state,
      action: AddChangeBetweenCartWishlist
    ) => {
      state.changeBetweenCartWishlist = action.payload;
    },
    setCartId: (state, action: SetCartId) => {
      state.cartId = action.payload;
    },
    setBooksCost: (state, action: SetTotalCost) => {
      state.booksCost = action.payload;
    },
  },
});

export const {
  addChangeBetweenCartWishlist,
  setCartId,
  setBooksCost,
} = cartWishlistSlice.actions;
