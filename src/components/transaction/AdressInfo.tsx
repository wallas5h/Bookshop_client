import { useDispatch, useSelector } from "react-redux";
import {
  setAddressCompleted,
  setWillingInvoice,
} from "../../features/payment/paymentSlice";
import { RootState } from "../../features/store";

export const AddressInfo = () => {
  const { addressDetails, invoice } = useSelector(
    (store: RootState) => store.payment
  );

  const dispatch = useDispatch();

  return (
    <div className="order-info__container">
      <p>Your order will be delivered to this address.</p>
      <div>{addressDetails.name}</div>
      <div>{addressDetails.street}</div>
      <div>{`${addressDetails.postcode} ${addressDetails.city}`}</div>
      <div>{`+${addressDetails.areaCode}${addressDetails.phone}`}</div>
      <button
        className="btn btn-block"
        onClick={() => dispatch(setAddressCompleted(false))}
      >
        Edit addres
      </button>
      <h3>Do you need an invoice for your order?</h3>
      <label htmlFor="invoice" className="checkout-form-checkbox">
        <input
          className="checkout-checkbox"
          type="checkbox"
          name="invoice"
          id="invoice"
          checked={invoice}
          onChange={() => dispatch(setWillingInvoice())}
        />
        <p>I want to receive an invoice.</p>
      </label>
      <span>
        If you do not provide the NIP (Tax Identification Number) and other
        company details in this step, you may not receive an invoice for this
        purchase.
      </span>
    </div>
  );
};
