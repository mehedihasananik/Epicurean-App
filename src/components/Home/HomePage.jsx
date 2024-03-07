import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import OverView from "./OverView/OverView";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <OverView />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default HomePage;
