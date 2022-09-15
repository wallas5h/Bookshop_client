import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetBooksFromWishlistResponse } from 'types';
import { apiUrl } from '../../config/api';
import { addChangeBetweenCartWishlist } from '../../features/cart/cartSlice';
import { RootState } from "../../features/store";
import { WishlistOne } from './WishlistOne';
import './wishlistResume.scss';


export const WishlistResume = () => {

  const [booksFromWishlist, setBooksFromWishlist] = useState<GetBooksFromWishlistResponse[] | []>([]);

  const [countBooksChange, setCountBooksChange] = useState<number>(0);

  const dispatch = useDispatch();
  const { changeBetweenCartWishlist } = useSelector((store: RootState) => store.cartWishlist);

  useEffect(() => {
    (
      async () => {
        const res = await fetch(`${apiUrl}/wishlist`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          }
        })

        if (!res.ok) {
          return;
        }
        const data = await res.json();

        if (data.books) {
          setBooksFromWishlist(data.books)
        }
      }
    )()
  }, [countBooksChange, changeBetweenCartWishlist]);

  const refreshCartWishlist = () => {
    setCountBooksChange(prev => prev + 1)
    dispatch(addChangeBetweenCartWishlist(changeBetweenCartWishlist + 1));
  }

  const handleDeleteBookFromWishlist = async (bookId: string) => {

    try {
      const res = await fetch(`${apiUrl}/wishlist/${bookId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      })

    } catch (error) {
      console.log(error)
    } finally {
      refreshCartWishlist();
    }
  }

  const handleAddToCart = async (bookId: string) => {

    try {
      const res = await fetch(`${apiUrl}/cart/${bookId}`, {
        credentials: 'include',
        method: 'POST',
      });

      // const data = await res.json();

    } catch (error) {
      console.log(error)
    }

    handleDeleteBookFromWishlist(bookId);
    refreshCartWishlist();
  }

  return (
    <section>
      <div className="heading">
        <h1>Wishlist</h1>
      </div>
      <div className="container-wishlist">
        <div className="wishlist-lists-group">

          <div className="wishlist-list--cart">

            {booksFromWishlist.map((book, index) => (
              <WishlistOne
                key={index}
                bookId={book.bookId}
                availability={book.availability}
                deleteFromWishlist={handleDeleteBookFromWishlist}
                addToCart={handleAddToCart}
              />
            ))}

          </div>

        </div>

      </div>


    </section>
  )
}

