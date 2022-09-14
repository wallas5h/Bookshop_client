import { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { BookResponseEntity } from "types";
import { apiUrl } from "../../config/api";
import "./home.scss";

import { stand } from "./imports";

export const Home = () => {
  const [books, setBooks] = useState<BookResponseEntity[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${apiUrl}/book/feature`);

        const data = await res.json();

        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>upto 75% off</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid
              ex minima at!
            </p>
            <a href="/search" className="btn">
              shop now
            </a>
          </div>

          <div className="books-slider">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2500,
              }}
              breakpoints={{
                450: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
            >
              {books
                ? books.map((book) => (
                    <SwiperSlide key={book._id}>
                      <a href={`book/${book._id}`}>
                        <img src={book.imageURL} alt={book.title} />
                      </a>
                    </SwiperSlide>
                  ))
                : ""}
              <img src={stand} className="stand" alt="stand" />
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
