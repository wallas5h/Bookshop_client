import { useState } from "react";
import { FaBook, FaCartArrowDown, FaHeart, FaSearch, FaUser } from "react-icons/fa";
import './header_1.scss';



export const Header_1 = () => {

  const [toggleActive, setToggleActive] = useState(false);


  return (
    <div className="header-1">
      <a href="/#home" className="logo"><FaBook />booksShop</a>
      <form action="" className={toggleActive ? "search-form active" : "search-form"}>
        <input type="search" name="" placeholder="search here..." />
        <label ><FaSearch /></label>
      </form>
      <div className="icons">
        <div id="search-btn" onClick={() => setToggleActive(prev => !prev)} ><FaSearch /></div>
        <a href="/wishlist" ><FaHeart /></a>
        <a href="/cart/resume" ><FaCartArrowDown /></a>
        <div id="login-btn"><FaUser /></div>
      </div>
    </div>

  )
}