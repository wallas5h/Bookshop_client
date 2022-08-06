

import { useEffect, useState } from 'react';
import { GetBooksFromCartResponse } from 'types';
import { apiUrl } from '../../config/api';
import { CartOne } from './CardOne';
import './cardResume.scss';
import { WishlistOne } from './WishlistOne';


export const CardResume = () => {

  const [booksFromCart, setBooksFromCart] = useState<GetBooksFromCartResponse[] | []>([]);

  const [countBooksChange, setCountBooksChange] = useState<number>(0);

  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/cart`,
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (!res.ok) {
        return;
      }

      const data = await res.json();

      if (data.books) {
        setBooksFromCart(data.books)
      }
      if (data.totalCost) {
        setTotalCost(data.totalCost)
      }
    })()

  }, [countBooksChange, totalCost])

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

    setCountBooksChange(prev => prev + 1)
  }

  const handleMinusFromCart = async (bookId: string) => {

    try {
      const res = await fetch(`${apiUrl}/cart/${bookId}`, {
        credentials: 'include',
        method: 'PUT',
      });

      // const data = await res.json();

    } catch (error) {
      console.log(error)
    }

    setCountBooksChange(prev => prev + 1)
  }

  const handleDeleteBookFromCart = async (bookId: string) => {

    console.log(`${apiUrl}/cart/${bookId}`)
    try {
      const res = await fetch(`${apiUrl}/cart/${bookId}`, {
        credentials: 'include',
        method: 'DELETE',
      });

      const data = await res.json();

      console.log(data)

    } catch (error) {
      console.log(error)
    }

    setCountBooksChange(prev => prev + 1)
  }

  return (
    <section>
      <div className="heading">
        <h1>Shopping Cart</h1>
      </div>
      <div className="container-shopping">
        <div className="shopping-lists-group">
          <div className="shopping-list--cart">

            <p><span> Books in Card</span></p>

            {booksFromCart.map((book, index) => (
              <CartOne key={index}
                bookId={book.id}
                bookCount={book.count}
                increaseCount={() => handleAddToCart(book.id)}
                decreaseCount={() => handleMinusFromCart(book.id)}
                deleteFromCart={handleDeleteBookFromCart}
              />
            ))}

          </div>

          <div className="shopping-list--cart--wishlisted">
            <p><span> Recently wishlisted</span></p>

            <WishlistOne
              imgSrc={"https://wallas5h.github.io/photos_bookshop/images/book-2.png"}
              title={"the art city"}
              author={"Lincoln"}
              count={1}
              currentPrice={20}
              oldPrice={25}
              currency={"$"}
            />
            <WishlistOne
              imgSrc={"https://wallas5h.github.io/photos_bookshop/images/book-2.png"}
              title={"the art city"}
              author={"Lincoln"}
              count={1}
              currentPrice={20}
              oldPrice={25}
              currency={"$"}
            />
            <WishlistOne
              imgSrc={"https://wallas5h.github.io/photos_bookshop/images/book-2.png"}
              title={"the art city"}
              author={"Lincoln"}
              count={1}
              currentPrice={20}
              oldPrice={25}
              currency={"$"}
            />

          </div>

        </div>
        <div className="shopping-checkout--container">
          <div className="shopping-checkout-box">
            <h4>Total:</h4>
            <p><span > $ {totalCost}</span></p>


            <button className="btn btn-block">Checkout</button>
          </div>
        </div>

      </div>


    </section>
  )
}

