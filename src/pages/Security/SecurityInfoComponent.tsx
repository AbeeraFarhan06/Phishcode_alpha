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

// Icons remain unchanged
const SecurityIcon = () => (
  <Box
    w="2.5rem"
    h="2.5rem"
    bg="blue.100"
    borderRadius="full"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Box w="1.25rem" h="1.25rem" bg="blue.500" borderRadius="sm" />
  </Box>
);

const CommitmentIcon = () => (
  <Box
    w="2.5rem"
    h="2.5rem"
    bg="purple.100"
    borderRadius="full"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Box w="1.25rem" h="1.25rem" bg="purple.500" borderRadius="full" />
  </Box>
);

const GenAIIcon = () => (
  <Box
    w="2.5rem"
    h="2.5rem"
    bg="pink.100"
    borderRadius="full"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Box w="1.25rem" h="1.25rem" bg="pink.500" borderRadius="sm" />
  </Box>
);

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
  disabled,
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
    disabled={disabled}
    _hover={{
      shadow: "xl",
      transform: "translateY(-0.125rem)",
    }}
    _disabled={{
      opacity: 0.4,
      cursor: "not-allowed",
      _hover: { transform: "none", shadow: "lg" },
    }}
    transition="all 0.2s"
  />
);

const SecurityInfoComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive values
  const cardWidth = useBreakpointValue({
    base: "566px", // Mobile and laptop: keep original size (35.375rem)
    "2xl": "27.375rem", // Very large screens: 438px = 27.375rem
  });
  const cardHeight = "19.375rem"; // Always 310px height

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(1, prev + 1));
  };

  const cardData = [
    {
      icon: <SecurityIcon />,
      title: "Fewer attacks",
      text: "Organizations with SAT see up to 70% fewer social engineering threats, creating a safer environment.",
      button: "Learn more",
    },
    {
      icon: <CommitmentIcon />,
      title: "Stronger security culture",
      text: "Empower your workforce to become your first line of defense.",
      button: "Learn more",
    },
    {
      icon: <GenAIIcon />,
      title: "Proven protection",
      text: "Backed by Gartner research, SAT delivers measurable risk reduction, ensuring confidence and trust.",
      button: "Learn more",
    },
  ];

  return (
    <Box id="See-the-benefits" position="relative" w="100vw" minH="auto">
      {/* Split Background */}
      <Box position="absolute" inset={0} w="100%">
        {/* Top half - Solid background */}
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="50%"
          bg="#F9FDFE"
        />
        {/* Bottom half - Background image */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          w="100%"
          h="50%"
          bgImage={`url(${contact_banner})`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
        />
      </Box>

      {/* Content - wrapped in Container */}
      <Box position="relative" zIndex={1}>
        <Container>
          {/* Header - reduced padding */}
          <VStack
            spacing="1rem"
            align="start"
            textAlign="start"
            pt="1rem"
            pb="1rem"
          >
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="gray.600"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              See the benefits
            </Text>
            <Heading
              as="h1"
              size={{ base: "xl", lg: "2xl" }}
              fontWeight="semibold"
              color="gray.800"
              lineHeight="shorter"
              maxW="70rem"
              whiteSpace="normal"
            >
              Strengthen security where it matters most
            </Heading>
          </VStack>

          {/* Cards Container */}
          <Box w="100%">
            {/* Very large screens (2xl+): Show all cards in a row */}
            <Box display={{ base: "none", "2xl": "block" }}>
              <HStack spacing="1rem" align="start" justify="center">
                {cardData.map((card, index) => (
                  <Box key={index} w={cardWidth} flexShrink={0}>
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
                              as="h3"
                              size="md"
                              color="gray.800"
                              fontWeight="semibold"
                            >
                              {card.title}
                            </Heading>
                            <Text
                              color="gray.600"
                              fontSize="sm"
                              lineHeight="tall"
                            >
                              {card.text}
                            </Text>
                          </VStack>
                          <Button
                            variant="link"
                            color="blue.600"
                            fontWeight="semibold"
                            fontSize="xs"
                            p={0}
                            h="auto"
                            textDecoration="underline"
                            _hover={{
                              color: "blue.700",
                              textDecoration: "underline",
                            }}
                          >
                            {card.button}
                          </Button>
                        </VStack>
                      </CardBody>
                    </Card>
                  </Box>
                ))}
              </HStack>
            </Box>

            {/* Mobile to large screens (base to xl): Carousel with arrows */}
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
                    <Box key={index} w="35.375rem" flexShrink={0}>
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
                                as="h3"
                                size="md"
                                color="gray.800"
                                fontWeight="semibold"
                              >
                                {card.title}
                              </Heading>
                              <Text
                                color="gray.600"
                                fontSize="sm"
                                lineHeight="tall"
                              >
                                {card.text}
                              </Text>
                            </VStack>
                            <Button
                              variant="link"
                              color="blue.600"
                              fontWeight="semibold"
                              fontSize="xs"
                              p={0}
                              h="auto"
                              textDecoration="underline"
                              _hover={{
                                color: "blue.700",
                                textDecoration: "underline",
                              }}
                            >
                              {card.button}
                            </Button>
                          </VStack>
                        </CardBody>
                      </Card>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Navigation Arrows - only for mobile to large screens */}
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
          </Box>

          {/* Minimal bottom padding */}
          <Box pb="1rem" />
        </Container>
      </Box>
    </Box>
  );
};

export default SecurityInfoComponent;
