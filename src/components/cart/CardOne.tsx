import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BookResponseEntity } from "types";
import { apiUrl } from "../../config/api";
import { RootState } from "../../features/store";

interface Props2 {
  imgSrc: string;
  title: string;
  author: string;
  count: number;
  currentPrice: number;
  oldPrice: number;
}

interface Props {
  bookId: string;
  bookCount: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  deleteFromCart: (id: string) => void;
  addToWishlist: (id: string) => void;
}

export const CartOne = ({
  bookId,
  bookCount,
  increaseCount,
  decreaseCount,
  deleteFromCart,
  addToWishlist,
}: Props) => {
  const navigate = useNavigate();
  const { currency } = useSelector((store: RootState) => store.defaultProps);

  const [bookDetails, setBookDetails] = useState<Props2>({
    imgSrc: "",
    title: "",
    author: "",
    count: 0,
    currentPrice: 0,
    oldPrice: 0,
  });

  const { imgSrc, title, author, count, currentPrice, oldPrice } = bookDetails;

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/book/${bookId}`);

      if (!res.ok) {
        return;
      }

      const data: BookResponseEntity[] = await res.json();
      const { imageURL, title, author, count, newPrice, oldPrice } = data[0];

      setBookDetails({
        imgSrc: imageURL,
        title,
        author,
        count,
        currentPrice: newPrice,
        oldPrice,
      });
    })();
  }, [bookCount]);

  return (
    <div className="cart-one">
      <img
        src={imgSrc}
        alt={`book ${title}`}
        onClick={() => navigate(`/book/${bookId}`)}
      />

      <div className="book-short-info">
        <h4 className="book-title" onClick={() => navigate(`/book/${bookId}`)}>
          {title}
        </h4>
        <span className="book-author">{author}</span>
      </div>

      <div className="book-count">
        <div className="book-count--container">
          <button
            disabled={bookCount <= 0 ? true : false}
            className="book-count--controller"
            onClick={decreaseCount}
          >
            -{" "}
          </button>
          <span className="book-count--result">{bookCount} </span>
          <button
            disabled={bookCount <= count ? false : true}
            className="book-count--controller"
            onClick={increaseCount}
          >
            +{" "}
          </button>
        </div>
      </div>

      <span className="book-quantity">
        Quantity avail.: {count <= 0 ? <em>out of store</em> : count}
      </span>

      <div className="book-price">
        <div>Price:</div>
        <span className="book-price-current">
          {`${currency} `} {currentPrice.toFixed(2)}{" "}
        </span>
        <span className="book-price-old">
          {`${currency} `} {oldPrice.toFixed(2)}{" "}
        </span>
      </div>

      <div className="book-action">
        <span onClick={() => deleteFromCart(bookId)}>Remove</span>
        <span onClick={() => addToWishlist(bookId)}>Move to Wishlist</span>
      </div>
    </div>
  );
};
