


import { WishlistOne } from './WishlistOne';
import './wishlistResume.scss';


export const WishlistResume = () => {

  return (
    <section>
      <div className="heading">
        <h1>Wishlist</h1>
      </div>
      <div className="container-wishlist">
        <div className="wishlist-lists-group">

          <div className="wishlist-list--cart">

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

      </div>


    </section>
  )
}

