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

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

// Animation Variants
const fadeUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

// ✅ Icon Component with Auto Background Shade
interface IconProps {
  color?: string;
  shape?: "circle" | "square";
}

const CustomIcon: React.FC<IconProps> = ({
  color = "#0E1726",
  shape = "square",
}) => {
  const getLighterShade = (hex: string, opacity = 0.15) => {
    const c = hex.replace("#", "");
    const bigint = parseInt(c, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const bgColor = getLighterShade(color, 0.15);

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

  // Responsive configuration
  const cardsPerView = useBreakpointValue({
    base: 1, // Mobile: 1 card
    md: 1, // Tablet: 1 card
    lg: 2, // Laptop: 2 cards
    xl: 2, // Desktop: 2 cards
    "2xl": 2, // Large desktop: 2 cards
  });

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

  const maxIndex = Math.max(0, cardData.length - (cardsPerView || 1));

  const handlePrevious = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

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
            align="start"
            pb="2rem"
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
            {/* Large screens - 3 cards side by side */}
            <Box display={{ base: "none", "2xl": "block" }}>
              <HStack
                spacing="1rem"
                align="stretch"
                justify="space-between"
                wrap="nowrap"
              >
                {cardData.map((card, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.2 }}
                    style={{ flex: 1 }}
                  >
                    <Box flex="1" minW="0" w="100%">
                      <Card
                        bg="white"
                        shadow="lg"
                        borderRadius="3xl"
                        border="1px"
                        borderColor="gray.100"
                        h="19.375rem"
                        w="100%"
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

            {/* Large screens - Show 2 cards side by side */}
            <Box display={{ base: "none", lg: "block", "2xl": "none" }}>
              <Box overflow="hidden" w="100%" position="relative">
                <Box
                  display="flex"
                  transition="transform 0.5s ease-in-out"
                  transform={`translateX(-${currentIndex * 50}%)`}
                  // pl={{ base: 0, lg: "4rem", xl: "6rem", "2xl": "8rem" }}
                >
                  {cardData.map((card, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUpVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.2 }}
                      style={{
                        width: "100%",
                        maxWidth: "450px",
                        flexShrink: 0,
                        marginRight: "1.5rem",
                      }}
                    >
                      <Card
                        bg="white"
                        shadow="lg"
                        borderRadius="3xl"
                        border="1px"
                        borderColor="gray.100"
                        h="19.375rem"
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
                    </motion.div>
                  ))}
                </Box>
              </Box>
              {/* Navigation arrows */}
              <HStack
                spacing="1rem"
                justify="start"
                mt="2rem"
                // pl={{ base: 0, lg: "4rem", xl: "6rem", "2xl": "8rem" }}
              >
                <ArrowButton
                  direction="left"
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                />
                <ArrowButton
                  direction="right"
                  onClick={handleNext}
                  disabled={currentIndex === maxIndex}
                />
              </HStack>
            </Box>

            {/* Carousel for mobile/tablet only */}
            <Box display={{ base: "block", lg: "none" }}>
              <Box overflow="hidden" w="100%">
                <Box
                  display="flex"
                  transition="transform 0.5s ease-in-out"
                  transform={`translateX(-${currentIndex * 100}%)`}
                >
                  {cardData.map((card, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUpVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.2 }}
                      style={{
                        width: "100%",
                        flexShrink: 0,
                      }}
                    >
                      <Box w="100%" px={{ base: "0.5rem", md: "1rem" }}>
                        <Card
                          bg="white"
                          shadow="lg"
                          borderRadius="3xl"
                          border="1px"
                          borderColor="gray.100"
                          h={{
                            base: "auto",
                            md: "20rem",
                          }}
                          minH="18rem"
                        >
                          <CardBody p={{ base: "1.25rem", md: "1.5rem" }}>
                            <VStack
                              align="start"
                              spacing={{ base: "1.25rem", md: "1.5rem" }}
                              h="100%"
                            >
                              {card.icon}
                              <VStack
                                align="start"
                                spacing={{ base: "0.75rem", md: "1rem" }}
                                flex={1}
                              >
                                <Heading
                                  size={{ base: "sm", md: "md" }}
                                  color="gray.800"
                                  fontWeight="semibold"
                                >
                                  {card.title}
                                </Heading>
                                <Text
                                  color="gray.600"
                                  fontSize={{ base: "xs", md: "sm" }}
                                  lineHeight="relaxed"
                                >
                                  {card.text}
                                </Text>
                              </VStack>
                              <Button
                                variant="link"
                                color="blue.600"
                                fontWeight="semibold"
                                fontSize="xs"
                                textDecoration="underline"
                                alignSelf="flex-start"
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

              {/* Navigation arrows */}
              <HStack spacing="1rem" justify="start" mt="2rem">
                <ArrowButton
                  direction="left"
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                />
                <ArrowButton
                  direction="right"
                  onClick={handleNext}
                  disabled={currentIndex === maxIndex}
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
