import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

import Logo from "../../../assets/images/beranda/icon/logo.svg";
import Avatar from "../../../assets/images/beranda/avatar.png";

const Navbar = () => {
  const menu = [
    { name: "Series", path: "/beranda" },
    { name: "Film", path: "/beranda" },
    { name: "Daftar Saya", path: "/profil" },
  ];

  const navigate = useNavigate();

  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const dropDownRef = useRef(null);

  const toggleDropdown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setDropDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    toast.success("Akun berhasil keluar!");
    navigate("/");
  };

  return (
    <div>
      <header className="flex justify-between items-center text-center text-white text-xs md:text-lg p-6 w-full">
        <nav className="flex gap-2 md:gap-10">
          <Link to="/beranda">
            <img src={Logo} alt="image" className="w-[45px] md:w-[103.55px]" />
          </Link>
          <div className="flex justify-start items-center gap-[12px] md:gap-[80px]">
            {menu.map((item, index) => (
              <p key={index} className="hover:text-textPrimary">
                <Link to={item.path}>{item.name}</Link>
              </p>
            ))}
          </div>
        </nav>

        <div className="relative flex space-x-4" ref={dropDownRef}>
          <button onClick={toggleDropdown}>
            <img src={Avatar} alt="image" className="w-[40px] md:w-[100%]" />
          </button>

          {isDropDownOpen && (
            <div className="absolute right-0 top-10 w-48 bg-mainBG rounded-[2px] z-10">
              <Link
                to="/profil"
                className="block px-4 py-2 text-gray-800 hover:text-textPrimary hover:bg-blue focus:text-textPrimary"
                tabIndex="0"
              >
                <div className="flex column">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-textPrimary mr-2 mt-0 md:mt-2"
                  >
                    <path
                      d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z"
                      fill="currentColor"
                    />
                  </svg>
                  Profil Saya
                </div>
              </Link>

              <Link
                to="/beranda"
                className="block px-4 py-2 text-gray-800 hover:text-textPrimary focus:text-textPrimary"
              >
                <div className="flex column">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-textPrimary mr-2 mt-0 md:mt-1"
                  >
                    <path
                      d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z"
                      fill="currentColor"
                    />
                  </svg>
                  Ubah Premium
                </div>
              </Link>

              <a
                type="button"
                onClick={handleLogout}
                className="cursor-pointer block px-4 py-2 text-gray-800 hover:text-textPrimary focus:text-textPrimary"
              >
                <div className="flex column">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-textPrimary mr-2 mt-0 md:mt-2"
                  >
                    <path
                      d="M16 0H2C0.89 0 0 0.89 0 2V6H2V2H16V16H2V12H0V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 0.89 17.1 0 16 0ZM7.08 12.58L8.5 14L13.5 9L8.5 4L7.08 5.41L9.67 8H0V10H9.67L7.08 12.58Z"
                      fill="currentColor"
                    />
                  </svg>
                  Keluar
                </div>
              </a>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
