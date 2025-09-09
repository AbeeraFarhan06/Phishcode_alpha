import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import Container from "../../components/Container";
import { motion } from "framer-motion";
import Empower from "../../assets/Empower.png";
import Save from "../../assets/Save.png";
import Protect from "../../assets/Protect.png";

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

// Animation Variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Define types
type TabKey = "Empower" | "Save" | "Protect";

interface TabContent {
  title: string;
  description: string;
  buttons: {
    text: string;
    variant: "solid" | "outline";
  }[];
  image: string;
}

const tabContent: Record<TabKey, TabContent> = {
  Empower: {
    title: "Empowers your workforce",
    description:
      "Turn your greatest attack surface—your people—into your strongest defense.",
    buttons: [
      { text: "Learn more", variant: "solid" },
      { text: "View case studies", variant: "outline" },
    ],
    image: Empower,
  },
  Save: {
    title: "Proven ROI that speaks for itself",
    description:
      "Delivering 276% ROI in three years and payback in record time—under 3 months.",
    buttons: [
      { text: "View ROI calculator", variant: "solid" },
      { text: "Download report", variant: "outline" },
    ],
    image: Save,
  },
  Protect: {
    title: "Gartner-backed protection",
    description:
      "Gartner reports that organizations using SAT cut social engineering attacks by 70%.",
    buttons: [
      { text: "Read Gartner report", variant: "solid" },
      { text: "Explore protection", variant: "outline" },
    ],
    image: Protect,
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
        <MotionVStack
          spacing={0}
          textAlign="center"
          mb={10}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <MotionBox variants={fadeUpVariants}>
            <Text
              fontSize="12px"
              fontWeight="medium"
              color="#969494ff"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              SECURE YOUR TOMORROW
            </Text>
          </MotionBox>

          <MotionBox variants={fadeUpVariants}>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="600"
              color="#2d3748"
              maxW="600px"
              my={2}
            >
              The PHISHCODE Difference
            </Heading>
          </MotionBox>

          <MotionBox variants={fadeUpVariants}>
            <Text fontSize="16px" color="#2d3748" maxW="500px" my={4}>
              Three powerful reasons to trust us.
            </Text>
          </MotionBox>

          {/* Tab Navigation */}
          <MotionBox variants={fadeUpVariants}>
            <Box bg="white" borderRadius="full" p={2} m={2} boxShadow="sm">
              <HStack spacing={0} justify="center">
                {tabs.map((tab) => (
                  <Button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    bg={activeTab === tab ? "#0E1726" : "transparent"}
                    color={activeTab === tab ? "white" : "#2d3748"}
                    border="none"
                    borderRadius="full"
                    px={6}
                    py={2}
                    fontSize="sm"
                    fontWeight="medium"
                    _hover={{
                      bg: activeTab === tab ? "#243B65" : "#F7FAFC",
                    }}
                    transition="all 0.2s"
                    minW="120px"
                  >
                    {tab}
                  </Button>
                ))}
              </HStack>
            </Box>
          </MotionBox>
        </MotionVStack>

        {/* Content Section */}
        <MotionBox
          bg="white"
          borderRadius="3xl"
          boxShadow="lg"
          border="1px solid #E2E8F0"
          p={12}
          mt={12}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <MotionFlex
            direction={{ base: "column", lg: "row" }}
            align="stretch"
            gap={12}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Left Content */}
            <MotionBox
              flex="1"
              maxW={{ base: "100%", lg: "45%" }}
              variants={fadeUpVariants}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Heading
                  as="h3"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="600"
                  color="#2d3748"
                  lineHeight="1.2"
                  mb={4}
                >
                  {currentContent.title}
                </Heading>
                <Text
                  fontSize="16px"
                  color="#4A5568"
                  lineHeight="1.6"
                  maxW="400px"
                  mb={8}
                >
                  {currentContent.description}
                </Text>
              </Box>

              {/* Buttons moved to left column */}
              <HStack spacing="1rem" flexWrap="wrap" justify="flex-start">
                {currentContent.buttons.map((button, index) => (
                  <Button
                    key={index}
                    bg={button.variant === "solid" ? "#0E1726" : "white"}
                    color={button.variant === "solid" ? "white" : "#0E1726"}
                    border={
                      button.variant === "outline"
                        ? "1px solid #0E1726"
                        : "none"
                    }
                    borderRadius="0.5rem"
                    fontSize="0.875rem"
                    fontWeight="medium"
                    _hover={{
                      bg: button.variant === "solid" ? "#243B65" : "#F7FAFC",
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
            </MotionBox>

            {/* Right Video Section */}
            <MotionBox
              flex="1"
              maxW={{ base: "100%", lg: "55%" }}
              variants={fadeUpVariants}
            >
              <Box
                position="relative"
                borderRadius="xl"
                overflow="hidden"
                bg="gray.100"
                h="100%"
                minH="350px"
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
                  <Box w="100%" h="100%" bg="gray.200">
                    <Image
                      src={currentContent.image}
                      alt={currentContent.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Box>
                </Box>
              </Box>
            </MotionBox>
          </MotionFlex>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default SecureYourFuture;
