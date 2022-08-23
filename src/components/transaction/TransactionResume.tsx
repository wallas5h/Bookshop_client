import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { AddressForm } from "./AddressForm";
import { AddressInfo } from "./AdressInfo";
import { DeliveryContainer } from "./DeliveryContainer";
import { OffersContainer } from "./OffersContainer";
import { ResumeContainer } from "./ResumeContainer";
import "./transaction.scss";

export const TransactionResume = () => {
  const { addressCompleted } = useSelector((store: RootState) => store.payment);
  const { cartId, totalCost } = useSelector(
    (store: RootState) => store.cartWishlist
  );

  return (
    <div className="transaction__container">
      <h3>Recipent's details</h3>
      {addressCompleted ? (
        <>
          <AddressInfo />
          <OffersContainer />
          <DeliveryContainer />
          <ResumeContainer />
        </>
      ) : (
        <AddressForm />
      )}
    </div>
  );
};
