import React from "react";
import { Box, Flex, Text, useColorModeValue, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Container from "../../components/Container";

const Footer: React.FC = () => {
  const bgColor = useColorModeValue("#f1f2f379", "gray.700");
  const borderColor = useColorModeValue("#8c8c8d79", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      bgColor={bgColor}
      borderTop={`0.0625rem solid ${borderColor}`}
      width="100%"
    >
      <Container noVerticalPadding py="0.75rem">
        <Flex
          justify="left"
          align="center"
          fontSize={{ base: "0.7rem", md: "0.75rem" }}
          color={textColor}
          flexWrap="wrap"
          gap={{ base: "0.25rem", md: "0" }}
        >
          <Text
            pt="0.75rem"
            lineHeight="1.4"
            textAlign={{ base: "center", md: "left" }}
            width={{ base: "100%", md: "auto" }}
          >
            <Link as={RouterLink} to="/privacy-statement">
              Your Privacy Choices
            </Link>{" "}
            |{" "}
            <Link as={RouterLink} to="/privacy-statement">
              Privacy Statement
            </Link>{" "}
            |{" "}
            <Link as={RouterLink} to="/terms-and-conditions">
              Terms & Conditions
            </Link>{" "}
            | © PHISHCODE
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
