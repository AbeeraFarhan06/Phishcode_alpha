import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import Container from "../../components/Container";

// Define types
type TabKey = "Empower" | "Save" | "Protect";

interface TabContent {
  title: string;
  description: string;
  buttons: {
    text: string;
    variant: "solid" | "outline";
  }[];
}

// Define the content for each tab
const tabContent: Record<TabKey, TabContent> = {
  Empower: {
    title: "Empowers your workforce",
    description:
      "Turn your greatest attack surface—your people—into your strongest defense.",
    buttons: [
      { text: "Learn more", variant: "solid" },
      { text: "View case studies", variant: "outline" },
    ],
  },
  Save: {
    title: "Proven ROI that speaks for itself",
    description:
      "Delivering 276% ROI in three years and payback in record time—under 3 months.",
    buttons: [
      { text: "View ROI calculator", variant: "solid" },
      { text: "Download report", variant: "outline" },
    ],
  },
  Protect: {
    title: "Gartner-backed protection",
    description:
      "Gartner reports that organizations using SAT cut social engineering attacks by 70%.",
    buttons: [
      { text: "Read Gartner report", variant: "solid" },
      { text: "Explore protection", variant: "outline" },
    ],
  },
};

const SecureYourFuture: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Empower");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const tabs: TabKey[] = ["Empower", "Save", "Protect"];
  const currentContent = tabContent[activeTab];

  return (
    <Box id="Secure-your-tomorrow" bgColor="#F9FDFE">
      <Container>
        {/* Header Section */}
        <VStack spacing={0} textAlign="center" mb={10}>
          <Text
            fontSize="14px"
            fontWeight="medium"
            color="#6B7280"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            SECURE YOUR TOMORROW
          </Text>

          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="600"
            color="#2d3748"
            maxW="600px"
            my={2}
          >
            The PHISHCODE Difference
          </Heading>

          <Text fontSize="lg" color="#2d3748" maxW="500px" my={4}>
            Three powerful reasons to trust us.
          </Text>

          {/* Tab Navigation */}
          <Box bg="white" borderRadius="full" p={2} m={2} boxShadow="sm">
            <HStack spacing={0} justify="center">
              {tabs.map((tab) => (
                <Button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  bg={activeTab === tab ? "#2A446F" : "transparent"}
                  color={activeTab === tab ? "white" : "#2d3748"}
                  border="none"
                  borderRadius="full"
                  px={6}
                  py={2}
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{
                    bg: activeTab === tab ? "#1e3458" : "#F7FAFC",
                  }}
                  transition="all 0.2s"
                  minW="120px"
                >
                  {tab}
                </Button>
              ))}
            </HStack>
          </Box>
        </VStack>

        {/* Content Section - Single Card Container */}
        <Box
          bg="white"
          borderRadius="3xl"
          boxShadow="lg"
          border="1px solid #E2E8F0"
          p={12}
          mt={12}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="stretch"
            gap={12}
            mb={8}
          >
            {/* Left Content */}
            <Box flex="1" maxW={{ base: "100%", lg: "45%" }} p={6}>
              <Heading
                as="h3"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="400"
                color="#2d3748"
                lineHeight="1.2"
              >
                {currentContent.title}
              </Heading>

              <Text fontSize="lg" color="#4A5568" lineHeight="1.6" maxW="400px">
                {currentContent.description}
              </Text>
            </Box>

            {/* Right Video Section - Extended to fill space */}
            <Box flex="1" maxW={{ base: "100%", lg: "55%" }}>
              <Box
                position="relative"
                borderRadius="xl"
                overflow="hidden"
                bg="gray.100"
                h="350px"
                w="100%"
              >
                <Box
                  w="100%"
                  h="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                >
                  {/* Gray placeholder for video */}
                  <Box
                    w="100%"
                    h="100%"
                    bg="gray.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  />

                  {/* Play Button - positioned at top left with blue styling */}
                  <Button
                    position="absolute"
                    top="20px"
                    left="20px"
                    size="lg"
                    bg="#2A446F"
                    color="white"
                    borderRadius="md"
                    p={4}
                    onClick={() => setIsPlaying(true)}
                    _hover={{ bg: "#1e3458", transform: "scale(1.05)" }}
                    transition="all 0.2s"
                    boxShadow="lg"
                    minW="56px"
                    h="56px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <FaPlay size="20px" />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Flex>

          {/* Bottom Buttons Area */}
          <Box px="1.5rem">
            <HStack spacing="1rem" flexWrap="wrap" justify="flex-start">
              {currentContent.buttons.map((button, index) => (
                <Button
                  key={index}
                  bg={button.variant === "solid" ? "#2A446F" : "white"}
                  color={button.variant === "solid" ? "white" : "#2A446F"}
                  border={
                    button.variant === "outline" ? "1px solid #2A446F" : "none"
                  }
                  borderRadius="0.5rem"
                  fontSize="0.875rem"
                  fontWeight="medium"
                  _hover={{
                    bg: button.variant === "solid" ? "#1e3458" : "#F7FAFC",
                  }}
                  transition="all 0.2s"
                  whiteSpace="normal"
                  textAlign="center"
                  w={index === 0 ? "13rem" : "11.6rem"}
                  h="4.625rem"
                  px="1rem"
                  py="0.75rem"
                >
                  {button.text}
                </Button>
              ))}
            </HStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SecureYourFuture;
