import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Beranda from "../pages/Beranda";
import Profil from "../pages/Profil";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/beranda" element={<Beranda />} />

        <Route path="/profil" element={<Profil />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default Router;
