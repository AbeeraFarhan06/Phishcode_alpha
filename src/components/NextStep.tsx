// This component renders the next steps section of the page.
// It includes a call to action to try the platform for free, as well as links to contact sales and watch a demo.

import React from "react";
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import email from "../assets/icons/email.svg";
import demo from "../assets/icons/demo.svg";
import vecteezy_young from '../assets/vecteezy_young.png'
import Container from "./Container";

// Motion-enhanced versions of Chakra UI components.
const MotionBox = motion(Box);
const MotionGridItem = motion(Box);

const Nextstep = () => {
  // useBreakpointValue is a Chakra UI hook that allows you to specify different values for different breakpoints.
  const paddingX = useBreakpointValue({ base: 4, md: 8 });
  const topSectionPaddingLeft = useBreakpointValue({ base: 4, md: 6 });
  const topSectionPaddingRight = useBreakpointValue({ base: 4, md: 4 });
  const topSectionFlexWrap = useBreakpointValue({ base: "wrap", lg: "nowrap" });
  const leftSidePaddingRight = useBreakpointValue({ base: 0, md: 6 });
  const headingFontSize = useBreakpointValue({ base: "2xl", md: "36px" });
  const textFontSize = useBreakpointValue({ base: "md", md: "16px" });
  const imageH = useBreakpointValue({ base: "240px", md: "320px", lg: "390px" });
  const imageMarginLeft = useBreakpointValue({ base: 0, md: 10 });
  const gridTemplateColumns = useBreakpointValue({ base: "1fr", md: "repeat(2, 1fr)" });
  const gridGap = useBreakpointValue({ base: 4, md: 8 });
  const gridItemPadding = useBreakpointValue({ base: 4, md: 8 });
  const flexDirection = useBreakpointValue({ base: "column-reverse", md: "row" });
  const imageMarginBottom = useBreakpointValue({ base: 8, md: 0 });

  return (
    <Container>
      <Box
        id="Next-steps"
        px={paddingX}
        py={20}
      >
        {/* Top Section */}
        <MotionBox
          bg="white"
          borderRadius="2xl"
          boxShadow="md"
          pl={topSectionPaddingLeft}
          pr={topSectionPaddingRight}
          gap={12}
          display="flex"
          alignItems="center"
          flexWrap={topSectionFlexWrap}
          flexDirection={flexDirection}
          initial={{ opacity: 0, y: 40 }} // Initial animation state.
          whileInView={{ opacity: 1, y: 0 }} // Animate to this state when the component is in view.
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }} // The duration of the animation.
        >
          {/* Left Side (Text) */}
          <Box flex="1" pr={leftSidePaddingRight}>
            <Text color="black" fontWeight="semibold" mb={16} mt={4} fontSize="12px">
              Next steps
            </Text>
            <Heading fontSize={headingFontSize} mt={16} mb={4} fontWeight="semibold" lineHeight="1.3" color="gray.700">
              Try AI-powered Phishing Attack Simulation Platform
            </Heading>
            <Text mb={16} fontSize={textFontSize} color="gray.700">
              Deliver exceptional, proactive cybersecurity awareness that resolves customers security gaps the first time.
            </Text>
            <Button
              bg="#0E1726"
              color="white"
              fontWeight="semibold"
              fontSize={{ base: "sm", md: "14px" }}
              px={4}
              py={7}
              mt={10}
              mb={5}
              borderRadius="lg"
              _hover={{ bg: "gray.800" }}
            >
              Try for free
            </Button>
          </Box>
          {/* Right Side (Image) */}
          <Box flex="1" borderRadius="xl" overflow="hidden" mb={imageMarginBottom}>
            <Image
              src={vecteezy_young}
              alt="Phishing Simulation"
              objectFit="cover"
              w="90%"
              h={imageH}
              borderRadius="xl"
              ml={imageMarginLeft}
            />
          </Box>
        </MotionBox>
        {/* Bottom Section */}
        <Grid
          templateColumns={gridTemplateColumns}
          gap={gridGap}
          mt={12}
        >
          {[
            {
              icon: email,
              title: "Email Phishcode Representatives",
              desc: "Available M-F 6 AM to 3 PM PT.",
              button: "Contact now",
            },
            {
              icon: demo,
              title: "Request a demo",
              desc: "Take a look at our demo.",
              button: "Watch demo",
            },
          ].map((item, index) => (
            <MotionGridItem
              key={index}
              bg="white"
              borderRadius="2xl"
              boxShadow="md"
              p={gridItemPadding}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <VStack align="start" spacing={5}>
                {/* Fixed size icons */}
                <Image
                  src={item.icon}
                  alt={item.title}
                  boxSize="50px"
                  objectFit="contain"
                />
                <Heading size={{ base: "sm", md: "md" }} fontWeight="semibold" lineHeight="1.4">
                  {item.title}
                </Heading>
                <Text color="gray.700" fontSize={{ base: "sm", md: "md" }}>{item.desc}</Text>
                <Box mt="auto" pt={4} display="flex" alignItems="center">
                  <Button
                    bg="#0E1726"
                    color="white"
                    borderRadius="7px"
                    _hover={{ bg: "gray.800" }}
                    mr={2}
                    h="34px"
                    w="35px"
                    minW="32px"
                    p={0}
                  >
                    <IoIosArrowForward size={18} />
                  </Button>
                  <Text fontSize="14px" color="gray.600" fontWeight="medium">
                    {item.button}
                  </Text>
                </Box>
              </VStack>
            </MotionGridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Nextstep;
