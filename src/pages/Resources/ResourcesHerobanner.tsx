import { VStack, Box, Heading, Text } from "@chakra-ui/react";
import Container from "../../components/Container";
import contact_banner from "../../assets/png imgs/phishcode banner 3@5x.png";

const ResourcesHerobanner = () => {
  return (
    <Box bgImage={contact_banner}
      bgColor="#0E1726"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      height="auto"
      width="100vw"
      position="relative"
      boxShadow="md"
      _hover={{ boxShadow: "lg"}}
      >
      <Container fullWidth>
        <VStack spacing={4} textAlign="center">
          <Box py="4rem">
            <Heading size="44px" fontWeight="semibold" textColor="white">
              Security 101
            </Heading>
            <Text fontSize="16px" color="gray.600" mt={4} textColor="white">
              Empower your workforce with expert-led cybersecurity awareness training and resources from PHISHCODE.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ResourcesHerobanner;
