import React, { useRef } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Container from "../../components/Container";
import { IoIosArrowForward } from "react-icons/io";

const MotionBox = motion(Box);

interface CardItem {
  image: string;
  tt: string;
  title: string;
  description: string;
  buttonText: string;
}

const cards: CardItem[] = [
  {
    image: "https://via.placeholder.com/280x160",
    tt: "Executive summary",
    title: "Evolved security for evolving threats",
    description:
      "Learn how the Microsoft Secure Future Initiative can help you prepare for evolving security threats.",
    buttonText: "Read the summary",
  },
  {
    image: "https://via.placeholder.com/280x160",
    tt: "Blog",
    title: "Security, compliance, and identity blog",
    description:
      "Stay on top of security, compliance, and identity issues that impact your business.",
    buttonText: "Read the blog",
  },
  {
    image: "https://via.placeholder.com/280x160",
    tt: "Report",
    title: "Microsoft Digital Defense Report 2024",
    description:
      "Read the CISO Executive Summary of the Digital Defense Report, a condensed edition that focuses on the analysis and issues most important to CISOs.",
    buttonText: "Read the report",
  },
];

const LatestInnovations = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Box id="Latest-innovations" bg="#F9FDFE" mt={12} position="relative">
        <Text
          fontSize="0.75rem"
          color="#a9a8a8"
          fontWeight="semibold"
          textTransform="uppercase"
        >
          Latest Innovations
        </Text>
        <Heading
          fontSize={{ base: "2xl", md: "2.25rem" }}
          fontWeight="semibold"
          color="gray.900"
          mb={8}
        >
          Microsoft continues to deliver new innovations in security
        </Heading>

        {/* Top Featured Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          bg="white"
          borderRadius="xl"
          boxShadow="md"
          overflow="hidden"
          mb={10}
        >
          {/* Text Section */}
          <VStack
            align="flex-start"
            spacing={4}
            p={{ base: 4, md: 8 }}
            flex="1"
          >
            <Text fontSize="sm" color="gray.600">
              Guide
            </Text>
            <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
              Learn how to navigate cybersecurity in the AI era
            </Heading>
            <Text fontSize="md" color="gray.600">
              Explore four key themes for strengthening your security strategy
              in the age of AI.
            </Text>
            <Button colorScheme="blue" mt={4}>
              Get the guide
            </Button>
          </VStack>
          {/* Image Section */}
          <Box
            flex="1"
            bg="gray.50"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="https://via.placeholder.com/300x400"
              alt="Cybersecurity Guide"
              borderRadius="xl"
              w={{ base: "80%", md: "300px" }}
              objectFit="cover"
              m={6}
            />
          </Box>
        </Flex>

        {/* Horizontal Scroll Cards */}
        <Flex
          ref={scrollRef}
          overflowX="auto"
          css={{
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
          }}
          gap={6}
          pb={4}
        >
          {cards.map((card: CardItem, index: number) => (
            <MotionBox
              key={index}
              bg="white"
              borderRadius="1.25rem"
              overflow="hidden"
              boxShadow="md"
              display="flex"
              flexDirection="column"
              minW="280px"
              maxW="280px"
              h="380px"
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
              {/* Image Section */}
              <Box p={1} borderRadius="0.9375rem" overflow="hidden">
                <Image
                  src={card.image}
                  w="100%"
                  h="160px"
                  objectFit="cover"
                  borderRadius="1rem"
                  transition="transform 0.3s ease-in-out"
                  _hover={{ transform: "scale(1.05)" }}
                />
              </Box>

              {/* Content Section */}
              <Box
                p={4}
                flex="1"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box>
                  <Text
                    fontSize="0.875rem"
                    fontWeight="medium"
                    color="gray.600"
                  >
                    {card.tt}
                  </Text>
                  <Text
                    fontSize={{ base: "1rem", md: "1.125rem" }}
                    fontWeight="semibold"
                    color="gray.800"
                    mt={2}
                    noOfLines={2}
                  >
                    {card.title}
                  </Text>
                  <Text
                    fontSize={{ base: "0.875rem", md: "0.9375rem" }}
                    color="gray.700"
                    mt={3}
                    noOfLines={3}
                  >
                    {card.description}
                  </Text>
                </Box>

                {/* Button Row */}
                <Box mt={4} display="flex" alignItems="center">
                  <Button
                    bg="#0E1726"
                    color="white"
                    fontSize="0.875rem"
                    borderRadius="md"
                    _hover={{ bg: "#243B65" }}
                    mr={2}
                    size="sm"
                  >
                    <IoIosArrowForward />
                  </Button>
                  <Text
                    fontSize="0.875rem"
                    color="#22395fff"
                    fontWeight="medium"
                  >
                    {card.buttonText}
                  </Text>
                </Box>
              </Box>
            </MotionBox>
          ))}
        </Flex>

        {/* Scroll Controls */}
        <HStack
          position="absolute"
          bottom="-5rem"
          left="5%"
          transform="translateX(-50%)"
          spacing={4}
        >
          <IconButton
            aria-label="Scroll Left"
            icon={<ChevronLeftIcon />}
            onClick={() => scroll("left")}
            borderRadius="full"
            variant="outline" 
            borderColor="#0E1726" 
            borderWidth="2px"
            color="#0E1726" 
            _hover={{ bg: "blue.50" }} 
            size="lg"
          />
          <IconButton
            aria-label="Scroll Right"
            icon={<ChevronRightIcon />}
            onClick={() => scroll("right")}
            borderRadius="full"
            variant="outline"
            borderColor="#0E1726"
            borderWidth="2px"
            color="#0E1726"
            _hover={{ bg: "blue.50" }}
            size="lg"
          />
        </HStack>
      </Box>
    </Container>
  );
};

export default LatestInnovations;
