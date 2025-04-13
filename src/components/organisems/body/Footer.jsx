import { useState } from "react";

import Logo from "../../../assets/images/beranda/icon/logo-xl.svg";
import chevronRight from "../../../assets/images/beranda/icon/chevron-right.svg";
const Footer = () => {
  const [isOpenGenre, setisOpenGenre] = useState(false);
  const [isOpenBantuan, setisOpenBantuan] = useState(false);

  const toggleDropdownGenre = () => {
    setisOpenGenre(!isOpenGenre);
  };

  const toggleDropdownBantuan = () => {
    setisOpenBantuan(!isOpenBantuan);
  };

  return (
    <div>
      <footer className="p-6 w-full h-full border-t-[1px] border-t-[#E7E3FC3B] mt-[27px] md:mt-[120px] text-white">
        <div className="justify-between mt-[20px] hidden md:flex">
          <div className="flex flex-col justify-start text-gray h-full">
            <img src={Logo} alt="image" className="mb-[16px] md:mb-[26px]" />
            <p className="text-gray">&#64;2023 Chill All Rights Reserved.</p>
          </div>

          <div className="flex flex-col justify-start w-auto text-[16px]">
            <div className="flex w-auto text-white">
              <p className="font-bold text">Genre</p>
            </div>

            <div className="flex">
              <div className="flex flex-col mr-[28px] text-gray">
                <a className="cursor-pointer">Aksi</a>
                <a className="cursor-pointer">Anak-anak </a>
                <a className="cursor-pointer">Anime</a>
                <a className="cursor-pointer">Britania</a>
              </div>

              <div className="flex flex-col mr-[28px] text-gray">
                <a className="cursor-pointer">Drama</a>
                <a className="cursor-pointer">Fantasi Ilmiah & Fantasi</a>
                <a className="cursor-pointer">Kejahatan</a>
                <a className="cursor-pointer">KDrama</a>
              </div>

              <div className="flex flex-col mr-[28px] text-gray">
                <a className="cursor-pointer">Komedi</a>
                <a className="cursor-pointer">Petualangan</a>
                <a className="cursor-pointer">Perang</a>
                <a className="cursor-pointer">Romantis</a>
              </div>

              <div className="flex flex-col text-gray">
                <a className="cursor-pointer">Sains & Alam</a>
                <a className="cursor-pointer">Thriller</a>
              </div>
            </div>
          </div>

          <div className="column justify-start w-auto">
            <div className="flex w-auto text-white">
              <p className="font-bold">Bantuan</p>
            </div>

            <div className="flex text-gray">
              <div className="flex flex-col mr-[28px]">
                <a className="cursor-pointer">FAQ</a>
                <a className="cursor-pointer">Kontak Kami </a>
                <a className="cursor-pointer">Privasi</a>
                <a className="cursor-pointer">Syarat & Ketentuan</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col justify-start mb-[20px] flex md:hidden">
          <div className="mb-[40px] text-[12px]">
            <div className="w-[84px]">
              <img src={Logo} alt="image" className="mb-[16px] md:mb-[26px]" />
            </div>
            <p className="text-gray">&#64;2023 Chill All Rights Reserved.</p>
          </div>

          <div className="flex flex-col text-white text-[16px] w-full">
            <button
              onClick={toggleDropdownGenre}
              className="flex flex-row justify-between w-full cursor-pointer mb-[8px]"
            >
              <div className="flex text-white">
                <div>
                  <p>Genre</p>
                </div>
              </div>

              <div className="flex ">
                <img
                  src={chevronRight}
                  alt="image"
                  className={`${
                    isOpenGenre ? "rotate-90" : "rotate-0"
                  } transition-transform duration-200`}
                />
              </div>
            </button>
            <div
              className={`${
                isOpenGenre
                  ? "max-h-40 opacity-100 hidden"
                  : "max-h-0 opacity-0 block"
              }transition-all duration-300 ease-in-out flex overflow-hidden`}
            >
              <div className="flex justify-between gap-4 text-gray text-[14px]">
                <div className="flex flex-col ">
                  <a className="cursor-pointer">Aksi</a>
                  <a className="cursor-pointer">Anak-anak</a>
                  <a className="cursor-pointer">Anime</a>
                  <a className="cursor-pointer">Britania</a>
                </div>

                <div className="flex flex-col">
                  <a className="cursor-pointer">Drama</a>
                  <a className="cursor-pointer">Fantasi Ilmiah & Fantasi</a>
                  <a className="cursor-pointer">Kejehatan</a>
                  <a className="cursor-pointer">KDrama</a>
                </div>

                <div className="flex flex-col">
                  <a className="cursor-pointer">Komedi</a>
                  <a className="cursor-pointer">Petualangan</a>
                  <a className="cursor-pointer">Perang</a>
                  <a className="cursor-pointer">Romantis</a>
                </div>

                <div className="flex flex-col">
                  <a className="cursor-pointer">Sains & Alam</a>
                  <a className="cursor-pointer">Thriller</a>
                </div>
              </div>
            </div>

            <button
              onClick={toggleDropdownBantuan}
              className="flex flex-row justify-between w-full cursor-pointer"
            >
              <div className="flex">
                <div>
                  <p>Bantuan</p>
                </div>
              </div>

              <div className="flex ">
                <img
                  src={chevronRight}
                  alt="image"
                  className={`${
                    isOpenBantuan ? "rotate-90" : "rotate-0"
                  } transition-transform duration-200`}
                />
              </div>
            </button>

            <div
              className={`${
                isOpenBantuan
                  ? "max-h-40 opacity-100 hidden"
                  : "max-h-0 opacity-0 block"
              }transition-all duration-300 ease-in-out flex overflow-hidden`}
            >
              <div className="flex justify-between gap-4 text-gray text-[14px]">
                <div className="flex flex-col ">
                  <a className="cursor-pointer">FAQ</a>
                  <a className="cursor-pointer">Kontak Kami</a>
                  <a className="cursor-pointer">Privasi</a>
                  <a className="cursor-pointer">Syarat & Ketentuan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
