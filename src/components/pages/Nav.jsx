import { useContext } from "react";
import { NavLink } from "react-router-dom";

import MyContext from "../../context/context";

const Nav = () => {
  const context = useContext(MyContext);
  const { auth } = context;

  return (
    <>
      <nav className="trending">
        <ul>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { color: isActive && "yellow" };
            }}
          >
            <li>Movies</li>
          </NavLink>

          {auth && (
            <NavLink
              to="/trending"
              style={({ isActive }) => {
                return { color: isActive && "yellow" };
              }}
            >
              <li>trending Movies</li>
            </NavLink>
          )}
          <NavLink
            to="/Player"
            style={({ isActive }) => {
              return { color: isActive && "yellow" };
            }}
          >
            <li>Audioplayer</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
