import Footer from "../components/Footer";
import ResourcesBody from "./Resources/ResourcesBody";
import NavBar from "./Resources/NavBar";
import ResourcesHerobanner from "./Resources/ResourcesHerobanner";

const ResourcesPage = () => {
  return (
    <>
      <NavBar />
      <ResourcesHerobanner/>
      <ResourcesBody />
      <Footer />
    </>
  );
};

export default ResourcesPage;
