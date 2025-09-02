import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import Container from "../../components/Container";

// Define the content for each tab
const tabContent = {
  Protect: {
    title: "Protects comprehensively",
    description:
      "Take advantage of a broad security portfolio that has integrated tools across 50 product categories that share insights to eliminate silos.",
    buttons: [
      { text: "Read the executive summary", variant: "solid" },
      { text: "Learn more about unified SecOps", variant: "outline" },
    ],
  },
  Save: {
    title: "Saves significantly",
    description:
      "Reduce costs and complexity with unified security operations that streamline processes and eliminate redundant tools across your organization.",
    buttons: [
      { text: "View cost savings analysis", variant: "solid" },
      { text: "Explore ROI calculator", variant: "outline" },
    ],
  },
  Empower: {
    title: "Empowers effectively",
    description:
      "Enable your security teams with AI-powered tools and automated responses that enhance productivity and decision-making capabilities.",
    buttons: [
      { text: "See empowerment strategies", variant: "solid" },
      { text: "Learn about AI integration", variant: "outline" },
    ],
  },
  Safeguard: {
    title: "Safeguards systematically",
    description:
      "Implement comprehensive protection strategies that secure your entire digital ecosystem from emerging threats and vulnerabilities.",
    buttons: [
      { text: "Explore safeguard methods", variant: "solid" },
      { text: "View security frameworks", variant: "outline" },
    ],
  },
};

const SecureYourFuture = () => {
  const [activeTab, setActiveTab] = useState<string>("Protect");
  const [isPlaying, setIsPlaying] = useState(false);

  const tabs = ["Protect", "Save", "Empower", "Safeguard"];
  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <Box id="Secure-your-future" py={16} bgColor="#F9FDFE">
      <Container>
        {/* Header Section */}
        <VStack spacing={6} textAlign="center" mb={12}>
          <Text
            fontSize="14px"
            fontWeight="medium"
            color="#6B7280"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            SECURE YOUR FUTURE
          </Text>

          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="600"
            color="#2d3748"
            maxW="600px"
          >
            The PHISHCODE Difference
          </Heading>

          <Text fontSize="lg" color="#2d3748" maxW="500px">
            Four reasons to choose PHISHCODE.
          </Text>

          {/* Tab Navigation */}
          <Box bg="white" borderRadius="full" p={2} boxShadow="sm" mt={8}>
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
                mb={8}
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
          <Box px={6}>
            <HStack spacing={4} flexWrap="wrap" justify="flex-start">
              {currentContent.buttons.map((button, index) => (
                <Button
                  key={index}
                  bg={button.variant === "solid" ? "#2A446F" : "white"}
                  color={button.variant === "solid" ? "white" : "#2A446F"}
                  border={
                    button.variant === "outline" ? "1px solid #2A446F" : "none"
                  }
                  borderRadius="lg"
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{
                    bg: button.variant === "solid" ? "#1e3458" : "#F7FAFC",
                  }}
                  transition="all 0.2s"
                  whiteSpace="normal"
                  textAlign="center"
                  // Button sizes: 208.81px = ~13.05rem, 185.52px = ~11.6rem
                  // Height: 74px = ~4.625rem
                  w={index === 0 ? "13rem" : "11.6rem"}
                  h="4.625rem"
                  px={4}
                  py={3}
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
