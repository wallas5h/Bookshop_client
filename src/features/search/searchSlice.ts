import { createSlice } from "@reduxjs/toolkit";

export interface CartChangeStateInterface {
  phrase: string;
  currentPage: number
}

const initialState = {
  phrase: '',
  currentPage: 1,
}

interface ChangePhrase {
  payload: string;
}

interface ChangeCurrentPage {
  payload: number;
}


export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changePhrase: (state, action: ChangePhrase) => {
      state.phrase = action.payload
    },
    changeCurrentPage: (state, action: ChangeCurrentPage) => {
      state.currentPage = action.payload
    },
  }
});

export const { changePhrase, changeCurrentPage } = searchSlice.actions;