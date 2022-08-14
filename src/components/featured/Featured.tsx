import { useEffect, useState } from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { BookResponseEntity } from "types";
import { apiUrl } from '../../config/api';
import { addChangeBetweenCartWishlist } from '../../features/cart/cartSlice';
import { RootState } from "../../features/store";
import './featured.scss';


export const Featured = () => {

  const [books, setBooks] = useState<BookResponseEntity[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${apiUrl}/book/feature`)

        const data = await res.json();

        setBooks(data);

      } catch (error) {
        console.log(error)
      }
    }
    )()
  }, [])


  return (
    <section className="featured" id="featured">
      <h1 className="heading"> <span>featured books</span> </h1>

      <div className="featured-slider">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation
          breakpoints={{
            450: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {books ? books.map(book => (
            <SwiperSlide key={book._id}>
              <FeatureBook  {...book} />
            </SwiperSlide>
          )) : 'no feature books'
          }



        </Swiper>


      </div>


    </section>
  )
}

interface Props {
  _id: string,
  title: string,
  categoty: string,
  author: string,
  description: string,
  imageURL: string,
  newPrice: number,
  oldPrice: number,
  count: number,
  active: boolean,
}

export const FeatureBook = ({ _id, title, author, imageURL, newPrice, oldPrice, count }: Props) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { changeBetweenCartWishlist } = useSelector((store: RootState) => store.cartWishlist);

  const handleAddToCart = async () => {

    try {
      const res = await fetch(`${apiUrl}/cart/${_id}`, {
        credentials: 'include',
        method: 'POST',
      });

      const data = await res.json();
      toast.info(data.message);

    } catch (error) {
      console.log(error)
    }
    dispatch(addChangeBetweenCartWishlist(changeBetweenCartWishlist + 1));
  }

  const handleAddToWishlist = async () => {

    try {
      const res = await fetch(`${apiUrl}/wishlist/${_id}`, {
        credentials: 'include',
        method: 'POST',
      });

      const data = await res.json();
      toast.info(data.message);

    } catch (error) {
      console.log(error)
    }
    dispatch(addChangeBetweenCartWishlist(changeBetweenCartWishlist + 1));
  }


  return (
    <>
      <div className="box box-search-item">
        <div className="icons">
          <a onClick={handleAddToWishlist}>< FaHeart /></a>
          <a onClick={() => navigate(`/book/${_id}`)}><FaEye /></a>
        </div>
        <div className="image">
          <img src={imageURL} alt={title} />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{author}</p>
          <div className="price">$ {newPrice} <span>${oldPrice}</span></div>
          <button disabled={count <= 0 ? true : false} className="btn" onClick={handleAddToCart}>add to cart</button>
        </div>
      </div>
    </>
  )
}