import { createSlice } from "@reduxjs/toolkit";

export interface CartChangeStateInterface {
  changeBetweenCartWishlist: number;
}

const initialState = {
  changeBetweenCartWishlist: 0,
}

interface AddChangeBetweenCartWishlist {
  payload: number
}


export const cartWishlistSlice = createSlice({
  name: 'cartWishlist',
  initialState,
  reducers: {
    addChangeBetweenCartWishlist: (state, action: AddChangeBetweenCartWishlist) => {
      state.changeBetweenCartWishlist = action.payload
    },
  }
})

export const { addChangeBetweenCartWishlist } = cartWishlistSlice.actions