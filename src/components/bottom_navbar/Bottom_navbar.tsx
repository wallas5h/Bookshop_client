import { FaBlog, FaComment, FaHome, FaList } from "react-icons/fa";
import './bottom_navbar.scss';

export const Bottom_navbar = () => {

  return (
    <nav className="bottom-navbar">
      <a href="/#home"><FaHome /></a>
      <a href="/#featured" ><FaList /></a>
      <a href="/#review" ><FaComment /></a>
      <a href="/#blogs"><FaBlog /></a>
    </nav>

  )
}