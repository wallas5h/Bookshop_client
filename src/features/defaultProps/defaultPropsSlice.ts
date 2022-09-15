import { createSlice } from "@reduxjs/toolkit";

export interface AuthStateInterface {
  currency: string;
}

const initialState = {
  currency: "PLN",
};

interface ChangeCurrency {
  payload: string;
}

export const defaultPropsSlice = createSlice({
  name: "defaultProps",
  initialState,
  reducers: {
    changeCurrency: (state, action: ChangeCurrency) => {
      state.currency = action.payload;
    },
  },
});

export const { changeCurrency } = defaultPropsSlice.actions;
