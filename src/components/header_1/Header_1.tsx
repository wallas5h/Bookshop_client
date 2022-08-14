import { useState } from "react";
import { FaBook, FaCartArrowDown, FaHeart, FaSearch, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeCurrentPage, changePhrase } from "../../features/search/searchSlice";
import './header_1.scss';



export const Header_1 = () => {

  const [toggleActive, setToggleActive] = useState(false);

  const [searchPhrase, setSearchPhrase] = useState<string>('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formSubmit = () => {

    // @TODO zwalidować dane wejściowe

    dispatch(changePhrase(searchPhrase));
    dispatch(changeCurrentPage(1));

    navigate('/search');
  }

  return (
    <div className="header-1">
      <a href="/#home" className="logo"><FaBook />booksShop</a>
      <form onSubmit={formSubmit} className={toggleActive ? "search-form active" : "search-form"}>
        <input
          type="text"
          name="searchPhrase"
          value={searchPhrase}
          onChange={(e) => setSearchPhrase(String(e.target.value))}
          placeholder="Search by title or author" />
        <label onClick={formSubmit} ><FaSearch /></label>
      </form>
      <div className="icons">
        <div id="search-btn" onClick={() => setToggleActive(prev => !prev)} ><FaSearch /></div>
        <a href="/wishlist" ><FaHeart /></a>
        <a href="/cart" ><FaCartArrowDown /></a>
        <a href="/login"  ><FaUser /></a>
      </div>
    </div>

  )
}