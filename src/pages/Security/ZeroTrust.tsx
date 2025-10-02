import React from "react";
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
import Container from "../../components/Container";
import zerogradient from "../../assets/png imgs/zerogradient.avif";
import zero1 from '../../assets/png imgs/zero1.avif'
import zero2 from '../../assets/png imgs/zero2.avif'
import zero3 from '../../assets/png imgs/zero3.avif'

const ZeroTrust = () => {
  // ✅ Card Data Array
  const cardData = [
    {
      id: 1,
      heading: "600",
      text: "Million identity attacks per day — thwarted",
      image: zero1,
      bg: "white",
      textColor: "blue.900",
    },
    {
      id: 2,
      heading: "2.75x",
      text: "Increase in ransomware-linked encounters — avoided",
      image: zero2,
      bg: "white",
      textColor: "blue.900",
    },
    {
      id: 3,
      heading: "146%",
      text: "Rise in AiTM phishing attacks — dodged",
      image: zero3,
      bg: "blue.900",
      textColor: "white",
    },
  ];

  return (
    <Box
      id="Zero-Trust"
      bgImage={zerogradient}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      position="relative"
      py={{ base: "1rem", md: "1.5rem" }}
      textAlign="center"
    >
      <Container>
        {/* Heading Section */}
        <VStack maxW="1060px" mx="auto">
          <Text fontSize="0.75rem" color="#8c8b8bff" fontWeight="semibold">
            ZERO TRUST
          </Text>
          <Heading fontSize={{ base: "2xl", md: "2.5rem" }} fontWeight="semibold" mt={-3}>
            Employs Zero Trust principles
          </Heading>
          <Text fontSize={{ base: "md", md: "1rem" }} color="gray.700">
            PHISHCODE products are built on Zero Trust principles. Confidently
            address modern security challenges knowing that industry-standard Zero
            Trust principles are built in.
          </Text>

          {/* Buttons */}
          <HStack spacing={2} pt={4}>
            <Button
              bg="#0E1726"
              color="white"
              fontWeight="semibold"
              fontSize={{ base: "sm", md: "15px" }}
              h="53px"
              w="110px"
              px={6}
              py={6}
              borderRadius="md"
              _hover={{ bg: "#243B65" }}
            >
              Learn More
            </Button>
            <Button
              variant="outline"
              borderColor="#0E1726"
              borderWidth="2px"
              color="#0E1726"
              h="53px"
              fontSize={{ base: "sm", md: "15px" }}
              fontWeight="semibold"
              borderRadius="6px"
              _hover={{ bg: "gray.200" }}
            >
              Explore Zero Trust
            </Button>
          </HStack>
        </VStack>

        {/* ✅ Dynamic Cards */}
        <Flex
          justify="center"
          gap={{ base: "1rem", md: "2rem" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          mt="4rem"
        >
          {cardData.map((card) => (
            <Box
              key={card.id}
              bg={card.bg}
              borderRadius="xl"
              boxShadow="md"
              w={{ base: "100%", md: "280px" }}
              textAlign="left"
              overflow="hidden"
              color={card.textColor}
            >
              <Box p={4}>
                <Heading fontSize="4xl">{card.heading}</Heading>
                <Text fontSize="sm">{card.text}</Text>
              </Box>
              <Box p={2}>
                <Image
                src={card.image}
                alt={`Card ${card.id}`}
                w="100%"
                h="160px"
                objectFit="cover"
                borderRadius="12px 12px"
                />
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default ZeroTrust;
