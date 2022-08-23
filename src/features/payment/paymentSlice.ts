import { createSlice } from "@reduxjs/toolkit";

export interface paymentInterface {
  addressDetails: {
    name: string;
    street: string;
    city: string;
    postcode: string;
    country: string;
    areaCode: string;
    phone: string;
  };
  addressCompleted: boolean;
  invoice: boolean;
}

export interface addressDetailsInterface {
  name: string;
  street: string;
  city: string;
  postcode: string;
  country: string;
  areaCode: string;
  phone: string;
}

const initialState: paymentInterface = {
  addressDetails: {
    name: "",
    street: "",
    city: "",
    postcode: "",
    country: "",
    areaCode: "",
    phone: "",
  },
  addressCompleted: false,
  invoice: false,
};

interface SetAddressDetails {
  payload: {
    name: string;
    street: string;
    city: string;
    postcode: string;
    country: string;
    areaCode: string;
    phone: string;
  };
}

interface SetAddressCompleted {
  payload: boolean;
}

interface SetWillingInvoice {
  payload: boolean;
}

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setAddressDetails: (state, action: SetAddressDetails) => {
      // state.addressDetails = action.payload;
      state.addressDetails.name = action.payload.name;
      state.addressDetails.street = action.payload.street;
      state.addressDetails.city = action.payload.city;
      state.addressDetails.postcode = action.payload.postcode;
      state.addressDetails.country = action.payload.country;
      state.addressDetails.areaCode = action.payload.areaCode;
      state.addressDetails.phone = action.payload.phone;
    },
    setAddressCompleted: (state, action: SetAddressCompleted) => {
      state.addressCompleted = action.payload;
    },
    setWillingInvoice: (state) => {
      state.invoice = !state.invoice;
    },
  },
});

export const {
  setAddressDetails,
  setAddressCompleted,
  setWillingInvoice,
} = paymentSlice.actions;
