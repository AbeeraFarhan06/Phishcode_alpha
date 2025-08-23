// This is the main layout component for the application.
// It defines the overall structure of the page, including the header, footer, and content area.

import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
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

const Layout = () => {
  return (
    <>
      {/* The top navigation bar, spans full width with no side margins */}
      <NavBar />

      {/* The main banner, which spans the full width of the page. */}
      <Banner />

      {/* The second navigation bar spans full width, content container has responsive padding */}
      <NavBar2 />

      {/* Main content area - no container padding to allow full-width background elements */}
      <Box>
        <Overview />
        {/* The Outlet component renders the current route's component (e.g., HomePage). */}
        <Outlet />
      </Box>

      {/* Container for Risk component with responsive padding */}
      <Box
        width="95%"
        maxWidth="100%"
        mx="auto"
        px={{ base: "4", md: "6", lg: "8" }}
      >
        <Risk />
      </Box>

      {/* The Impact section, which spans the full width of the page. */}
      <Impact />

      {/* A container for the Approach component. */}
      <Box
        width="95%"
        maxWidth="100%"
        mx="auto"
        px={{ base: "4", md: "6", lg: "8" }}
      >
        <Approach />
      </Box>

      {/* The Resources section, which spans the full width of the page. */}
      <Resources />

      {/* A container for the Nextstep component. */}
      <Box
        width="95%"
        maxWidth="100%"
        mx="auto"
        px={{ base: "4", md: "6", lg: "8" }}
      >
        <Nextstep />
      </Box>

      {/* The footer, which spans the full width of the page. */}
      <Footer />
    </>
  );
};

export default Layout;
