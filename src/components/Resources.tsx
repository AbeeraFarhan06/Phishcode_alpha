// This component renders the resources section of the page.
// It includes a heading, a subheading, a set of tabs, and a grid of cards that changes based on the selected tab.

import {
  Box,
  VStack,
  Button,
  SimpleGrid,
  Image,
  Text,
  HStack,
  Heading,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import Container from "./Container";
import { useNavigate } from "react-router-dom";

// Motion-enhanced versions of Chakra UI components.
const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

// The type definition for a card item.
type CardItem = {
  tt: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
};

// The data for the cards, organized by tab.
const cardData: Record<string, CardItem[]> = {
  Infographics: [
    {
      tt: "Infographic",
      title: "Phishing Attack Simulation demo",
      description: "Learn how to deliver exceptional attack simulation.",
      buttonText: "Watch the demo",
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/14/48/email-1851080_1280.jpg",
    },
  ],
  Blogs: [
    {
      tt: "Blog",
      title: "AI-Powered Security Insights",
      description: "Understand how AI helps detect phishing threats faster.",
      buttonText: "Read the blog",
      image:
        "https://cdn.pixabay.com/photo/2020/04/24/06/28/cyber-5083704_1280.jpg",
    },
  ],
  Demos: [
    {
      tt: "Demo",
      title: "AI-Powered Security Demo",
      description: "Watch how AI-driven defenses stop phishing in real-time.",
      buttonText: "Watch the demo",
      image:
        "https://cdn.pixabay.com/photo/2020/04/24/06/28/cyber-5083704_1280.jpg",
    },
  ],
};

// An array of the tab names.
const tabs = Object.keys(cardData);

const Resources = () => {
  const navigate = useNavigate();
  // State to keep track of the currently selected tab.
  const [selectedTab, setSelectedTab] = useState("Infographics");
  // The cards for the currently selected tab.
  const cards = cardData[selectedTab];

  // useBreakpointValue is a Chakra UI hook that allows you to specify different values for different breakpoints.
  const headingFontSize = useBreakpointValue({
    base: "1.5rem",
    md: "2.25rem",
  });
  const gridColumns = useBreakpointValue({ base: 1, md: 1, lg: 1, xl: 2 });

  return (
    <Box
      id="Resources"
      bgGradient="linear(to-b, #F9FDFE 0%, #f8fafc 30%, #57C4EF 100%)"
    >
      <Container>
        <Box>
          {/* Animated Heading */}
          <MotionVStack
            spacing={2}
            align="start"
            mb={10}
            initial={{ opacity: 0, y: 50 }} // Initial animation state.
            whileInView={{ opacity: 1, y: 0 }} // Animate to this state when the component is in view.
            transition={{ duration: 0.6, ease: "easeOut" }} // The duration of the animation.
            viewport={{ once: true, amount: 0.3 }}
          >
            <Text
              fontSize="0.75rem"
              textTransform="uppercase"
              color="#969494ff"
              fontWeight="semibold"
            >
              Resources
            </Text>
            <Heading
              fontSize={headingFontSize}
              fontWeight="medium"
              color="gray.800"
            >
              Explore reports, blogs, and demos
            </Heading>
          </MotionVStack>
          {/* Tabs */}
          <HStack spacing={4} wrap="wrap" mb={12}>
            {tabs.map((tab) => {
              const isSelected = selectedTab === tab;
              return (
                <Button
                  key={tab}
                  variant="ghost"
                  bg={isSelected ? "#0E1726" : "#dee0e1ff"}
                  color={isSelected ? "white" : "gray.700"}
                  fontSize={{ base: "0.875rem", md: "0.875rem" }}
                  px={5}
                  py={2}
                  borderRadius="2.5rem"
                  _hover={{ bg: isSelected ? "#1A2B50" : "#c3c7c9ff" }}
                  _active={{ bg: isSelected ? "#1A2B50" : "gray.300" }}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </Button>
              );
            })}
          </HStack>
          {/* Cards with animation */}
          <SimpleGrid columns={gridColumns} spacing={6} minH="25rem">
            {cards.length > 0 ? (
              cards.map((card: CardItem, index: number) => (
                <MotionBox
                  key={index}
                  bg="white"
                  borderRadius="1.25rem"
                  overflow="hidden"
                  boxShadow="md"
                  display="flex"
                  flexDirection="column"
                  p={2}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Box p={1} borderRadius="0.9375rem" overflow="hidden">
                    <Image
                      src={card.image}
                      w="100%"
                      h="12.5rem"
                      objectFit="cover"
                      borderRadius="1.25rem"
                      transition="transform 0.3s ease-in-out"
                      _hover={{ transform: "scale(1.05)" }}
                    />
                  </Box>
                  <Box p={6} flex="1" display="flex" flexDirection="column">
                    <Text
                      fontSize="0.875rem"
                      fontWeight="medium"
                      mb={2}
                      color="gray.600"
                    >
                      {card.tt}
                    </Text>
                    <Text
                      fontSize={{ base: "1rem", md: "1.125rem" }}
                      fontWeight="semibold"
                      mb={4}
                      color="gray.800"
                    >
                      {card.title}
                    </Text>
                    <Text
                      fontSize={{ base: "0.875rem", md: "0.9375rem" }}
                      color="gray.700"
                      mb={4}
                    >
                      {card.description}
                    </Text>
                    <Box mt="auto" display="flex" alignItems="center">
                      <Button
                        bg="#0E1726"
                        color="white"
                        fontSize={{ base: "0.875rem", md: "0.875rem" }}
                        borderRadius="md"
                        _hover={{ bg: "#243B65" }}
                        mr={2}
                        size="sm"
                      >
                        <IoIosArrowForward />
                      </Button>
                      <Text
                        fontSize={{ base: "0.875rem", md: "0.875rem" }}
                        color="#22395fff"
                        fontWeight="medium"
                        pt={3}
                      >
                        {card.buttonText}
                      </Text>
                    </Box>
                  </Box>
                </MotionBox>
              ))
            ) : (
              <Box
                textAlign="center"
                py={20}
                color="gray.500"
                fontSize="1.125rem"
              >
                No resources available for this category yet.
              </Box>
            )}
          </SimpleGrid>
          <Flex justifyContent="flex-end">
            <Button
              mt="2rem"
              bgColor="#0E1726"
              textColor="white"
              fontWeight="normal"
              fontSize="14px"
              borderRadius="3px"
              _hover={ {bgColor: "#243B65", textColor: "white"}}
              onClick={() => navigate("/resources/body")}
            >
              View All
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Resources;
