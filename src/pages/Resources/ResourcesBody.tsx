import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
} from "@chakra-ui/react";

const filters = ["AI in Security", "Cloud Security", "Risk and Compliance"];

const Body = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  // Dummy cards data
  const cards = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    title: `${activeFilter} - Card ${i + 1}`,
  }));

  return (
    <Box p={8} bg="gray.50" minH="100vh">
      {/* Header */}
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading size="2xl">Security 101</Heading>
        <Text fontSize="lg" color="gray.600">
          Deepen your security knowledge and gain a fundamental understanding of
          a variety of cybersecurity, identity, and compliance topics and best
          practices.
        </Text>
      </VStack>

      {/* Filters */}
      <HStack spacing={4} justify="center" mb={8}>
        {filters.map((filter) => (
          <Button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            colorScheme={activeFilter === filter ? "blue" : "gray"}
            variant={activeFilter === filter ? "solid" : "outline"}
            borderRadius="full"
            px={6}
          >
            {filter}
          </Button>
        ))}
      </HStack>

      {/* Cards Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {cards.map((card) => (
          <Box
            key={card.id}
            bg="blue.500"
            height="200px"
            borderRadius="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontSize="lg"
            fontWeight="bold"
            shadow="md"
          >
            {card.title}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Body;
