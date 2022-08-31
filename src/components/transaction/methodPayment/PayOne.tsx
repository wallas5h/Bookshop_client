import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../features/store";

interface Props {
  name: string;
  img: string;
  change: (name: string) => void;
}

export const PayOne = ({ name, img, change }: Props) => {
  const { paymentMethodName } = useSelector(
    (store: RootState) => store.payment
  );
  const dispatch = useDispatch();

  return (
    <div
      className={
        paymentMethodName === name
          ? "pay-one-container selected"
          : "pay-one-container"
      }
      onClick={() => change(name)}
    >
      <div className="wrapper">
        <div>
          <img src={img} alt={name} />
        </div>
        <span>{name}</span>
      </div>
    </div>
  );
};
