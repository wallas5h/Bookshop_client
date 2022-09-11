import { useSelector } from "react-redux";
import { apiUrl } from "../../config/api";
import { RootState } from "../../features/store";

export const ResumeContainer = () => {
  const { cartId, booksCost } = useSelector(
    (store: RootState) => store.cartWishlist
  );

  const { deliveryCost, deliveryName, paymentMethodType } = useSelector(
    (store: RootState) => store.payment
  );
  const { currency } = useSelector((store: RootState) => store.defaultProps);

  const handleCheckout = async () => {
    try {
      const res = await fetch(`${apiUrl}/checkout/create-checkout-session`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deliveryCost,
          deliveryName,
          paymentMethodType,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        window.location = data.url;
      }

      // strzal do api w celu zmniejszenia liczby dostepnych ksiązek
    } catch (error) {
      window.alert("Transaction Failed.");
    }
  };

  return (
    <div className="checkout-resume-container">
      <div className="checkout-resume-box">
        <h3>Summary:</h3>

        <div className="checkout-value checkout-value-items">
          <div>
            <p>Value of items</p>
          </div>
          <div>
            <p>
              {`${currency} `} {booksCost.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="checkout-value checkout-value-delivery">
          <div>
            <p>Delivery</p>
          </div>
          <div>
            <p>
              {`${currency} `} {deliveryCost.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="checkout-value checkout-value-delivery-discount">
          <div>
            <p></p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="checkout-value-resume">
        <div>
          <p>PAYMENT AMOUNT</p>
        </div>
        <div>
          {`${currency} `} {(booksCost + deliveryCost).toFixed(2)}
        </div>
      </div>
      <button className="btn-checkout" onClick={handleCheckout}>
        Buy and pay
      </button>
    </div>
  );
};
