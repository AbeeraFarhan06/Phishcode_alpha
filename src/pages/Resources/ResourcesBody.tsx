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
import Container from "../../components/Container";

const filters = ["Infographics", "Blogs", "Demos"];

const Body = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  // Dummy cards data
  const cards = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    title: `${activeFilter} - Card ${i + 1}`,
  }));

  return (
    <Box id="resource-body">
      <Container>
        {/* Heading */}
        <Heading fontSize="24px" fontWeight="semibold" py={4}>
          Select a filter
        </Heading>
        {/* Filters */}
        <HStack spacing={4} justify="left" mb={4}>
          {filters.map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <Button
                key={filter}
                variant="ghost"
                bg={isSelected ? "#0E1726" : "#dee0e1ff"}
                color={isSelected ? "white" : "gray.700"}
                fontSize={{ base: "0.875rem", md: "0.875rem" }}
                px={5}
                py={2}
                borderRadius="2.5rem"
                _hover={{ bg: isSelected ? "#1A2B50" : "#c3c7c9ff" }}
                _active={{ bg: isSelected ? "#1A2B50" : "gray.300" }}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            );
          })}
        </HStack>

        {/* results text */}
        <Text fontSize="16px" fontWeight="semibold" py={4}>
          Showing 12 of 36 results
        </Text>

        {/* Cards Grid */}
        <SimpleGrid columns={{ base: 1, md: 1, lg: 1, xl: 3 }} spacing={6}>
          {cards.map((card) => (
            <Box
              key={card.id}
              bg="#1d2f4fff"
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
      </Container>
    </Box>
  );
};

export default Body;
