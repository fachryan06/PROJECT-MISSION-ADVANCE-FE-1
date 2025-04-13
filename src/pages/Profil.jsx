import Navbar from "../components/organisems/body/Navbar";
import MyProfil from "../components/organisems/profil/MyProfil";
import MyList from "../components/organisems/profil/MyList";
import Footer from "../components/organisems/body/Footer";

const Profil = () => {
  return (
    <div className="bg-mainBG h-full">
      <Navbar />
      <MyProfil />
      <MyList />
      <Footer />
    </div>
  );
};

export default Profil;
