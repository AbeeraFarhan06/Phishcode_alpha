import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Card,
  CardBody,
  Button,
  VStack,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Container from "../../components/Container";
import contact_banner from "../../assets/png imgs/contact_banner.png";
import { motion } from "framer-motion";
import { transparentize } from "@chakra-ui/theme-tools"; // For generating lighter shades

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

// Animation Variants
const fadeUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

// ✅ Icon Component with Auto Background Shade
interface IconProps {
  color?: string; // Inner shape color
  shape?: "circle" | "square";
}

const CustomIcon: React.FC<IconProps> = ({ color = "#0E1726", shape = "square" }) => {
  // Create a lighter version for background using Chakra's transparentize
  const bgColor = transparentize(color, 0.85)("light"); // Makes it lighter

  return (
    <Box
      w="2.5rem"
      h="2.5rem"
      bg={bgColor}
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="1.25rem"
        h="1.25rem"
        bg={color}
        borderRadius={shape === "circle" ? "full" : "sm"}
      />
    </Box>
  );
};

// ✅ Arrow Button
interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
  color?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
  disabled,
  color = "#0E1726",
}) => (
  <IconButton
    aria-label={`${direction} arrow`}
    icon={direction === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    onClick={onClick}
    size="lg"
    borderRadius="full"
    bg="white"
    shadow="lg"
    border="1px"
    borderColor="gray.100"
    color={color}
    disabled={disabled}
    _hover={{ shadow: "xl", transform: "translateY(-0.125rem)" }}
    _disabled={{ opacity: 0.4, cursor: "not-allowed" }}
    transition="all 0.2s"
  />
);

const SecurityInfoComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = useBreakpointValue({ base: "566px", "2xl": "27.375rem" });
  const cardHeight = "19.375rem";

  const handlePrevious = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(1, prev + 1));

  // ✅ Updated cardData with only main color & shape (bg auto-generated)
  const cardData = [
    {
      icon: <CustomIcon color="#104774ff" shape="square" />,
      title: "Fewer attacks",
      text: "Organizations with SAT see up to 70% fewer social engineering threats, creating a safer environment.",
      button: "Learn more",
    },
    {
      icon: <CustomIcon color="#3a7eb7ff" shape="circle" />,
      title: "Stronger security culture",
      text: "Empower your workforce to become your first line of defense.",
      button: "Learn more",
    },
    {
      icon: <CustomIcon color="#0f92e3ff" shape="square" />,
      title: "Proven protection",
      text: "Backed by Gartner research, SAT delivers measurable risk reduction, ensuring confidence and trust.",
      button: "Learn more",
    },
  ];

  return (
    <Box id="See-the-benefits" position="relative" w="100vw" minH="auto">
      {/* Background */}
      <Box position="absolute" inset={0} w="100%">
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="50%"
          bg="#F9FDFE"
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          w="100%"
          h="50%"
          bgImage={contact_banner}
          bgSize="cover"
          bgPosition="center"
        />
      </Box>

      {/* Animated Content */}
      <MotionBox
        position="relative"
        zIndex={1}
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Container>
          {/* Header */}
          <MotionVStack
            spacing="1rem"
            align="start"
            pt="1rem"
            pb="1rem"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Text
              fontSize="12px"
              fontWeight="semibold"
              color="#969494ff"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              See the benefits
            </Text>
            <Heading
              as="h1"
              size={{ base: "xl", lg: "36px" }}
              fontWeight="semibold"
              color="gray.800"
              lineHeight="shorter"
              maxW="70rem"
            >
              Strengthen security where it matters most
            </Heading>
          </MotionVStack>

          {/* Cards */}
          <MotionBox
            w="100%"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Large screens */}
            <Box display={{ base: "none", "2xl": "block" }}>
              <HStack spacing="1rem" align="start" wrap="wrap">
                {cardData.map((card, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Box flex="1" minW="18rem" maxW="22rem">
                      <Card
                        bg="white"
                        shadow="lg"
                        borderRadius="3xl"
                        border="1px"
                        borderColor="gray.100"
                        h={cardHeight}
                        _hover={{
                          shadow: "xl",
                          transform: "translateY(-0.125rem)",
                        }}
                        transition="all 0.2s"
                      >
                        <CardBody p="1.5rem">
                          <VStack align="start" spacing="1.5rem" h="100%">
                            {card.icon}
                            <VStack align="start" spacing="1rem" flex={1}>
                              <Heading
                                size="md"
                                color="gray.800"
                                fontWeight="semibold"
                              >
                                {card.title}
                              </Heading>
                              <Text color="gray.600" fontSize="sm">
                                {card.text}
                              </Text>
                            </VStack>
                            <Button
                              variant="link"
                              color="blue.600"
                              fontWeight="semibold"
                              fontSize="xs"
                              textDecoration="underline"
                            >
                              {card.button}
                            </Button>
                          </VStack>
                        </CardBody>
                      </Card>
                    </Box>
                  </motion.div>
                ))}
              </HStack>
            </Box>

            {/* Carousel for smaller screens */}
            <Box display={{ base: "block", "2xl": "none" }}>
              <Box overflow="hidden" w="100%">
                <Box
                  display="flex"
                  gap="1rem"
                  transition="transform 0.5s ease-in-out"
                  transform={`translateX(-${currentIndex * 50}%)`}
                  w="150%"
                >
                  {cardData.map((card, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUpVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Box w="35.375rem" flexShrink={0}>
                        <Card
                          bg="white"
                          shadow="lg"
                          borderRadius="3xl"
                          border="1px"
                          borderColor="gray.100"
                          h="19.375rem"
                        >
                          <CardBody p="1.5rem">
                            <VStack align="start" spacing="1.5rem" h="100%">
                              {card.icon}
                              <VStack align="start" spacing="1rem" flex={1}>
                                <Heading
                                  size="md"
                                  color="gray.800"
                                  fontWeight="semibold"
                                >
                                  {card.title}
                                </Heading>
                                <Text color="gray.600" fontSize="sm">
                                  {card.text}
                                </Text>
                              </VStack>
                              <Button
                                variant="link"
                                color="blue.600"
                                fontWeight="semibold"
                                fontSize="xs"
                                textDecoration="underline"
                              >
                                {card.button}
                              </Button>
                            </VStack>
                          </CardBody>
                        </Card>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Box>

              <HStack spacing="1rem" justify="start" mt="2rem">
                <ArrowButton
                  direction="left"
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                />
                <ArrowButton
                  direction="right"
                  onClick={handleNext}
                  disabled={currentIndex >= 1}
                />
              </HStack>
            </Box>
          </MotionBox>
        </Container>
      </MotionBox>
    </Box>
  );
};

export default SecurityInfoComponent;
