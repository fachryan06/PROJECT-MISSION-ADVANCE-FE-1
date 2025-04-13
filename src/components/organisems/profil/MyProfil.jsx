import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import ButtonSM from "../../atoms/Button/ButtonSM";
import Button from "../../atoms/Button/Button";
import InputFieldProfil from "../../molecules/InputField/InputFieldProfil";
import ButtonXL from "../../atoms/Button/ButtonXL";

import Foto from "../../../assets/images/profil/icon/Foto.svg";
import Upload from "../../../assets/images/profil/icon/file-upload-outline.svg";
import Edit from "../../../assets/images/profil/icon/edit.svg";
import Warning from "../../../assets/images/profil/icon/Warning.svg";

const MyProfil = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loginUser"));
    if (loggedInUser) {
      setUserData(loggedInUser);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((user) =>
      user.username === userData.username ? userData : user
    );

    localStorage.setItem("loginUser", JSON.stringify(userData));
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success("Perubahan data berhasil disimpan!");
  };

  return (
    <div>
      <section className="aboslute text-white h-30 lg:h-[100vh] w-auto overflow-hidden p-6">
        <h3 className="text-[20px] lg:text-[32px] font-bold">Profil Saya</h3>
        <div className="flex flex-col-reverse lg:flex-row mt-[32px] gap-[80px]">
          <div className="flex flex-col w-auto h-full">
            <div className="flex flex-row mt-2 gap-[24px] h-full">
              <img src={Foto} alt="image" />

              <div className="flex flex-col justify-center items-center">
                <ButtonSM
                  buttonColor="bg-none"
                  buttonHover="hover:bg-white"
                  text="Ubah Foto"
                  borderColor="border-bluePrimary"
                  textColor="text-bluePrimary"
                />
                <div className="flex items-center gap-1">
                  <img src={Upload} alt="image" />
                  <p className="text-[12px] lg:text-[14px]">Maksimal 2MB</p>
                </div>
              </div>
            </div>

            <form className="mt-[32px]" onSubmit={handleSave}>
              <InputFieldProfil
                htmlFor="username"
                id="username"
                name="username"
                type="text"
                borderColor="bg-OtherPaper"
                borderHoverColor="border-[#E7E3FC3B]"
                label="Nama Pengguna"
                textInputColor="text-white"
                autoComplete="username"
                value={userData.username}
                onChange={handleChange}
              >
                <img
                  src={Edit}
                  alt="image"
                  className="absolute top-5 right-3"
                />
              </InputFieldProfil>

              <InputFieldProfil
                htmlFor="email"
                id="email"
                name="email"
                type="text"
                borderColor="bg-OtherPaper"
                borderHoverColor="border-[#E7E3FC3B]"
                label="Email"
                value={userData.email}
                textInputColor="text-textLight"
                autoComplete="email"
                disabled
              />

              <InputFieldProfil
                htmlFor="password"
                id="password"
                name="password"
                type="password"
                borderColor="bg-OtherPaper"
                borderHoverColor="border-[#E7E3FC3B]"
                label="Kata Sandi"
                textInputColor="text-white"
                autoComplete="new-password"
                value={userData.password}
                onChange={handleChange}
              >
                <img
                  src={Edit}
                  alt="image"
                  className="absolute top-5 right-3"
                />
              </InputFieldProfil>

              <Button
                buttonColor="bg-info400"
                buttonHover="hover:bg-infoHover"
                text="Simpan"
              />
            </form>
          </div>

          <div className="flex flex-row justify-between w-[320px] lg:w-[558px] h-[191px] lg:h-[193px] bg-primary rounded-[12px] text-white">
            <div className="flex p-4 justify-center items-start">
              <img src={Warning} alt="img" />
            </div>

            <div className="flex flex-col p-4 mb-[12px]">
              <h4 className="font-bold text-[18x] lg:text-[24px]">
                Saat ini anda belum berlangganan
              </h4>

              <p className="text-[14px] lg:text-[18px] ">
                Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                Kamu!
              </p>

              <div className="flex justify-end mt-[20px]">
                <ButtonXL
                  buttonColor="bg-secondary"
                  buttonHover="hover:bg-gray"
                  text="Mulai Berlangganan"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProfil;
