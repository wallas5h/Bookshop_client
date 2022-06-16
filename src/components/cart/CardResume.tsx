

import { CardOne } from './CardOne';
import './cardResume.scss';
import { WishlistOne } from './WishlistOne';
export const CardResume = () => {



  return (
    <section>
      <div className="heading">
        <h1>Shopping Cart</h1>
      </div>
      <div className="container-shopping">
        <div className="shopping-lists-group">
          <div className="shopping-list--cart">

            <p><span> Books in Card</span></p>

            <CardOne
              imgSrc={"https://wallas5h.github.io/photos_bookshop/images/book-1.png"}
              title={"the art city"}
              author={"Lincoln"}
              count={1}
              currentPrice={20}
              oldPrice={25}
              currency={"$"}
            />
            <CardOne
              imgSrc={"https://wallas5h.github.io/photos_bookshop/images/book-1.png"}
              title={"the art city"}
              author={"Lincoln"}
              count={1}
              currentPrice={20}
              oldPrice={25}
              currency={"$"}
            />
            <CardOne
              imgSrc={"https://wallas5h.github.io/photos_bookshop/images/book-1.png"}
              title={"the art city"}
              author={"Lincoln"}
              count={1}
              currentPrice={20}
              oldPrice={25}
              currency={"$"}
            />




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
            <p><span > $ 100</span></p>


            <button className="btn btn-block">Checkout</button>
          </div>
        </div>

      </div>


    </section>
  )
}

