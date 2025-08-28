import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import Impact from "../components/Impact";
import Approach from "../components/Approach";
import Resources from "../components/Resources";
import Nextstep from "../components/NextStep";
import Footer from "../components/Footer";
import Risk from "../components/Risk";
import Overview from "../components/Overview";
import ContactBarSticky from "../components/ContactBarSticky";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <NavBar2 />
      <Overview/>
      <ContactBarSticky/>
      <Outlet />
      <Risk />
      <Impact />
      <Approach />
      <Resources />
      <Nextstep />
      <Footer />
    </>
  );
};

export default Layout;