


interface Props {
  imgSrc: string
  title: string
  author: string
  count: number
  currentPrice: number
  oldPrice: number
  currency: string
}

export const WishlistOne = ({ imgSrc, title, author, count, currentPrice, oldPrice, currency }: Props) => {

  return (
    <div className="cart-one">

      <img src="https://wallas5h.github.io/photos_bookshop/images/book-3.png" alt={`book ${title}`} />


      <div className="book-short-info">
        <h4 className="book-title">{title}</h4>
        <span className="book-author">{author}</span>
      </div>

      <div className="book-price">
        <div>Price:</div>
        <span className="book-price-current">{currency}{currentPrice} </span>
        <span className="book-price-old">{currency}{oldPrice} </span>

      </div>

      <div className="book-action">
        <span className="btn btn-block">Add to Cart</span>
        <span className="btn btn-block">Remove</span>
      </div>

    </div>
  )
}