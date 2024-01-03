import { useSelector, useDispatch } from "react-redux";
import styles from "./Favourites.module.css";
import { deleteFavourites } from "../../store/features/usersList/usersListSlice";

export const Favourites = () => {
  const favourites = useSelector((state) => state.usersList.favourites);
  console.log(favourites);
  const dispatch = useDispatch();

  return (
    <>
      {favourites.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>No favourites yet!!!</h1>
      ) : (
        <div className={styles.fav_container}>
          {favourites.map((fav) => (
            <article className={styles.fav_card} key={fav.id}>
              <p>{fav.name}</p>
              <img className={styles.fav_img} src={fav.img} alt={fav.name} />
              <p>Age: {fav.age}</p>
              <p>Email: {fav.email}</p>
              <button onClick={() => dispatch(deleteFavourites(fav.id))}>
                Remove
              </button>
            </article>
          ))}
        </div>
      )}
    </>
  );
};
