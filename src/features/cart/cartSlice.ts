import { createSlice } from "@reduxjs/toolkit";

export interface CartChangeStateInterface {
  changeBetweenCartWishlist: number;
  cartId: string | null;
}

const initialState: CartChangeStateInterface = {
  changeBetweenCartWishlist: 0,
  cartId: null,
};

interface AddChangeBetweenCartWishlist {
  payload: number;
}

interface SetCartId {
  payload: string | null;
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
  },
});

export const {
  addChangeBetweenCartWishlist,
  setCartId,
} = cartWishlistSlice.actions;
