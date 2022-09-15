import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { useCheckAccessRequest } from "./admin.utils";
import { AdminLogin } from "./AdminLogin";
import { AdminResume } from "./AdminResume";

export const AdminContainer = () => {
  const { access } = useSelector((store: RootState) => store.adminAuth);
  useCheckAccessRequest();

  return <>{access ? <AdminResume /> : <AdminLogin />}</>;
};
