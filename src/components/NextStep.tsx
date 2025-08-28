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
import prof from "../assets/png imgs/prof.png";
import Container from "./Container";
import { useNavigate } from "react-router-dom";

// Motion-enhanced versions of Chakra UI components.
const MotionBox = motion(Box);
const MotionGridItem = motion(Box);

const Nextstep = () => {
  const navigate = useNavigate();
  // useBreakpointValue is a Chakra UI hook that allows you to specify different values for different breakpoints.
  const topSectionPaddingLeft = useBreakpointValue({ base: 4, md: 6 });
  const topSectionPaddingRight = useBreakpointValue({ base: 4, md: 4 });
  const topSectionFlexWrap = useBreakpointValue({ base: "wrap", lg: "nowrap" });
  const leftSidePaddingRight = useBreakpointValue({ base: 0, md: 6 });
  const headingFontSize = useBreakpointValue({
    base: "1.5rem",
    md: "2.25rem",
  });
  const textFontSize = useBreakpointValue({
    base: "1rem",
    md: "1rem",
  });
  const imageH = useBreakpointValue({
    base: "15rem",
    md: "20rem",
    lg: "24.375rem",
  });
  const imageMarginLeft = useBreakpointValue({ base: 0, md: 10 });
  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    md: "repeat(2, 1fr)",
  });
  const gridGap = useBreakpointValue({ base: 4, md: 8 });
  const gridItemPadding = useBreakpointValue({ base: 4, md: 8 });
  const flexDirection = useBreakpointValue({
    base: "column-reverse",
    md: "row",
  });
  const imageMarginBottom = useBreakpointValue({ base: 8, md: 0 });

  return (
    <Container>
      <Box id="Next-steps" minH="auto">
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
            <Text
              color="black"
              fontWeight="semibold"
              mb={16}
              mt={4}
              fontSize="0.75rem"
            >
              Next steps
            </Text>
            <Heading
              fontSize={headingFontSize}
              mt={16}
              mb={4}
              fontWeight="semibold"
              lineHeight="1.3"
              color="gray.700"
            >
              Try AI-Powered Phishing Attack Simulation Platform
            </Heading>
            <Text mb={16} fontSize={textFontSize} color="gray.700">
              Deliver exceptional, proactive cybersecurity awareness that
              resolves customers security gaps the first time.
            </Text>
            <Button
              bg="#0E1726"
              color="white"
              fontWeight="semibold"
              fontSize={{ base: "0.875rem", md: "0.875rem" }}
              px={4}
              py={7}
              mt={10}
              mb={5}
              borderRadius="lg"
              _hover={{ bg: "#243B65" }}
              onClick={() => navigate("/signup/step1")}
            >
              Try for free
            </Button>
          </Box>

          {/* Right Side (Image) */}
          <Box
            flex="1"
            borderRadius="xl"
            overflow="hidden"
            mb={imageMarginBottom}
          >
            <Image
              src={prof}
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
        <Grid templateColumns={gridTemplateColumns} gap={gridGap} mt={12}>
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
                  boxSize="3.125rem"
                  objectFit="contain"
                />

                <Heading
                  size={{ base: "sm", md: "md" }}
                  fontWeight="semibold"
                  lineHeight="1.4"
                >
                  {item.title}
                </Heading>
                <Text
                  color="gray.700"
                  fontSize={{ base: "0.875rem", md: "1rem" }}
                >
                  {item.desc}
                </Text>

                <Box mt="auto" pt={4} display="flex" alignItems="center">
                  <Button
                    bg="#0E1726"
                    color="white"
                    borderRadius="0.4375rem"
                    _hover={{ bg: "#243B65" }}
                    mr={2}
                    h="2.125rem"
                    w="2.1875rem"
                    minW="2rem"
                    p={0}
                    onClick={() => {
                      if (item.button === "Contact now") {
                        navigate("/contact-us");
                      }
                    }}
                  >
                    <IoIosArrowForward size={18} />
                  </Button>
                  <Text
                    fontSize="0.875rem"
                    color="#22395fff"
                    fontWeight="medium"
                    pt={3}
                  >
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
