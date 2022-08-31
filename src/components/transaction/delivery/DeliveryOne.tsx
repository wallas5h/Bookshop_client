import { useDispatch, useSelector } from "react-redux";
import { setDeliveryName } from "../../../features/payment/paymentSlice";
import { RootState } from "../../../features/store";
import "./delivery.scss";

interface Props {
  title: string;
  price: number;
  change: (price: number) => void;
}

export const DeliveryOne = ({ title, price, change }: Props) => {
  const dispatch = useDispatch();

  const { deliveryCost, deliveryName } = useSelector(
    (store: RootState) => store.payment
  );

  const handleClick = () => {
    dispatch(setDeliveryName(title));
    change(price);
  };

  return (
    <div className="deliver-one" onClick={handleClick}>
      <div className="deliver-short-info">
        <div className="deliver-title">
          <div
            className={
              deliveryName === title
                ? "circle_outside selected"
                : "circle_outside"
            }
          >
            <div
              className={deliveryName === title ? "circle-inside" : ""}
            ></div>
          </div>
          <p>{title}</p>
        </div>
        <div className="deliver-localisation-description">
          <div className="deliver-localisation-distance"></div>
        </div>
      </div>

      <div className="delivery-price">
        <div>{`$${price.toFixed(2)}`}</div>
      </div>
    </div>
  );
};
