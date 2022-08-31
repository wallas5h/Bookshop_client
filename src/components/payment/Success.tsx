import { useEffect, useRef } from "react";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../config/api";
import { RootState } from "../../features/store";

export const OrderSuccess = () => {
  const navigate = useNavigate();
  const {
    addressDetails,
    addressCompleted,
    invoice,
    deliveryCost,
    deliveryName,
    paymentMethodName,
  } = useSelector((store: RootState) => store.payment);

  const { cartId, booksCost } = useSelector(
    (store: RootState) => store.cartWishlist
  );

  const isRunned = useRef(false);

  useEffect(() => {
    !isRunned.current &&
      (async () => {
        const res = await fetch(
          `${apiUrl}/checkout/checkout-success/${cartId}`,
          {
            method: "PUT",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              addressDetails,
              addressCompleted,
              invoice,
              deliveryCost,
              deliveryName,
              paymentMethodName,
              booksCost,
            }),
          }
        );

        if (!res.ok) {
          return;
        }
      })();

    return () => {
      isRunned.current = true;
    };
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/cart/change/status/${cartId}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        return;
      }
    })();

    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <div className="login-form-container-info">
      <div>
        <a href="/#home" className="close-login-btn">
          <AiOutlineClose />
        </a>
      </div>
      <h3 style={{ color: "green", fontSize: "6rem" }}>
        <AiFillCheckCircle />{" "}
      </h3>
      <div className="log-info">Your payment was successfull. </div>
      <span></span>
      <div>
        <button className="btn-login--info" onClick={() => navigate("/")}>
          Go to Shop
        </button>
      </div>
    </div>
  );
};
