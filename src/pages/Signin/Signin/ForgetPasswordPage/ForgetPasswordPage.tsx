import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Input, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import PageLayoutTemplate from "../../../../components/PageLayoutTemplate/PageLayoutTemplate";

const ForgetPasswordPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    if (email.length === 0) return "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Real-time email validation
    const error = validateEmail(value);
    setEmailError(error);
  };

  const handleNext = () => {
    const error = validateEmail(email);

    if (error || email.length === 0) {
      setEmailError(error || "Please enter your email address");
      return;
    }

    console.log("Email submitted:", email);
    alert("We've emailed your password reset link");
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleBackToSignIn = () => {
    navigate("/signin");
  };

  // Responsive values for form elements
  const descriptionFontSize = useBreakpointValue({
    base: "0.85rem", // xs
    xs: "0.85rem",
    sm: "0.9rem", // sm
    md: "clamp(0.9rem, 3vw, 1rem)",
    lg: "clamp(0.9rem, 3vw, 1rem)",
  });

  const inputFontSize = useBreakpointValue({
    base: "0.85rem", // xs
    xs: "0.85rem",
    sm: "0.9rem", // sm
    md: "clamp(0.9rem, 3vw, 1rem)",
    lg: "clamp(0.9rem, 3vw, 1rem)",
  });

  const inputPadding = useBreakpointValue({
    base: "0.8rem 0", // xs
    xs: "0.8rem 0",
    sm: "0.8rem 0", // sm
    md: "0.75rem 0",
    lg: "0.75rem 0",
  });

  const linkFontSize = useBreakpointValue({
    base: "0.75rem", // xs
    xs: "0.75rem",
    sm: "0.8rem", // sm
    md: "clamp(0.85rem, 3vw, 0.9375rem)",
    lg: "clamp(0.85rem, 3vw, 0.9375rem)",
  });

  const errorFontSize = useBreakpointValue({
    base: "0.75rem", // xs
    xs: "0.75rem",
    sm: "0.75rem", // sm
    md: "clamp(0.75rem, 2.5vw, 0.8rem)",
    lg: "clamp(0.75rem, 2.5vw, 0.8rem)",
  });

  // Content for the template - USING EXACT SAME SLOTS AS SIGN IN
  const pageContent = (
    <>
      {/* Description Text - SLOT 1 (where email input is in Sign In) */}
      <Box mb="1.5rem">
        <Text
          color="#4a5568"
          fontSize={descriptionFontSize}
          mb="0.5rem"
          textAlign="left"
          lineHeight="1.4"
          p="0.75rem 0"
        >
          We'll send a code to verify your email. Please enter it below.
        </Text>
      </Box>

      {/* Email Input - SLOT 2 (where password input is in Sign In) */}
      <Box mb="1.5rem">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
          bg="transparent"
          border="none"
          borderBottom={
            emailError ? "0.0625rem solid #e53e3e" : "0.0625rem solid #4285f4"
          }
          borderRadius="0"
          boxShadow="none"
          fontSize={inputFontSize}
          color="#4a5568"
          p={inputPadding}
          w="100%"
          mb="0.5rem"
          _placeholder={{
            color: "#a0aec0",
            fontSize: inputFontSize,
          }}
          _focus={{
            borderBottomColor: "#4285f4",
            boxShadow: "none",
          }}
        />
        {emailError && (
          <Text
            color="#e53e3e"
            fontSize={errorFontSize}
            mt="0.25rem"
            pl="0"
            lineHeight="1.2"
          >
            {emailError}
          </Text>
        )}
      </Box>

      {/* Link - SLOT 3 (where "No account? Create one!" links are in Sign In) */}
      <Box mb="1.5rem">
        <Box mb="2">
          <Text
            as="span"
            color="#2d3748"
            fontSize={linkFontSize}
            fontWeight="normal"
            lineHeight="1.4"
            display="inline-flex"
            alignItems="baseline"
          >
            Remember your password?{" "}
            <Button
              onClick={handleBackToSignIn}
              color="#4285f4"
              fontWeight="400"
              fontSize={linkFontSize}
              bg="none"
              border="none"
              textDecoration="none"
              cursor="pointer"
              verticalAlign="baseline"
              lineHeight="inherit"
              p="0.125rem 0"
              ml="0.375rem"
              minW="auto"
              h="auto"
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
              Back to Sign in
            </Button>
          </Text>
        </Box>
      </Box>
    </>
  );

  return (
    <PageLayoutTemplate
      title="Verify your email"
      onNext={handleNext}
      onCancel={handleCancel}
      nextButtonText="Verify"
    >
      {pageContent}
    </PageLayoutTemplate>
  );
};

export default ForgetPasswordPage;
