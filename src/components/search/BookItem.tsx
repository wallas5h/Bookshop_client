import { FaEye, FaHeart } from "react-icons/fa";


export const BookItem = () => {
  return (
    <div className="box-search-item">
      <div className="icons">
        <a href="#">< FaHeart /></a>
        <a href="#" ><FaEye /></a>
      </div>
      <div className="image">
        <img src="https://wallas5h.github.io/photos_bookshop/images/book-3.png" alt="" />
      </div>
      <div className="content">
        <h3>featured books</h3>
        <p>Abraham Lincoln</p>
        <div className="price">$15.99 <span>$20.99</span></div>
        <a href="#" className="btn">add to cart</a>
      </div>
    </div>
  )
}