import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../features/store";

interface Props {
  bookId: string;
  title: string;
  count: number;
  price: number;
  nb: number;
}

export const OfferOne = ({ bookId, title, count, price, nb }: Props) => {
  const navigate = useNavigate();
  const { currency } = useSelector((store: RootState) => store.defaultProps);

  return (
    <div className="offer-one" onClick={() => navigate(`/book/${bookId}`)}>
      <div className="book-short-info">
        <p className="book-title">{`${nb}. ${title}`}</p>
        <div className="book-count-price">{`${count} x ${currency} ${price.toFixed(
          2
        )}`}</div>
      </div>

      <div className="book-price">
        <div>{`${currency} ${(count * price).toFixed(2)}`}</div>
      </div>
    </div>
  );
};
