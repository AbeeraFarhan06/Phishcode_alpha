import { useState, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import phishcode_banner_imgg from "../../assets/png imgs/phishcode banner 3@5x.png";
import Container from "../../components/Container";
import { useNavigate } from "react-router-dom";

// Motion-enhanced Flex
const MotionFlex = motion(Flex);

const Banner = () => {
  const navigate = useNavigate();
  // Video state
  const [isPlaying, setIsPlaying] = useState(false);

  // Ref for scroll animation
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Responsive values
  const flexDirection = useBreakpointValue({
    base: "column",
    md: "column",
    lg: "row",
  });
  const headingFontSize = useBreakpointValue({ base: "2rem", md: "38px" });
  const headingLineHeight = useBreakpointValue({ base: "2.2rem", md: "3rem" });
  const headingMarginLeft = useBreakpointValue({ base: 0, md: 0 });
  const textMarginLeft = useBreakpointValue({ base: 0, md: 0 });
  const stackMarginLeft = useBreakpointValue({ base: 0, sm: 0 });
  const rightBoxMarginTop = useBreakpointValue({ base: 8, lg: 0 });
  const videoBoxHeight = useBreakpointValue({ base: "300px", md: "300px" });
  const bgSize = useBreakpointValue({ base: "cover", md: "60% auto" });
  const height = useBreakpointValue({ base: "auto", md: "auto" });
  const bgPosition = useBreakpointValue({ base: "center", md: "right" });

  return (
    <Box
      bgImage={phishcode_banner_imgg}
      bgColor="#0E1726"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      height={height}
      width="100vw"
      position="relative"
      // Add these properties to eliminate top spacing
      mt={0}
      pt={0}
    >
      {/* Container for content only */}
      <Container noPadding>
        <MotionFlex
          ref={ref}
          py={{ base: 4, md: 12 }} // Reduced from py={{ base: 8, md: 20 }}
          align="center"
          justify="space-between"
          flexDirection={flexDirection}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          // Ensure no top margin/padding on the flex container
          mt={0}
          pt={0}
        >
          {/* Left: Text + Buttons */}
          <Box flex="1" pr={{ base: 0, lg: 12 }}>
            <Text
              fontSize="14px"
              fontWeight="bold"
              color="white"
              mb={2}
              textTransform="uppercase"
              letterSpacing="wider"
            >
              OVERVIEW
            </Text>
            <Heading
              fontSize={headingFontSize}
              fontWeight="500"
              color="white"
              mb={{ base: 5, md: 7 }}
              ml={headingMarginLeft}
              lineHeight={headingLineHeight}
              mt={0} // Ensure no top margin on heading
            >
              Why PHISHCODE?
            </Heading>
            <Text
              color="white"
              mb={{ base: 3, md: 6 }}
              ml={textMarginLeft}
              fontWeight="thin"
              fontSize="18px"
            >
              Empowers your workforce to turn human risk into strength with
              AI-driven security, fostering trust, confidence, and resilience
              against evolving cyber threats.
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              ml={stackMarginLeft}
            >
              <Button
                bg="#2A446F"
                color="white"
                fontWeight="semibold"
                fontSize={{ base: "sm", md: "15px" }}
                h="50px"
                w="120px"
                px={6}
                py={6}
                borderRadius="md"
                _hover={{ bg: "#1e3458" }}
              >
                See how
              </Button>
            </Stack>
          </Box>
          {/* Right: Video Placeholder */}
          <Box
            flex="1"
            mt={rightBoxMarginTop}
            position="relative"
            borderRadius="xl"
            overflow="hidden"
            p={2}
            w="100%"
          >
            <Box
              bg="rgba(255, 255, 255, 0.1)"
              borderRadius="xl"
              borderColor="rgba(255, 255, 255, 0.1)"
              overflow="hidden"
              height={videoBoxHeight}
              position="relative"
            >
              {isPlaying ? (
                <Box
                  as="iframe"
                  title="Intro Video"
                  borderRadius="xl"
                  width="100%"
                  height="100%"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  border="0"
                />
              ) : (
                <Box
                  w="100%"
                  h="100%"
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                >
                  <Image w="100%" h="100%" objectFit="cover" />
                  <Button
                    position="absolute"
                    size="16px 16px"
                    top="15%"
                    left="9%"
                    transform="translate(-50%, -50%)"
                    bg="white"
                    borderRadius="8px"
                    p={2}
                    onClick={() => setIsPlaying(true)}
                    _hover={{ bg: "#e4e4e4ff" }}
                  >
                    <FaPlay color="#0E1726" size="15px" />
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </MotionFlex>
      </Container>
    </Box>
  );
};

export default Banner;
