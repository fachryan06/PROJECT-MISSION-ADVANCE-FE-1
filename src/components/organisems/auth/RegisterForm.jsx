import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

import InputLabel from "../../molecules/InputField/InputLabel";
import ButtonSubmit from "../../atoms/Button/ButtonSubmit";

import ChillLogo from "../../../assets/images/auth/Logo.svg";
import EyesIcon from "../../../assets/images/auth/eye-off.svg";
import SSOIcon from "../../../assets/images/auth/sso-icon.svg";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value); // Memperbarui state email dengan benar
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password tidak sama");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExist = users.some((user) => user.username === username);

    if (isUserExist) {
      toast.error("Username sudah ada !");
    } else {
      users.push({ username, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      toast.success("Daftar akun berhasil");
      navigate("/");
    }
  };

  return (
    <div className="box-form-color w-auto rounded-2xl p-2">
      <div className="flex justify-center mt-4 ">
        <img src={ChillLogo} alt="image" />
      </div>

      <div className="flex justify-center text-center mt-4 text-white">
        <div className="flex flex-col">
          <h3 className="font-bold text-3xl">Daftar</h3>
          <p className="text-base">Selamat datang</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="p-4">
          <InputLabel
            htmlFor="username"
            id="username"
            name="username"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukan username"
            autoComplete="username"
          />

          <InputLabel
            htmlFor="username"
            id="email"
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Masukan email"
            autoComplete="email"
          />

          <div className="relative">
            <InputLabel
              htmlFor="password"
              id="password"
              name="password"
              label="Kata Sandi"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukan kata sandi"
              autoComplete="new-password"
            />
            <img
              src={EyesIcon}
              alt="image"
              className="absolute top-10 right-3"
            />
          </div>

          <div className="relative">
            <InputLabel
              htmlFor="password"
              id="confirmPassword"
              name="confirmPassword"
              label="Konfirmasi Kata Sandi"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Masukan kata sandi"
              autoComplete="new-password"
            />
            <img
              src={EyesIcon}
              alt="image"
              className="absolute top-10 right-3"
            />
          </div>

          <div className="flex justify-between text-sm mb-8">
            <div className="flex flex-row gap-1">
              <p className="text-gray">Sudah punya akun?</p>
              <Link to="/">
                <p className="text-white">Masuk</p>
              </Link>
            </div>
          </div>

          <ButtonSubmit type="submit" text="Daftar" buttonColor="bg-primary" />

          <p className="text-center text-sm text-gray mb-2">Atau</p>

          <div className="relative">
            <Link to="/beranda">
              <ButtonSubmit type="button" text="Daftar dengan Google" />
              <img
                src={SSOIcon}
                alt="image"
                className="absolute top-3 right-3/4 mr-[0.5rem]"
              />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
