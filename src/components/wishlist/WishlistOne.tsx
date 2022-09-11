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
  availability: boolean;
  deleteFromWishlist: (id: string) => void;
  addToCart: (id: string) => void;
}

export const WishlistOne = ({
  bookId,
  availability,
  deleteFromWishlist,
  addToCart,
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
  }, []);

  return (
    <div className="cart-one">
      <img
        onClick={() => navigate(`/book/${bookId}`)}
        src={imgSrc}
        alt={`book ${title}`}
      />

      <div className="book-short-info">
        <h4 className="book-title" onClick={() => navigate(`/book/${bookId}`)}>
          {title}{" "}
        </h4>
        <span className="book-author">{author}</span>
        <span className="book-quantity">
          Quantity avail.: {count <= 0 ? <em>out of store</em> : count}
        </span>
      </div>

      <div className="book-price">
        <div>Price:</div>
        <span className="book-price-current">
          {`${currency} `}
          {currentPrice.toFixed(2)}
        </span>
        <span className="book-price-old">
          {`${currency} `}
          {oldPrice.toFixed(2)}
        </span>
      </div>

      <div className="book-action">
        <span
          className="btn btn-block"
          onClick={() => deleteFromWishlist(bookId)}
        >
          Remove
        </span>
        <span
          aria-disabled={bookDetails.count <= 0 ? true : false}
          className="btn btn-block"
          onClick={() => addToCart(bookId)}
        >
          Add to Cart
        </span>
      </div>
    </div>
  );
};
