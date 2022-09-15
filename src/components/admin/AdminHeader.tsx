import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl } from "../../config/api";
import {
  changeAccess,
  changeAccessToken,
  changeRefreshToken,
} from "../../features/admin/adminAuthSlice";
import {
  changeCurrentPage,
  changePhrase,
} from "../../features/search/searchSlice";
import { RootState } from "../../features/store";
import { AdminNavbarMenu } from "./AdminNavbarMenu";

export const AdminHeader = () => {
  const [toggleActive, setToggleActive] = useState(false);
  const { accessToken, refreshToken, access } = useSelector(
    (store: RootState) => store.adminAuth
  );

  const [searchPhrase, setSearchPhrase] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formSubmit = () => {
    // @TODO zwalidować dane wejściowe

    dispatch(changePhrase(searchPhrase));
    dispatch(changeCurrentPage(1));
  };

  const handleLogoutBtn = () => {
    (async () => {
      try {
        const res = await fetch(`${apiUrl}/admin/logout`, {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          toast.error(data.message);
        }

        if (res.ok) {
          toast.info(data.message);

          dispatch(changeAccess(false));
          dispatch(changeAccessToken(""));
          dispatch(changeRefreshToken(""));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div className="header-1">
      <AdminNavbarMenu />
      <form
        onSubmit={formSubmit}
        className={toggleActive ? "search-form active" : "search-form"}
      >
        <input
          type="text"
          name="searchPhrase"
          value={searchPhrase}
          onChange={(e) => setSearchPhrase(String(e.target.value))}
          placeholder="Search by title or author"
        />
        <label onClick={formSubmit}>
          <FaSearch />
        </label>
      </form>
      <div className="icons">
        <div id="search-btn" onClick={() => setToggleActive((prev) => !prev)}>
          <FaSearch />
        </div>
      </div>
      <button className="btn" onClick={handleLogoutBtn}>
        Log out
      </button>
    </div>
  );
};
