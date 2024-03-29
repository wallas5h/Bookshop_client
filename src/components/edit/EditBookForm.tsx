import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BsCloudPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { apiUrl } from "../../config/api";
import { RootState } from "../../features/store";
import { AdminHeader } from "../admin/AdminHeader";
import { NotFoundBook } from "./NotFoundBook";

interface Props {
  bookId: string;
}

export const EditBookForm = ({ bookId }: Props) => {
  const [loading, setLoading] = useState(false);
  const [bookLoaded, setBookLoaded] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    category: "",
    author: "",
    description: "",
    imageURL: "",
    newPrice: 0,
    oldPrice: 0,
    count: 0,
    active: "",
  });

  useEffect(() => {
    setLoading(true);
    (async () => {
      if (!bookId) {
        console.log("no bookId");
        return;
      }
      try {
        const res = await fetch(`${apiUrl}/book/${bookId}`);

        const data = await res.json();

        if (!res.ok) return;

        if (data) {
          setFormData({
            _id: data[0]._id,
            title: data[0].title,
            category: data[0].category,
            author: data[0].author,
            description: data[0].description,
            imageURL: data[0].imageURL,
            newPrice: data[0].newPrice,
            oldPrice: data[0].oldPrice,
            count: data[0].count,
            active: data[0].active,
          });
        }

        if (res.ok) {
          setBookLoaded(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const { accessToken } = useSelector((store: RootState) => store.adminAuth);
  const dispatch = useDispatch();

  const {
    _id,
    title,
    category,
    author,
    description,
    imageURL,
    newPrice,
    oldPrice,
    count,
    active,
  } = formData;

  const change = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${apiUrl}/book/${bookId}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.message) {
        toast.info(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <>
      {bookLoaded ? (
        <div>
          <AdminHeader />
          <div className="add-book-container">
            <form onSubmit={formSubmit}>
              <h3>
                <BsCloudPlus /> Edit Book
              </h3>
              <div>
                <span>Book Id: {_id}</span>
              </div>
              <span>category</span>
              <select
                className="box"
                name="category"
                onChange={change}
                defaultValue={category}
              >
                <option value="">--Choice category--</option>
                <option value="horror">horror</option>
                <option value="criminals">criminals</option>
                <option value="fantasy">fantasy</option>
                <option value="children">children</option>
                <option value="travel">travel</option>
                <option value="cooking">cooking</option>
                <option value="poetry">poetry</option>
                <option value="school">school</option>
                <option value="romans">romans</option>
              </select>

              <span>Title</span>
              <input
                className="box"
                type="text"
                name="title"
                placeholder="Enter title"
                value={title}
                onChange={change}
                maxLength={50}
                required
              />
              <span>Author</span>
              <input
                className="box"
                type="text"
                name="author"
                placeholder="Enter author"
                value={author}
                onChange={change}
                maxLength={50}
                required
              />

              <span>Description</span>
              <textarea
                className="box"
                name="description"
                placeholder="Enter description"
                value={description}
                onChange={change}
                maxLength={1000}
              />
              <span>The newest price</span>
              <input
                className="box"
                type="number"
                name="newPrice"
                placeholder="Enter the newest price"
                value={newPrice}
                onChange={change}
                min="0"
                max={99999}
                required
              />
              <span>Old price</span>
              <input
                className="box"
                type="number"
                name="oldPrice"
                placeholder="Enter old price"
                value={oldPrice}
                onChange={change}
                min="0"
                max={99999}
              />
              <span>Count</span>
              <input
                className="box"
                type="number"
                name="count"
                placeholder="Enter count"
                value={count}
                onChange={change}
                min="0"
                max={99999}
              />
              <span>Image link</span>
              <input
                className="box"
                type="url"
                name="imageURL"
                placeholder="image url link"
                value={imageURL}
                onChange={change}
              />

              <span>Active</span>

              <select
                className="box"
                name="active"
                onChange={change}
                defaultValue={active}
              >
                <option value="true">true</option>
                <option value="false">false</option>
              </select>

              <button type="submit" className="btn btn-block">
                Save
              </button>
            </form>
          </div>
        </div>
      ) : (
        <NotFoundBook />
      )}
    </>
  );
};
