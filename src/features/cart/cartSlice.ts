import { createSlice } from "@reduxjs/toolkit";

export interface CartChangeStateInterface {
  changeBetweenCartWishlist: number;
  cartId: string | null;
  totalCost: number;
}

const initialState: CartChangeStateInterface = {
  changeBetweenCartWishlist: 0,
  cartId: null,
  totalCost: 0,
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
    setTotalCost: (state, action: SetTotalCost) => {
      state.totalCost = action.payload;
    },
  },
});

export const {
  addChangeBetweenCartWishlist,
  setCartId,
  setTotalCost,
} = cartWishlistSlice.actions;
