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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Container from "../../components/Container";
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

  // Better responsive breakpoint logic
  const showDropdown = useBreakpointValue({
    base: true, // Mobile: dropdown
    md: true, // iPad: dropdown
    lg: true, // Large tablet: dropdown
    xl: false, // Desktop: pills
  });

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
            {showDropdown ? (
              // Dropdown for mobile/tablet
              <Menu matchWidth>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  w="15rem"
                  textAlign="left"
                  bg="white"
                  color="#2d3748"
                  border="1px solid #E2E8F0"
                  borderRadius="md"
                  _hover={{ bg: "#F7FAFC" }}
                >
                  {activeTab}
                </MenuButton>
                <MenuList w="full" bgColor="white">
                  {tabs.map((tab) => (
                    <MenuItem
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      bg={activeTab === tab ? "#0E1726" : "white"}
                      color={activeTab === tab ? "white" : "#2d3748"}
                      _hover={{
                        bg: activeTab === tab ? "#243B65" : "#F7FAFC",
                        color: activeTab === tab ? "white" : "#2d3748",
                      }}
                    >
                      {tab}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            ) : (
              // Pills for desktop
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
            )}
          </MotionBox>
        </MotionVStack>

        {/* Content Section */}
        <MotionBox
          bg="white"
          borderRadius="3xl"
          boxShadow="lg"
          border="1px solid #E2E8F0"
          p={{ base: 6, md: 8, lg: 10, xl: 12 }}
          mt={12}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <MotionFlex
            direction={{
              base: "column",
              md: "column",
              lg: "column",
              xl: "row",
            }}
            align="stretch"
            gap={{ base: 6, md: 8, lg: 10, xl: 12 }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image Section - First on mobile/tablet */}
            <MotionBox
              flex="1"
              variants={fadeUpVariants}
              minW="0"
              order={{ base: 1, xl: 2 }}
            >
              <Box
                position="relative"
                borderRadius="xl"
                overflow="hidden"
                bg="gray.100"
                w="100%"
                h={{
                  base: "250px", // Mobile
                  md: "300px", // iPad
                  lg: "350px", // Large tablet
                  xl: "400px", // Desktop
                }}
              >
                <Image
                  src={currentContent.image}
                  alt={currentContent.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
            </MotionBox>

            {/* Content Section - Second on mobile/tablet */}
            <MotionBox
              flex="1"
              variants={fadeUpVariants}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              minW="0"
              order={{ base: 2, xl: 1 }}
            >
              <Box>
                <Heading
                  as="h3"
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  fontWeight="600"
                  color="#2d3748"
                  lineHeight="1.2"
                  mb={4}
                >
                  {currentContent.title}
                </Heading>
                <Text
                  fontSize={{ base: "14px", md: "16px" }}
                  color="#4A5568"
                  lineHeight="1.6"
                  mb={8}
                >
                  {currentContent.description}
                </Text>
              </Box>

              {/* Buttons */}
              <Flex
                direction={{ base: "column", sm: "row" }}
                gap="1rem"
                align={{ base: "stretch", sm: "flex-start" }}
              >
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
                    minW={{ base: "100%", sm: "auto" }}
                    w={{ base: "100%", sm: index === 0 ? "13rem" : "11.6rem" }}
                    h="4.625rem"
                    px="1rem"
                    py="0.75rem"
                  >
                    {button.text}
                  </Button>
                ))}
              </Flex>
            </MotionBox>
          </MotionFlex>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default SecureYourFuture;
