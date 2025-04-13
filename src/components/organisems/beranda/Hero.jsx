import Button from "../../atoms/Button/Button";
import ButtonXL from "../../atoms/Button/ButtonXL";
import Frame from "../../../assets/images/beranda/icon/frame.svg";
import VolumeOFF from "../../../assets/images/beranda/icon/volume-off.svg";

import Information from "../../../assets/images/beranda/icon/information-outline.svg";

const Hero = () => {
  return (
    <div>
      <section className="aboslute text-white h-30 lg:h-[100vh] w-auto overflow-hidden">
        <div className="hero-background mx-auto h-[28vh] lg:h-[90vh]">
          <div className="relative -bottom-5  md:-bottom-80 left-0 p-6">
            <article className="mb-6 md:mb-10 w-full max-w-sm md:max-w-3xl">
              <h1 className="font-bold text-2xl md:text-5xl mb-5">
                Duty After School
              </h1>
              <p className="line-clamp-2 md:line-clamp-none text-xs md:text-lg text-justify md:text-left">
                Sebuah benda tak dikenal mengambil alih dunia. Dalam
                keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak
                tentara, termasuk siswa sekolah menengah. Mereka pun segera
                menjadi pejuang garis depan dalam perang.
              </p>
            </article>
            <footer className="flex justify-between items-center">
              <div className="flex flex-row gap-2.5 ">
                <Button
                  buttonColor="bg-info"
                  buttonHover="hover:bg-infoHover"
                  text="Mulai"
                />

                <ButtonXL
                  buttonColor="bg-secondary"
                  buttonHover="hover:bg-primary"
                  text="Selengkapnya"
                  src={Information}
                />
                <img
                  src={Frame}
                  alt="image"
                  className="w-[25px] mb-2 md:w-[50px]"
                />
              </div>

              <div>
                <img
                  src={VolumeOFF}
                  alt="image"
                  className="w-[25px] mb-2 md:w-[50px]"
                />
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
