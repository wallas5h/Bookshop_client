import { useSelector } from "react-redux";
import { apiUrl } from "../../config/api";
import { RootState } from "../../features/store";

export const ResumeContainer = () => {
  const { cartId, totalCost } = useSelector(
    (store: RootState) => store.cartWishlist
  );

  const handleCheckout = async () => {
    try {
      const res = await fetch(`${apiUrl}/checkout/create-checkout-session`, {
        credentials: "include",
        method: "POST",
      });

      const data = await res.json();

      if (res.ok) {
        window.location = data.url;
      }
    } catch (error) {
      window.alert("Transaction Failed.");
    }
  };

  return (
    <div className="checkout-resume-container">
      <div className="shopping-checkout-box">
        <h4>Total:</h4>
        <p>
          <span> $ {totalCost.toFixed(2)}</span>
        </p>

        <button className="btn btn-block" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};
