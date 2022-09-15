import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { useCheckAccessRequest } from "../admin/admin.utils";
import { AdminLogin } from "../admin/AdminLogin";
import "./addbook.scss";
import { AddBookForm } from "./AddBookForm";

export const AddBookContainer = () => {
  const { accessToken, refreshToken, access } = useSelector(
    (store: RootState) => store.adminAuth
  );
  useCheckAccessRequest();

  return <>{access ? <AddBookForm /> : <AdminLogin />}</>;
};
