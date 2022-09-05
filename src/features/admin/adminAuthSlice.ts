import { createSlice } from "@reduxjs/toolkit";

export interface CartChangeStateInterface {
  accessToken: string;
  refreshToken: string;
  access: boolean;
  changeBetwenDb: number;
}

const initialState = {
  accessToken: "",
  refreshToken: "",
  access: false,
  changeBetwenDb: 0,
};

interface ChangeAccess {
  payload: boolean;
}
interface ChangeToken {
  payload: string;
}
interface AddChangeBetweenDb {
  payload: number;
}

export const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    changeAccess: (state, action: ChangeAccess) => {
      state.access = action.payload;
    },
    changeAccessToken: (state, action: ChangeToken) => {
      state.accessToken = action.payload;
    },
    changeRefreshToken: (state, action: ChangeToken) => {
      state.refreshToken = action.payload;
    },
    addChangeBetweenDb: (state, action: AddChangeBetweenDb) => {
      state.changeBetwenDb = action.payload;
    },
  },
});

export const {
  changeAccessToken,
  changeRefreshToken,
  changeAccess,
  addChangeBetweenDb,
} = adminAuthSlice.actions;
