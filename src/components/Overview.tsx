// This component renders the overview section of the page.
// It includes a heading, a subheading, and an accordion with a corresponding image that changes based on the open accordion item.

import React, { useRef, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import circles from "../assets/png imgs/circles.png";
import Container from "./Container";

// The content for the accordion and images.
type Section = {
  sectionTitle: string;
  sectionText: string;
  image: string;
};

const content: { sections: Section[] } = {
  sections: [
    {
      sectionTitle: "Attack Simulations",
      sectionText:
        "Precisely assess phishing risks with Real emails attackers might use to target your employees. Automate the creation, payload attachment, user targeting, and scheduling of phishing simulations for your organization.",
      image: "https://via.placeholder.com/600x400?text=Attack+Simulations",
    },
    {
      sectionTitle: "Deep reporting insights",
      sectionText:
        "The dashboard offers clear insights into simulation results, highlighting user susceptibility, awareness, and training progress. It provides accurate metrics to assess the overall attack exposure of your organization.",
      image: "https://via.placeholder.com/600x400?text=Deep+Reporting+Insights",
    },
    {
      sectionTitle: "Cybersecurity awareness training",
      sectionText:
        "The training modules educate users on key threats like ransomware, phishing, social engineering, and password security. Our awareness templates help employees effectively identify and respond to phishing emails.",
      image: "https://via.placeholder.com/600x400?text=Awareness+Training",
    },
    {
      sectionTitle: "Multi-tenant account management",
      sectionText:
        "Precisely access phishing risks with Real emails attackers might use to target your employees. Automate the creation, payload attachment, user targeting, and scheduling of phishing simulations for your organization.",
      image: "https://via.placeholder.com/600x400?text=Multi-Tenant+Management",
    },
  ],
};

// Motion-enhanced versions of Chakra UI components.
const MotionVStack = motion(VStack);
const MotionFlex = motion(Flex);

const Overview = () => {
  // State to keep track of the currently open accordion item.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Refs for the heading and content sections, used for scroll animations.
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  // Hooks from Framer Motion that return true when the component is in view.
  const headingInView = useInView(headingRef, { once: true });
  const contentInView = useInView(contentRef, { once: true });

  // useBreakpointValue is a Chakra UI hook that allows you to specify different values for different breakpoints.
  const showBackgroundImage = useBreakpointValue({ base: false, lg: true });
  const headingFontSize = useBreakpointValue({ base: "2xl", md: "2.25rem" });
  const textFontSize = useBreakpointValue({ base: "md", md: "1rem" });
  const contentDirection = useBreakpointValue({ base: "column", lg: "row" });
  const accordionWidth = useBreakpointValue({ base: "100%", lg: "80%" });
  const imageContainerWidth = useBreakpointValue({
    base: "100%",
    lg: "39.375rem",
  });
  const imageContainerHeight = useBreakpointValue({
    base: "auto",
    lg: "20rem",
  });
  const isMobile = useBreakpointValue({ base: true, md: true, lg: true, xl: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });

  return (
    <Box position="relative" bg="#f9fdfe">
      {/* Background decorative circles positioned to full width */}
      {showBackgroundImage && (
        <Image
          src={circles}
          alt="Purple decorative shape"
          position="absolute"
          top="6.6875rem"
          right="0"
          zIndex={0}
          w="12.8125rem"
          h="34.375rem"
        />
      )}

      <Container>
        <Box id="Overview" position="relative" zIndex={1}>
          {/* Heading */}
          <MotionVStack
            spacing="0.5rem"
            align="start"
            mb="2.5rem"
            ref={headingRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            zIndex={1}
            position="relative"
          >
            <Text
              fontSize="0.75rem"
              textTransform="uppercase"
              color="#a9a8a8"
              fontWeight="semibold"
            >
              OVERVIEW
            </Text>
            <Heading
              fontSize={headingFontSize}
              fontWeight="medium"
              color="gray.800"
            >
              Supercharge your Cybersecurity awareness program effectiveness
            </Heading>
            <Text fontSize={textFontSize} mt="1rem">
              Enhance the impact of your cybersecurity awareness program for
              stronger protection and improved employee behavior.
            </Text>
          </MotionVStack>

          {/* Content: Accordion Left + Image Right */}
          <MotionFlex
            ref={contentRef}
            direction={contentDirection}
            align="center"
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            position="relative"
            zIndex={1}
          >
            {/* Accordion */}
            <Box flex={1}>
              <VStack align="start" spacing={0} w="100%">
                <Accordion
                  allowToggle
                  index={[openIndex ?? 0]}
                  onChange={(index) => {
                    if (Array.isArray(index)) {
                      setOpenIndex(index[0] ?? null);
                    } else {
                      setOpenIndex(index ?? null);
                    }
                  }}
                  w={accordionWidth}
                >
                  {content.sections.map((section, idx) => (
                    <React.Fragment key={idx}>
                      <AccordionItem
                        border="none"
                        position="relative"
                        _before={{
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: "0.1875rem",
                          bg: idx === openIndex ? "#0E1726" : "transparent",
                          borderRadius: "0.125rem",
                          transition: "background-color 0.3s ease",
                        }}
                        pl="0.75rem"
                      >
                        <h2>
                          <AccordionButton px="1.5rem" py="1.5rem">
                            <Box
                              flex="1"
                              textAlign="left"
                              fontWeight="medium"
                              fontSize={{ base: "md", md: "1.125rem" }}
                            >
                              {section.sectionTitle}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          pb="1.5rem"
                          fontSize={{ base: "sm", md: "1rem" }}
                          ml="1.5rem"
                        >
                          {section.sectionText}
                          {/* On mobile and tablet, the image is displayed inside the accordion panel. */}
                          {(isMobile || isTablet) && (
                            <Box
                              bg="white"
                              p="1rem"
                              borderRadius="xl"
                              boxShadow="md"
                              w="100%"
                              mt="1rem"
                            >
                              <Image
                                src={section.image}
                                alt={section.sectionTitle}
                                borderRadius="md"
                                objectFit="contain"
                                w="100%"
                              />
                            </Box>
                          )}
                        </AccordionPanel>
                      </AccordionItem>

                      {/* A divider between accordion items. */}
                      {idx >= 0 && (
                        <Divider borderColor="gray.300" ml="2rem" w="90%" />
                      )}
                    </React.Fragment>
                  ))}
                </Accordion>
              </VStack>
            </Box>

            {/* On desktop, the image is displayed to the right of the accordion. */}
            {!(isMobile || isTablet) && (
              <Box flex={1}>
                <Box
                  bg="white"
                  p="1.5rem"
                  borderRadius="xl"
                  boxShadow="md"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  h={imageContainerHeight}
                  w={imageContainerWidth}
                >
                  <Image
                    src={
                      openIndex !== null
                        ? content.sections[openIndex].image
                        : "https://via.placeholder.com/600x400?text=Placeholder"
                    }
                    alt={
                      openIndex !== null
                        ? content.sections[openIndex].sectionTitle
                        : "Placeholder"
                    }
                    borderRadius="md"
                    objectFit="contain"
                    maxH="25rem"
                    w="100%"
                  />
                </Box>
              </Box>
            )}
          </MotionFlex>
        </Box>
      </Container>
    </Box>
  );
};

export default Overview;
