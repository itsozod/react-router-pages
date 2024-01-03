import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <span className={styles.loader}></span>
    </div>
  );
};