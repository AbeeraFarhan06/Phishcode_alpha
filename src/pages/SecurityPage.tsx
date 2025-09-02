import { Box } from "@chakra-ui/react";
import Navbar from "./Security/NavBar";
import Banner from "./Security/Banner";
import NavBar2 from "./Security/NavBar2";
import SecureYourFuture from "./Security/SecureYourFuture";
import Footer from "./Security/Footer";
import SecurityInfoComponent from "./Security/SecurityInfoComponent";
import ContactBarSticky from "./Security/ContactBarSticky";
import VitalResources from "./Security/VitalResources";
import ZeroTrust from "./Security/ZeroTrust";
import LatestInnovations from "./Security/LatestInnovations";

const SecurityPage = () => {
  return (
    <Box>
      <Navbar />
      <Banner />
      <NavBar2 />
      <ContactBarSticky/>
      <SecureYourFuture />
      <ZeroTrust />
      <VitalResources/>
      <LatestInnovations/>
      <SecurityInfoComponent />

      <Footer />
    </Box>
  );
};

export default SecurityPage;
