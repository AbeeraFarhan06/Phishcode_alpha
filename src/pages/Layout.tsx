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

const Layout = () => {
  return (
    <>
      <Box maxWidth="1280px" mx="auto">
        <NavBar />
      </Box>
      <Banner />
      <Box maxWidth="1280px" mx="auto">
        <NavBar2 />
        <Box padding={5}>
          <Outlet />
        </Box>
        <Risk />
      </Box>
      <Impact />
      <Box maxWidth="1280px" mx="auto">
        <Approach />
      </Box>
      <Resources />
      <Box maxWidth="1280px" mx="auto">
        <Nextstep />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;