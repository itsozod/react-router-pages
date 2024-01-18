import styles from "./Add.module.css";
import { postUserListData } from "../../store/features/usersList/usersListSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Add = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState("");
  const [value, setValue] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleValue = (e) => {
    const { name, value } = e.target;
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleChangeImg = async (e) => {
    try {
      const file = e.target.files[0];
      const base64 = await fileToBase64(file);
      setImg(base64);
    } catch (error) {
      console.error("Error converting file to base64:", error);
    }
  };
  const submitData = (e) => {
    e.preventDefault();
    if (!img || value.name === "" || value.age === "" || value.email === "") {
      alert("Fill all inputs!!!");
      return;
    }
    const obj = {
      img: img,
      name: value.name,
      age: value.age,
      email: value.email,
    };

    dispatch(postUserListData(obj));
    setTimeout(() => {
      alert("New user was added successfully");
    }, 500);
  };
  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={submitData}>
        <h2 style={{ textAlign: "center" }}>Info</h2>
        <label>Image</label>
        <input type="file" onChange={handleChangeImg} />
        {img && <img src={img} style={{ width: "100px" }}></img>}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={value.name}
          onChange={(e) => handleValue(e)}
        />
        <label>Age:</label>
        <input
          type="text"
          name="age"
          placeholder="Enter your age "
          value={value.age}
          onChange={(e) => handleValue(e)}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={value.email}
          onChange={(e) => handleValue(e)}
        />
        <button type="submit" className={styles.submit_btn}>
          Submit
        </button>
      </form>
    </div>
  );
};
