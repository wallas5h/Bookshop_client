import { AdminHeader } from "../admin/AdminHeader";

export const NotFoundBook = () => {
  return (
    <>
      <AdminHeader />
      <h2
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          fontWeight: "400",
          color: "darkred",
        }}
      >
        Error: Book not found{" "}
      </h2>
    </>
  );
};
