import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GetBooksFromCartResponse } from "types";
import { apiUrl } from "../../config/api";
import {
  addChangeBetweenCartWishlist,
  setCartId,
} from "../../features/cart/cartSlice";
import { RootState } from "../../features/store";
import { WishlistResume } from "../wishlist/WishlistResume";
import { CartOne } from "./CardOne";
import "./cardResume.scss";

export const CardResume = () => {
  const [booksFromCart, setBooksFromCart] = useState<
    GetBooksFromCartResponse[] | []
  >([]);

  const [countBooksChange, setCountBooksChange] = useState<number>(0);

  const [totalCost, setTotalCost] = useState<number>(0);

  const dispatch = useDispatch();
  const { changeBetweenCartWishlist } = useSelector(
    (store: RootState) => store.cartWishlist
  );

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/cart`, {
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
      setTotalCost(data.totalCost);
      setCartId(data.cartId);
    })();
  }, [countBooksChange, changeBetweenCartWishlist]);

  const refreshCartWishlist = () => {
    setCountBooksChange((prev) => prev + 1);
    dispatch(addChangeBetweenCartWishlist(changeBetweenCartWishlist + 1));
  };

  const handleAddToCart = async (bookId: string) => {
    try {
      const res = await fetch(`${apiUrl}/cart/${bookId}`, {
        credentials: "include",
        method: "POST",
      });

      if (!res.ok) {
        const data = await res.json();
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }

    refreshCartWishlist();
  };

  const handleMinusFromCart = async (bookId: string) => {
    try {
      const res = await fetch(`${apiUrl}/cart/${bookId}`, {
        credentials: "include",
        method: "PUT",
      });

      const data = await res.json();
      toast.error(data.message);
    } catch (error) {
      console.log(error);
    }

    refreshCartWishlist();
  };

  const handleDeleteBookFromCart = async (bookId: string) => {
    try {
      const res = await fetch(`${apiUrl}/cart/${bookId}`, {
        credentials: "include",
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }

    refreshCartWishlist();
  };

  const handleAddToWishlist = async (bookId: string) => {
    try {
      const res = await fetch(`${apiUrl}/wishlist/${bookId}`, {
        credentials: "include",
        method: "POST",
      });

      const data = await res.json();
      toast.info(data.message);
    } catch (error) {
      console.log(error);
    }
    handleDeleteBookFromCart(bookId);
    refreshCartWishlist();
  };

  const handleCheckout = async () => {
    try {
      const res = await fetch(`${apiUrl}/checkout/create-checkout-session`, {
        credentials: "include",
        method: "POST",
      });

      const data = await res.json();

      if (res.ok) {
        window.location = data.url;
      }
    } catch (error) {
      window.alert("Transaction Failed.");
    }
  };

  return (
    <section>
      <div className="heading">
        <h1>Shopping Cart</h1>
      </div>
      <div className="container-shopping">
        <div className="shopping-lists-group">
          <div className="shopping-list--cart">
            <h1 className="heading">
              <span> Books in Card</span>
            </h1>

            {booksFromCart.map((book, index) => (
              <CartOne
                key={index}
                bookId={book.bookId}
                bookCount={book.count}
                increaseCount={() => handleAddToCart(book.bookId)}
                decreaseCount={() => handleMinusFromCart(book.bookId)}
                deleteFromCart={handleDeleteBookFromCart}
                addToWishlist={handleAddToWishlist}
              />
            ))}
          </div>

          <div className="shopping-list--cart--wishlisted">
            <h1 className="heading heading-shopping">
              <span> Recently wishlisted</span>
            </h1>
            <WishlistResume />
          </div>
        </div>
        <div className="shopping-checkout--container">
          <div className="shopping-checkout-box">
            <h4>Total:</h4>
            <p>
              <span> $ {totalCost.toFixed(2)}</span>
            </p>

            <button className="btn btn-block" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
