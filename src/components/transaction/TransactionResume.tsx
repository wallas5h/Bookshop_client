import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { AddressForm } from "./AddressForm";
import { AddressInfo } from "./AdressInfo";
import { DeliveryContainer } from "./delivery/DeliveryContainer";
import { MethodPayment } from "./methodPayment/MethodPaymentContainer";
import { OffersContainer } from "./OffersContainer";
import { ResumeContainer } from "./ResumeContainer";
import "./transaction.scss";

export const TransactionResume = () => {
  const { addressCompleted } = useSelector((store: RootState) => store.payment);
  const { cartId, booksCost } = useSelector(
    (store: RootState) => store.cartWishlist
  );
  const isRunned = useRef(false);

  useEffect(() => {
    !isRunned.current &&
      window.alert(
        "This is testing version of payments. Don't enter your real credit's cart data. Products will never be deliver."
      );

    return () => {
      isRunned.current = true;
    };
  }, []);

  return (
    <div className="transaction__container">
      {addressCompleted ? (
        <>
          <div className="checkout-lists-group">
            <AddressInfo />
            <OffersContainer />
            <DeliveryContainer />
            <MethodPayment />
          </div>

          <ResumeContainer />
        </>
      ) : (
        <AddressForm />
      )}
    </div>
  );
};
