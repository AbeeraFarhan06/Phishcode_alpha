import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  Text,
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Heading,
} from "@chakra-ui/react";
import phishcode_logoo_1 from "../../assets/logo/phishcode_logoo_1.png";

const OTPVerificationPage = () => {
  const navigate = useNavigate();

  const [otpCode, setOtpCode] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and limit length if needed
    if (/^\d*$/.test(value)) {
      setOtpCode(value);
    }
  };

  const handleVerify = () => {
    console.log("OTP submitted:", otpCode);
    // Handle OTP verification logic
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleResendCode = () => {
    console.log("Resend OTP code");
    // Handle resend OTP logic
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#f5f5f5"
    >
      <Card
        // Using responsive props directly
        w={{ base: "95%", sm: "90%", md: "70%", lg: "32rem" }}
        h={{ base: "75vh", sm: "auto", md: "70vh", lg: "32rem" }}
        minH="32rem"
        maxW={{ base: "none", md: "34rem", lg: "32rem" }}
        maxH={{ base: "none", md: "34rem", lg: "32rem" }}
        borderRadius="0"
        boxShadow="lg"
        border="none"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <CardBody
          p={{
            base: "2rem 1.5rem",
            sm: "2.5rem",
            md: "3rem",
            lg: "3rem",
          }}
          display="flex"
          flexDirection="column"
          flex="1"
        >
          {/* Logo */}
          <Box textAlign="start" mb="4">
            <Image
              src={phishcode_logoo_1}
              alt="PhishCode Logo"
              h="2.5rem"
              w="auto"
              cursor="pointer"
              onClick={handleLogoClick}
            />
          </Box>

          {/* Title */}
          <Heading
            as="h2"
            textAlign="start"
            fontWeight="normal"
            color="#2d3748"
            fontSize="2rem"
            mb={{ base: "0.25rem", md: "0.5rem" }}
            lineHeight="1.2"
          >
            Enter code to verify your identity
          </Heading>

          {/* Content Area */}
          <Box
            flex="1"
            minH={{ base: "10rem", sm: "12rem", md: "14rem" }}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <Box>
              {/* Description Text */}
              <Box
                mb={{ base: "1.25rem", md: "1.5rem" }}
                mt={{ base: "0.5rem", md: "1rem" }}
              >
                <Text
                  color="#4a5568"
                  fontSize={{ base: "1rem", sm: "1.0625rem", md: "1.125rem" }}
                  mb="0.5rem"
                  textAlign="left"
                  lineHeight="1.4"
                  p={{ base: "0.5rem 0", md: "0.75rem 0" }}
                >
                  A code has been sent to your email. Please enter it to sign
                  in.
                </Text>
              </Box>

              {/* OTP Input */}
              <Box mb={{ base: "1.25rem", md: "1.5rem" }}>
                <Input
                  type="text"
                  name="otpCode"
                  placeholder="Enter Code"
                  value={otpCode}
                  onChange={handleInputChange}
                  maxLength={10}
                  autoComplete="one-time-code"
                  inputMode="numeric"
                  bg="transparent"
                  border="none"
                  borderBottom="0.0625rem solid #4285f4"
                  borderRadius="0"
                  boxShadow="none"
                  fontSize={{ base: "1rem", sm: "0.95rem", md: "1rem" }}
                  color="#4a5568"
                  p={{ base: "1rem 0", sm: "0.875rem 0", md: "0.75rem 0" }}
                  w="100%"
                  letterSpacing="0.125rem"
                  minH={{ base: "2rem", md: "auto" }}
                  _placeholder={{
                    color: "#a0aec0",
                    fontSize: { base: "1rem", sm: "0.95rem", md: "1rem" },
                    textAlign: "left",
                    letterSpacing: "normal",
                  }}
                  _focus={{
                    borderBottomColor: "#4285f4",
                    boxShadow: "none",
                    outline: "none",
                  }}
                  _hover={{
                    borderBottomColor: "#4285f4",
                  }}
                />
              </Box>

              {/* Resend Link */}
              <Box mb={{ base: "1.25rem", md: "1.5rem" }}>
                <Box mb="1rem">
                  <Box
                    display="inline-flex"
                    alignItems="baseline"
                    flexWrap="wrap"
                    justifyContent="flex-start"
                    flexDirection={{ base: "column", md: "row" }}
                    gap={{ base: "0.25rem", md: "0" }}
                  >
                    <Text
                      as="span"
                      color="#2d3748"
                      fontSize="0.875rem"
                      fontWeight="normal"
                      lineHeight="1.5"
                    >
                      Did not receive code?
                    </Text>
                    <Button
                      onClick={handleResendCode}
                      color="#4285f4"
                      fontWeight="400"
                      fontSize="0.875rem"
                      bg="none"
                      border="none"
                      textDecoration="none"
                      cursor="pointer"
                      verticalAlign="baseline"
                      lineHeight="inherit"
                      p="0.25rem 0"
                      ml={{ base: "0", md: "0.375rem" }}
                      mt={{ base: "0.25rem", md: "0" }}
                      minW="auto"
                      h="auto"
                      minH={{ base: "2rem", md: "auto" }}
                      _hover={{
                        color: "#3367d6",
                        textDecoration: "underline",
                        bg: "transparent",
                      }}
                      _focus={{
                        boxShadow: "none",
                        outline: "none",
                        bg: "transparent",
                      }}
                      _active={{
                        bg: "transparent",
                      }}
                    >
                      Resend code
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Buttons */}
          <Flex justifyContent="flex-end" mt="auto" gap="0.5rem">
            <Button
              onClick={handleCancel}
              bg="#e2e8f0"
              color="#2d3748"
              border="none"
              borderRadius="0"
              fontWeight="400"
              fontSize={{ base: "0.75rem", sm: "0.8rem", md: "0.875rem" }}
              p={{
                base: "0.6rem 1.2rem",
                sm: "0.7rem 1.5rem",
                md: "0.6rem 2rem",
              }}
              minW="7rem"
              w={{ base: "5.5rem", sm: "6rem", md: "7rem" }}
              transition="background-color 0.2s ease"
              _hover={{
                bg: "#cbd5e0",
                color: "#2d3748",
              }}
              _focus={{
                bg: "#cbd5e0",
                color: "#2d3748",
                boxShadow: "none",
              }}
              _active={{
                bg: "#cbd5e0",
                color: "#2d3748",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleVerify}
              bg="#2d3748"
              color="white"
              border="none"
              borderRadius="0"
              fontWeight="400"
              fontSize={{ base: "0.75rem", sm: "0.8rem", md: "0.875rem" }}
              p={{
                base: "0.6rem 1.2rem",
                sm: "0.7rem 1.5rem",
                md: "0.6rem 2rem",
              }}
              minW="7rem"
              w={{ base: "5.5rem", sm: "6rem", md: "7rem" }}
              transition="background-color 0.2s ease"
              _hover={{
                bg: "#1a202c",
                color: "white",
              }}
            >
              Verify
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

export default OTPVerificationPage;
