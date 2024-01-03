import styles from "./Users.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getUsersListData,
  setFavourites,
} from "../../store/features/usersList/usersListSlice";
import { Loader } from "../../components/loader/Loader";

export const Users = () => {
  const usersList = useSelector((state) => state.usersList.usersList);
  const loader = useSelector((state) => state.usersList.loader);
  console.log(usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersListData());
  }, [dispatch]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className={styles.users_container}>
          {usersList.map((user) => (
            <article key={user.id} className={styles.user_card}>
              <p>{user.name}</p>
              <img className={styles.user_img} src={user.img} alt={user.name} />
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
              <button
                className={styles.fav_btn}
                onClick={() => dispatch(setFavourites(user))}
              >
                Add to favourites
              </button>
            </article>
          ))}
        </div>
      )}
    </>
  );
};
