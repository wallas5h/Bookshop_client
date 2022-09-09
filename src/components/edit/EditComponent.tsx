import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../features/store";
import { useCheckAccessRequest } from "../admin/admin.utils";
import { AdminLogin } from "../admin/AdminLogin";
import { EditBookForm } from "./EditBookForm";

export const EditComponent = () => {
  const { id } = useParams();
  const { access } = useSelector((store: RootState) => store.adminAuth);
  useCheckAccessRequest();

  return (
    <>
      {access ? (
        id ? (
          <EditBookForm bookId={id} />
        ) : (
          <h2>No book</h2>
        )
      ) : (
        <AdminLogin />
      )}
    </>
  );
};
