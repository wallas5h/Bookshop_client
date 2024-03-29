import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
  AddBookContainer,
  AdminContainer,
  BookContainer,
  CartContainer,
  EditComponent,
  LoginContainer,
  OrderCanceled,
  OrderSuccess,
  Register,
  ResetPassword,
  SearchContainer,
  SetPassword,
  TransactionContainer,
  WishlistContainer,
} from "./components";

import { HomeContainer } from "./containers/home/HomeContainer";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/addbook" element={<AddBookContainer />} />
        <Route path="/book/:id" element={<BookContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/login/reset" element={<ResetPassword />} />
        <Route path="/password/set/:token" element={<SetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchContainer />} />
        <Route path="/wishlist" element={<WishlistContainer />} />
        <Route path="/payment/success" element={<OrderSuccess />} />
        <Route path="/payment/cancel" element={<OrderCanceled />} />
        <Route path="/transaction" element={<TransactionContainer />} />
        <Route path="/admin" element={<AdminContainer />} />
        <Route path="/edit/:id" element={<EditComponent />} />
      </Routes>
    </>
  );
};
