import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Button,
  VStack,
} from "@chakra-ui/react";
import Container from "../../components/Container";

// Icon components
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

const SecurityInfoComponent = () => {
  return (
    <Box position="relative" w="100%" minH="80vh">
      {/* Split background - full width */}
      <Box position="absolute" inset={0} w="100%">
        {/* Top half - solid color */}
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="50%"
          bg="#F9FDFE"
        />
        {/* Bottom half - background image */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          w="100%"
          h="50%"
          bgImage="url('/contact_banner.png')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
        />
      </Box>

      {/* Header content positioned over the solid color portion */}
      <Box position="absolute" top={0} left={0} w="100%" h="50%" zIndex={1}>
        <Container>
          <VStack
            spacing="1rem"
            align="center"
            justify="center"
            h="100%"
            pt="2rem"
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
              size="2xl"
              fontWeight="semibold"
              color="gray.800"
              lineHeight="shorter"
              textAlign="center"
            >
              Get the security info you need to stay ahead
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="60%" textAlign="center">
              Learn about the benefits of Zero Trust, trustworthy AI, and
              security for the age of generative AI.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Cards positioned at the intersection of both backgrounds */}
      <Box position="absolute" top="35%" left={0} w="100%" zIndex={1}>
        <Container>
          <VStack align="center">
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="2rem" w="100%">
              {/* Card 1 - Zero Trust */}
              <Card
                bg="white"
                shadow="lg"
                borderRadius="3xl"
                border="1px"
                borderColor="gray.100"
                _hover={{ shadow: "xl", transform: "translateY(-0.125rem)" }}
                transition="all 0.2s"
                w="100%"
              >
                <CardBody p="2rem">
                  <VStack align="start" spacing="1.5rem" h="100%">
                    <SecurityIcon />
                    <VStack align="start" spacing="1rem" flex={1}>
                      <Heading
                        as="h3"
                        size="md"
                        color="gray.800"
                        fontWeight="semibold"
                      >
                        Zero Trust in the age of AI
                      </Heading>
                      <Text color="gray.600" fontSize="sm" lineHeight="tall">
                        Learn how to simplify your Zero Trust strategy and
                        deployments with new solutions.
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
                      Watch the webinar
                    </Button>
                  </VStack>
                </CardBody>
              </Card>

              {/* Card 2 - Commitment */}
              <Card
                bg="white"
                shadow="lg"
                borderRadius="3xl"
                border="1px"
                borderColor="gray.100"
                _hover={{ shadow: "xl", transform: "translateY(-0.125rem)" }}
                transition="all 0.2s"
                w="100%"
              >
                <CardBody p="2rem">
                  <VStack align="start" spacing="1.5rem" h="100%">
                    <CommitmentIcon />
                    <VStack align="start" spacing="1rem" flex={1}>
                      <Heading
                        as="h3"
                        size="md"
                        color="gray.800"
                        fontWeight="semibold"
                      >
                        Explore our commitment to secure, private, and safe AI
                      </Heading>
                      <Text color="gray.600" fontSize="sm" lineHeight="tall">
                        Microsoft has committed to delivering trustworthy
                        security AI in its products and platforms.
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
                      Watch the video
                    </Button>
                  </VStack>
                </CardBody>
              </Card>

              {/* Card 3 - GenAI era */}
              <Card
                bg="white"
                shadow="lg"
                borderRadius="3xl"
                border="1px"
                borderColor="gray.100"
                _hover={{ shadow: "xl", transform: "translateY(-0.125rem)" }}
                transition="all 0.2s"
                w="100%"
              >
                <CardBody p="2rem">
                  <VStack align="start" spacing="1.5rem" h="100%">
                    <GenAIIcon />
                    <VStack align="start" spacing="1rem" flex={1}>
                      <Heading
                        as="h3"
                        size="md"
                        color="gray.800"
                        fontWeight="semibold"
                      >
                        Prepare for the GenAI era
                      </Heading>
                      <Text color="gray.600" fontSize="sm" lineHeight="tall">
                        Learn how security is responding to the rise of
                        generative AI and how Microsoft is prioritizing security
                        to stay ahead of attackers exploiting new technologies.
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
                      Watch the session from Ignite
                    </Button>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default SecurityInfoComponent;
