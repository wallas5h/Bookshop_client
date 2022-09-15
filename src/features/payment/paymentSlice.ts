import { createSlice } from "@reduxjs/toolkit";
import { PayMethodName, PayMethodType } from "../../utils/payment.utils";

export interface paymentInterface {
  addressDetails: {
    name: string;
    street: string;
    city: string;
    postcode: string;
    country: string;
    areaCode: string;
    phone: string;
    email: string;
  };
  addressCompleted: boolean;
  invoice: boolean;
  deliveryCost: number;
  deliveryName: string;
  paymentMethodName: string;
  paymentMethodType: string;
}

export interface addressDetailsInterface {
  name: string;
  street: string;
  city: string;
  postcode: string;
  country: string;
  areaCode: string;
  phone: string;
  email: string;
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
    email: "",
  },
  addressCompleted: false,
  invoice: false,
  deliveryCost: 0,
  deliveryName: "",
  paymentMethodName: "Payment card",
  paymentMethodType: "card",
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
    email: string;
  };
}

interface SetAddressCompleted {
  payload: boolean;
}

interface SetWillingInvoice {
  payload: boolean;
}

interface SetDeliveryCost {
  payload: number;
}
interface SetDeliveryName {
  payload: string;
}

interface SetPaymentMethodName {
  payload: string;
}

interface SetPaymentMethodType {
  payload: string;
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
      state.addressDetails.email = action.payload.email;
    },
    setAddressCompleted: (state, action: SetAddressCompleted) => {
      state.addressCompleted = action.payload;
    },
    setWillingInvoice: (state) => {
      state.invoice = !state.invoice;
    },
    setDeliveryCost: (state, action: SetDeliveryCost) => {
      state.deliveryCost = action.payload;
    },
    setDeliveryName: (state, action: SetDeliveryName) => {
      state.deliveryName = action.payload;
    },
    setPaymentMethodName: (state, action: SetPaymentMethodName) => {
      state.paymentMethodName = action.payload;
    },
    setPaymentMethodType: (state, action: SetPaymentMethodType) => {
      switch (action.payload) {
        case PayMethodName.card:
          state.paymentMethodType = PayMethodType.card;
          return;
        case PayMethodName.blik:
          state.paymentMethodType = PayMethodType.blik;
          return;
        case PayMethodName.transfer:
          state.paymentMethodType = PayMethodType.transfer;
          return;
        default:
          state.paymentMethodType = PayMethodType.card;
          break;
      }
    },
  },
});

export const {
  setAddressDetails,
  setAddressCompleted,
  setWillingInvoice,
  setDeliveryCost,
  setDeliveryName,
  setPaymentMethodName,
  setPaymentMethodType,
} = paymentSlice.actions;
