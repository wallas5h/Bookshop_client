import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const OrderCanceled = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/transaction");
    }, 5000);
  }, []);

  return (
    <div className="login-form-container-info">
      <div>
        <a href="/#home" className="close-login-btn">
          <AiOutlineClose />
        </a>
      </div>
      <h3 style={{ color: "red", fontSize: "6rem" }}>
        <MdCancel />{" "}
      </h3>
      <div className="log-info">
        Your payment was canceled. Try again later.{" "}
      </div>
      <span></span>
      <div>
        <button
          className="btn-login--info"
          onClick={() => navigate("/transaction")}
        >
          Go back
        </button>
      </div>
    </div>
  );
};
