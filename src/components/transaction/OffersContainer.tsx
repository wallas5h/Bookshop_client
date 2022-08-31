import { useEffect, useState } from "react";
import { GetBooksFromCartResponse } from "types";
import { apiUrl } from "../../config/api";
import { OfferOne } from "./OfferOne";

export const OffersContainer = () => {
  const [booksFromCart, setBooksFromCart] = useState<
    GetBooksFromCartResponse[] | []
  >([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/cart/checkout`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        return;
      }

      const data = await res.json();

      setBooksFromCart(data.books);
    })();
  }, []);

  return (
    <div className="offers__container">
      <h3>Offers </h3>

      {booksFromCart.map((book, index) => (
        <OfferOne
          key={index}
          nb={index + 1}
          bookId={book.bookId}
          price={book.price}
          count={book.count}
          title={book.title}
        />
      ))}
    </div>
  );
};
