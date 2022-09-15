import { FaEye, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { apiUrl } from "../../config/api";
import { addChangeBetweenCartWishlist } from "../../features/cart/cartSlice";
import { RootState } from "../../features/store";
// import "./featured.scss";

interface Props {
  _id: string;
  title: string;
  categoty: string;
  author: string;
  description: string;
  imageURL: string;
  newPrice: number;
  oldPrice: number;
  count: number;
  active: boolean;
}

export const FeatureBook = ({
  _id,
  title,
  author,
  imageURL,
  newPrice,
  oldPrice,
  count,
}: Props) => {
  const navigate = useNavigate();
  const { currency } = useSelector((store: RootState) => store.defaultProps);

  const dispatch = useDispatch();
  const { changeBetweenCartWishlist } = useSelector(
    (store: RootState) => store.cartWishlist
  );

  const handleAddToCart = async () => {
    try {
      const res = await fetch(`${apiUrl}/cart/${_id}`, {
        credentials: "include",
        method: "POST",
      });

      const data = await res.json();
      toast.info(data.message);
    } catch (error) {
      console.log(error);
    }
    dispatch(addChangeBetweenCartWishlist(changeBetweenCartWishlist + 1));
  };

  const handleAddToWishlist = async () => {
    try {
      const res = await fetch(`${apiUrl}/wishlist/${_id}`, {
        credentials: "include",
        method: "POST",
      });

      const data = await res.json();
      toast.info(data.message);
    } catch (error) {
      console.log(error);
    }
    dispatch(addChangeBetweenCartWishlist(changeBetweenCartWishlist + 1));
  };

  return (
    <>
      <div className="box box-search-item">
        <div className="icons">
          <a onClick={handleAddToWishlist}>
            <FaHeart />
          </a>
          <a onClick={() => navigate(`/book/${_id}`)}>
            <FaEye />
          </a>
        </div>
        <div className="image">
          <img src={imageURL} alt={title} />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{author}</p>
          <div className="price--feature">
            {`${currency} `} {newPrice.toFixed(2)}{" "}
            <span>
              {`${currency} `}
              {oldPrice.toFixed(2)}
            </span>
          </div>
          <button
            disabled={count <= 0 ? true : false}
            className="btn"
            onClick={handleAddToCart}
          >
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};
