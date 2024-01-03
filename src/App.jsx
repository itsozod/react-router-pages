import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import { Users } from "./pages/users/Users";
import { Add } from "./pages/add/Add";
import { Favourites } from "./pages/favourites/Favourites";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add" element={<Add />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
