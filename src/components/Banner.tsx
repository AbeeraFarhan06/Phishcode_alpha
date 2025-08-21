// This component renders the main banner of the website.
// It includes a background image and a hero banner with a call to action.

import { Box, useBreakpointValue } from "@chakra-ui/react";
import phishcode_banner_imgg from '../assets/png imgs/phishcode_banner_imgg.png';
import HeroBanner from "./HeroBanner";

const Banner = () => {
  // useBreakpointValue is a Chakra UI hook that allows you to specify different values for different breakpoints.
  const bgSize = useBreakpointValue({ base: "cover", md: "60% auto" });
  const height = useBreakpointValue({ base: "auto", md: "513px" });
  const bgPosition = useBreakpointValue({ base: "center", md: "right" });

  return (
    <Box
      bgImage={phishcode_banner_imgg}
      bgColor="#0E1726"
      bgSize={bgSize}
      bgPosition={bgPosition}
      bgRepeat="no-repeat"
      height={height}
      width="100%"
      position="relative"
    >
      {/* The HeroBanner component is centered within the banner. */}
      <Box maxWidth="1280px" mx="auto">
        <HeroBanner />
      </Box>
    </Box>
  );
};

export default Banner;

