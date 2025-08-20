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
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import resources_section_bg from "../assets/png imgs/resources_section_bg.png";

// Framer Motion wrapper for Chakra
const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

type CardItem = {
  tt: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
};

// Each tab has its own card(s)
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

const tabs = Object.keys(cardData);

const Resources = () => {
  const [selectedTab, setSelectedTab] = useState("Demos");
  const cards = cardData[selectedTab];

  const paddingX = useBreakpointValue({ base: 4, md: 16 });
  const headingFontSize = useBreakpointValue({ base: "2xl", md: "36px" });
  const gridColumns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Box
      id="Resources"
      py={16}
      px={paddingX}
      bgGradient="linear(to-b, #F9FDFE 0%, #f8fafc 30%, #57C4EF 100%)"
    >
      {/* Animated Heading */}
      <MotionVStack
        spacing={2}
        align="start"
        mb={10}
        mt={14}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Text
          fontSize="12px"
          textTransform="uppercase"
          color="#969494ff"
          fontWeight="semibold"
        >
          Resources
        </Text>
        <Heading fontSize={headingFontSize} fontWeight="medium" color="gray.800">
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
              fontSize={{ base: "sm", md: "14px" }}
              px={5}
              py={2}
              borderRadius="40px"
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
      <SimpleGrid columns={gridColumns} spacing={6} minH="400px">
        {cards.length > 0 ? (
          cards.map((card: CardItem, index: number) => (
            <MotionBox
              key={index}
              bg="white"
              borderRadius="20px"
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
              <Box p={1} borderRadius="15px" overflow="hidden">
                <Image
                  src={card.image}
                  w="100%"
                  h="200px"
                  objectFit="cover"
                  borderRadius="20px"
                  transition="transform 0.3s ease-in-out"
                  _hover={{ transform: "scale(1.05)" }}
                />
              </Box>

              <Box p={6} flex="1" display="flex" flexDirection="column">
                <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.600">
                  {card.tt}
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="semibold"
                  mb={4}
                  color="gray.800"
                >
                  {card.title}
                </Text>
                <Text fontSize={{ base: "sm", md: "15px" }} color="gray.700" mb={4}>
                  {card.description}
                </Text>

                <Box mt="auto" display="flex" alignItems="center">
                  <Button
                    bg="#0E1726"
                    color="white"
                    fontSize={{ base: "sm", md: "14px" }}
                    borderRadius="md"
                    _hover={{ bg: "#868686ff" }}
                    mr={2}
                    size="sm"
                  >
                    <IoIosArrowForward />
                  </Button>
                  <Text fontSize={{ base: "sm", md: "14px" }} color="#696c6eff" fontWeight="medium">
                    {card.buttonText}
                  </Text>
                </Box>
              </Box>
            </MotionBox>
          ))
        ) : (
          <Box textAlign="center" py={20} color="gray.500" fontSize="lg">
            No resources available for this category yet.
          </Box>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Resources;
