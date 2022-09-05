import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl } from "../../config/api";
import { addChangeBetweenDb } from "../../features/admin/adminAuthSlice";
import { RootState } from "../../features/store";
import "./searchOne.scss";

interface Props {
  book: {
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
  };
}

export const AdminSearchOne = (props: Props) => {
  const {
    _id,
    title,
    categoty,
    description,
    author,
    imageURL,
    newPrice,
    oldPrice,
    count,
    active,
  } = props.book;

  const navigate = useNavigate();

  const { currency } = useSelector((store: RootState) => store.defaultProps);
  const { accessToken, changeBetwenDb } = useSelector(
    (store: RootState) => store.adminAuth
  );
  const dispatch = useDispatch();

  const deleteFromDb = async (id: string) => {
    try {
      const res = await fetch(`${apiUrl}/book/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        dispatch(addChangeBetweenDb(changeBetwenDb + 1));
      }

      if (data.message) {
        toast.info(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editInDb = (id: string) => {};

  return (
    <div className="cart-one">
      <img
        onClick={() => navigate(`/book/${_id}`)}
        src={imageURL}
        alt={`book ${title}`}
      />

      <div className="book-short-info">
        <h4 className="book-title" onClick={() => navigate(`/book/${_id}`)}>
          {title}{" "}
        </h4>
        <span className="book-author">{author}</span>
        <span className="book-quantity">
          Quantity avail.:{" "}
          {count <= 0 ? <em style={{ color: "red" }}>out of store</em> : count}
        </span>
      </div>

      <div className="book-price">
        <div>Price:</div>
        <span className="book-price-current">
          {currency} {newPrice.toFixed(2)}
        </span>
        <span className="book-price-old">
          {currency} {oldPrice.toFixed(2)}
        </span>
      </div>

      <div className="book-action">
        <span className="btn btn-block" onClick={() => deleteFromDb(_id)}>
          Delete
        </span>
        <span className="btn btn-block" onClick={() => editInDb(_id)}>
          Edit
        </span>
      </div>
    </div>
  );
};
