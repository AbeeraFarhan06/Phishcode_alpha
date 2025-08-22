// This is the main layout component for the application.
// It defines the overall structure of the page, including the header, footer, and content area.

import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import NavBar2 from '../components/NavBar2';
import Impact from '../components/Impact';
import Approach from '../components/Approach';
import Resources from '../components/Resources';
import Nextstep from '../components/NextStep';
import Footer from '../components/Footer';
import Risk from '../components/Risk';
import Overview from '../components/Overview';

const Layout = () => {
  return (
    <>
      {/* The top navigation bar, contained within a centered box. */}
      <NavBar />

      {/* The main banner, which spans the full width of the page. */}
      <Banner />

      {/* A container for the second navigation bar, the main content (Outlet), and the Risk component. */}
      <Box maxWidth="100%" mx="auto">
        <NavBar2 />
        <Overview />
        <Box padding={5}>
          {/* The Outlet component renders the current route's component (e.g., HomePage). */}
          <Outlet />
        </Box>
        <Risk />
      </Box>

      {/* The Impact section, which spans the full width of the page. */}
      <Impact />

      {/* A container for the Approach component. */}
      <Box maxWidth="100%" mx="auto">
        <Approach />
      </Box>

      {/* The Resources section, which spans the full width of the page. */}
      <Resources />

      {/* A container for the Nextstep component. */}
      <Box maxWidth="100%" mx="auto">
        <Nextstep />
      </Box>

      {/* The footer, which spans the full width of the page. */}
      <Footer />
    </>
  );
};

export default Layout;