import { useNavigate } from "react-router-dom";

interface Props {
  bookId: string;
  title: string;
  count: number;
  price: number;
  nb: number;
}

export const OfferOne = ({ bookId, title, count, price, nb }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="offer-one" onClick={() => navigate(`/book/${bookId}`)}>
      <div className="book-short-info">
        <p className="book-title">{`${nb}. ${title}`}</p>
        <div className="book-count-price">{`${count} x $ ${price.toFixed(
          2
        )}`}</div>
      </div>

      <div className="book-price">
        <div>{`$${(count * price).toFixed(2)}`}</div>
      </div>
    </div>
  );
};
