import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import vital from "../../assets/png imgs/vital.avif"
import Container from "../../components/Container";

const VitalResources = () => {
  return (
    <Box id="Vital-resources" bgColor="#F9FDFE">
      <Container>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          maxW="1200px"
          mx="auto"
          gap={{ base: "2rem", md: "4rem" }}
        >
          {/* Left Content */}
          <VStack align="flex-start" spacing="0.5rem" maxW="500px">
            <Text fontSize="0.75rem" color="#a9a8a8" fontWeight="semibold" textTransform="uppercase">
              Vital Resources
            </Text>
            <Heading fontSize={{ base: "2xl", md: "2.25rem" }} fontWeight="semibold" color="gray.900">
              Stay informed—stay on top of threats
            </Heading>
            <Text fontSize={{ base: "md", md: "1rem" }} color="gray.600" lineHeight="1.6">
              Discover top strategies, tips, and best practices from PHISHCODE for strengthening
              your organization's security in the age of AI.
            </Text>
            <Button
                bg="#0E1726"
                color="white"
                fontWeight="semibold"
                fontSize="0.94rem" //15px
                px="1rem"
                py="0.5rem"
                h="3.5rem"
                w="8.3rem"
                mt={4}
                borderRadius="lg"
                _hover={{ bg: "#243B65" }}
                // onClick={() => navigate("/signup/step1")}
              >
                Register Now
              </Button>
          </VStack>
          {/* Right Image */}
          <Box
            w={{ base: "100%", md: "500px" }}
            h={{ base: "auto", md: "auto" }}
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="lg"
          >
            <Image
              src={vital}
              alt="Stay Informed"
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default VitalResources;
