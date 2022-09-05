import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeAccess,
  changeAccessToken,
  changeRefreshToken,
} from "../../features/admin/adminAuthSlice";
import {
  changeCurrentPage,
  changePhrase,
} from "../../features/search/searchSlice";
import { AdminNavbarMenu } from "./AdminNavbarMenu";

export const AdminHeader = () => {
  const [toggleActive, setToggleActive] = useState(false);

  const [searchPhrase, setSearchPhrase] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formSubmit = () => {
    // @TODO zwalidować dane wejściowe

    dispatch(changePhrase(searchPhrase));
    dispatch(changeCurrentPage(1));

    // navigate("/search");
  };

  const handleCloseBtn = () => {
    changeAccess(false);
    dispatch(changeAccess(false));
    dispatch(changeAccessToken(""));
    dispatch(changeRefreshToken(""));
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
      <button className="btn" onClick={handleCloseBtn}>
        Log out
      </button>
    </div>
  );
};
