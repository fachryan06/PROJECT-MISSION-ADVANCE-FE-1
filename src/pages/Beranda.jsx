import Navbar from "../components/organisems/body/Navbar";
import Hero from "../components/organisems/beranda/Hero";
import Watching from "../components/organisems/beranda/Watching";
import Rating from "../components/organisems/beranda/Rating";
import Trending from "../components/organisems/beranda/Trending";
import Realese from "../components/organisems/beranda/Realese";
import Footer from "../components/organisems/body/Footer";

const Beranda = () => {
  return (
    <div>
      <div className="bg-mainBG h-full">
        <Navbar />
        <Hero />
        <Watching />
        <Rating />
        <Trending />
        <Realese />
        <Footer />
      </div>
    </div>
  );
};

export default Beranda;
