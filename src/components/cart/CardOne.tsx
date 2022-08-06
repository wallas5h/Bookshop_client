import { useEffect, useState } from "react";
import { BookResponseEntity } from "types";
import { apiUrl } from '../../config/api';


interface Props2 {
  imgSrc: string
  title: string
  author: string
  count: number
  currentPrice: number
  oldPrice: number
  currency: string
}

interface Props {
  bookId: string,
  bookCount: number,
  increaseCount: () => void,
  decreaseCount: () => void,
  deleteFromCart: (id: string) => void,
}

export const CartOne = ({ bookId, bookCount, increaseCount, decreaseCount, deleteFromCart }: Props) => {

  const [bookDetails, setBookDetails] = useState<Props2>({
    imgSrc: '',
    title: '',
    author: '',
    count: 0,
    currentPrice: 0,
    oldPrice: 0,
    currency: '$',
  })

  const { imgSrc, title, author, count, currentPrice, oldPrice, currency } = bookDetails;

  // useEffect(() => {
  //   console.log(bookId)
  // }, [])

  useEffect(() => {
    (
      async () => {
        const res = await fetch(`${apiUrl}/book/${bookId}`,
          {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            }
          });

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
          currency: '$',
        })

      }
    )()
  }, [bookCount])

  return (
    <div className="cart-one">

      <img src={imgSrc} alt={`book ${title}`} />


      <div className="book-short-info">
        <h4 className="book-title">{title}</h4>
        <span className="book-author">{author}</span>
      </div>

      <div className="book-count">
        <h4>Count:</h4>
        <div className="book-count--container">
          <button disabled={bookCount <= 0 ? true : false} className="book-count--controller" onClick={decreaseCount}>- </button>
          <span className="book-count--result">{bookCount} </span>
          <button disabled={bookCount <= count ? false : true} className="book-count--controller" onClick={increaseCount}>+ </button>
        </div>

      </div>

      <div className="book-price">
        <div>Price:</div>
        <span className="book-price-current">{currency}{currentPrice} </span>
        <span className="book-price-old">{currency}{oldPrice} </span>
      </div>

      <div className="book-action">
        <span onClick={() => deleteFromCart(bookId)}>Remove</span>
        <span>Move to Wishlist</span>
      </div>

    </div>
  )
}