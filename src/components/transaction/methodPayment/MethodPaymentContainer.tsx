import { useEffect } from "react";
import { useDispatch } from "react-redux";
import blik from "../../../assets/payment/blik.png";
import gpay from "../../../assets/payment/gpay.svg";
import transfer from "../../../assets/payment/transfer.svg";
import visa from "../../../assets/payment/visa.svg";
import {
  setPaymentMethodName,
  setPaymentMethodType,
} from "../../../features/payment/paymentSlice";
import { PayMethodName } from "../../../utils/payment.utils";
import "./payMethod.scss";
import { PayOne } from "./PayOne";

const PayMethodImg = {
  card: visa,
  gpay: gpay,
  blik: blik,
  transfer: transfer,
};

export const MethodPayment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPaymentMethodName(PayMethodName.card));
  }, []);

  const handleChange = (name: string) => {
    dispatch(setPaymentMethodName(name));
    dispatch(setPaymentMethodType(name));
  };

  return (
    <div className="pay-method__container">
      <h3>Payment method</h3>
      <div className="pay-method-group">
        <PayOne
          name={PayMethodName.card}
          img={PayMethodImg.card}
          change={handleChange}
        />
        {/* <PayOne
          name={PayMethodName.gpay}
          img={PayMethodImg.gpay}
          change={handleChange}
        /> */}
        <PayOne
          name={PayMethodName.blik}
          img={PayMethodImg.blik}
          change={handleChange}
        />
        <PayOne
          name={PayMethodName.transfer}
          img={PayMethodImg.transfer}
          change={handleChange}
        />
      </div>
    </div>
  );
};
