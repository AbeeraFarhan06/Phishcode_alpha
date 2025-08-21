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

const Layout = () => {
  return (
    <>
       <NavBar />
       <Banner />
       <NavBar2 />
       <Box padding={5}>
        <Outlet />
       </Box>
       <Impact />
       <Approach />
       <Resources />
       <Nextstep />
       <Footer/>
    </>
  );
};

export default Layout;