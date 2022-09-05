import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

export const AdminNavbarMenu = () => {
  const [toggleActive, setToggleActive] = useState(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#333"
            size={43}
            onClick={() => setToggleMenu(false)}
            cursor="pointer"
          />
        ) : (
          <RiMenu3Line
            color="#333"
            size={33}
            onClick={() => setToggleMenu(true)}
            cursor="pointer"
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container ">
            <div className="navbar-menu_container-links">
              <div>
                <a href="/addbook" onClick={() => setToggleMenu(true)}>
                  AddBook
                </a>
              </div>
              <div>
                <a href="/admin" onClick={() => setToggleMenu(true)}>
                  admin
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
