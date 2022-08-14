import { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BookResponseEntity } from "types";
import { apiUrl } from '../../config/api';
import { Footer } from "../footer/Footer";
import { Header_1 } from "../header_1/Header_1";
import './bookContainer.scss';

export const BookContainer = () => {

  const { id } = useParams();
  const [book, setBook] = useState<BookResponseEntity[]>([]);



  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${apiUrl}/book/${id}`)

        const data = await res.json();

        setBook(data);

      } catch (error) {
        console.log(error)
      }
    }
    )()
  }, []);

  const handleAddToCard = async (bookId: string) => {

    try {

      const res = await fetch(`${apiUrl}/cart/${id}`, {
        credentials: 'include',
        method: 'POST',
      });

      const data = await res.json();
      toast.info(data.message);

    } catch (error) {

    }
  }
  const handleAddToWishlist = async (bookId: string) => {

    try {

      const res = await fetch(`${apiUrl}/wishlist/${id}`, {
        credentials: 'include',
        method: 'POST',
      });

      const data = await res.json();
      toast.info(data.message);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header_1 />
      {
        book.map(item => (

          <section key={item._id}>
            <div className="book-container">

              <div className="image">
                <img src={item.imageURL} alt={item.title} />
              </div>

              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <div className="price">Price: ${item.newPrice} <span>${item.oldPrice}</span></div>
                <div className="stars">
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStarHalf /></i>
                </div>

                <div className="description">
                  <p>Description:</p>
                  <span> {item.description}</span>
                </div>


                <button disabled={item.count <= 0 ? true : false} onClick={() => handleAddToCard(item._id)} className="btn">add to cart</button>
                <a onClick={() => handleAddToWishlist(item._id)} className="btn--bookOne">add to wishlist</a>
              </div>

            </div>
          </section>
        ))

      }
      <Footer /></>
  )
}