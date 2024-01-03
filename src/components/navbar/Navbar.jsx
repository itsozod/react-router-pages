import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/users",
    name: "Users",
  },
  {
    path: "/add",
    name: "Add",
  },
  {
    path: "/favourites",
    name: "Favourites",
  },
];

export const Navbar = () => {
  const favourites = useSelector((state) => state.usersList.favourites).length;
  const favouritesList = useSelector((state) => state.usersList.favourites);
  console.log(favourites);
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li className={styles.list}>
          {navLinks.map((link, id) => (
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? { color: "#15cdfc", borderBottom: "2px solid white" }
                  : {};
              }}
              className={styles.link}
              key={id}
              to={link.path}
            >
              {link.name}
            </NavLink>
          ))}
        </li>
        <li className={styles.favCount}>
          {favouritesList.length ? favourites : ""}
        </li>
      </ul>
    </nav>
  );
};
