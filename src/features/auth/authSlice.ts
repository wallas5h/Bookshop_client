import { createSlice } from "@reduxjs/toolkit";

export interface AuthStateInterface {
  isUserLogged: boolean;
  userName: string;
  userId: string;
}

const initialState = {
  isUserLogged: false,
  userName: '',
  userId: '',
}

interface ChangeUserLogStatus {
  payload: boolean
}

interface ChangeUserName {
  payload: string
}

interface ChangeUserId {
  payload: string
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeUserLogStatus: (state, action: ChangeUserLogStatus) => {
      state.isUserLogged = action.payload
    },
    changeUserName: (state, action: ChangeUserName) => {
      state.userName = action.payload
    },
    changeUserId: (state, action: ChangeUserId) => {
      state.userId = action.payload
    },
  }
})

export const { changeUserLogStatus, changeUserName, changeUserId } = authSlice.actions