import { Box } from "@chakra-ui/react";
import Navbar from "./Security/NavBar";
import Banner from "./Security/Banner";
import NavBar2 from "./Security/NavBar2";
import SecureYourFuture from "./Security/SecureYourFuture";
import Footer from "./Security/Footer";
import ContactBarSticky from "./Security/ContactBarSticky";
import Resources from "./Security/Resources";
import SeeTheBenefits from "./Security/SeeTheBenefits";

const SecurityPage = () => {
  return (
    <Box>
      <Navbar />
      <Banner />
      <NavBar2 />
      <ContactBarSticky />
      <SecureYourFuture />
      <Resources />
      <SeeTheBenefits />
      <Footer />
    </Box>
  );
};

export default SecurityPage;
