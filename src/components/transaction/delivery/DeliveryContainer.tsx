import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDeliveryCost,
  setDeliveryName,
} from "../../../features/payment/paymentSlice";
import { RootState } from "../../../features/store";
import { DeliveryName, DeliveryPrice } from "../../../utils/payment.utils";
import "./delivery.scss";
import { DeliveryOne } from "./DeliveryOne";

export const DeliveryContainer = () => {
  const { deliveryCost, deliveryName } = useSelector(
    (store: RootState) => store.payment
  );
  const dispatch = useDispatch();

  const changeDeliveryCost = (price: number) => {
    dispatch(setDeliveryCost(price));
  };

  useEffect(() => {
    dispatch(setDeliveryCost(DeliveryPrice.courier));
    dispatch(setDeliveryName(DeliveryName.courier));
  }, []);

  return (
    <div className="delivery__container">
      <h3>Delivery options</h3>
      {/* <div className="delivery-group">
        <h4>Pick-up point</h4>
        <DeliveryOne
          title={DeliveryName.paczkomat}
          price={DeliveryPrice.paczkomat}
          change={changeDeliveryCost}
        />
      </div> */}

      <div className="delivery-group">
        <h4>Delivery address</h4>
        <DeliveryOne
          title={DeliveryName.courier}
          price={DeliveryPrice.courier}
          change={changeDeliveryCost}
        />
      </div>
    </div>
  );
};
