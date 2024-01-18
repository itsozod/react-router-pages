import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home_container}>
      <h1>This is a home page</h1>
      <div className={styles.btn_container}>
        <button onClick={() => navigate("/users")} className={styles.btn}>
          Users page
        </button>
        <button onClick={() => navigate("/add")} className={styles.btn}>
          Add page
        </button>
        <button onClick={() => navigate("/favourites")} className={styles.btn}>
          Favourites page
        </button>
      </div>
    </div>
  );
};
