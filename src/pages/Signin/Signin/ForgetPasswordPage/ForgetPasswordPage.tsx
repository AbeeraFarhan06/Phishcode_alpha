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
    const value = e.target.value.replace(/\s/g, ""); // Remove spaces like in SignInPage
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
    navigate("/reset-password");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleBackToSignIn = () => {
    navigate("/signin");
  };

  // Enhanced responsive values for better mobile support
  const descriptionFontSize = useBreakpointValue({
    base: "1rem", // Better readability on mobile
    xs: "1rem",
    sm: "1.0625rem",
    md: "1.125rem",
    lg: "1.125rem",
  });

  const inputFontSize = useBreakpointValue({
    base: "1rem", // Standard readable size on mobile
    xs: "1rem", // Prevents zoom on iOS
    sm: "0.95rem",
    md: "1rem",
    lg: "1rem",
  });

  const inputPadding = useBreakpointValue({
    base: "1rem 0", // Better touch target on mobile
    xs: "1rem 0",
    sm: "0.875rem 0",
    md: "0.75rem 0",
    lg: "0.75rem 0",
  });

  const linkFontSize = useBreakpointValue({
    base: "0.875rem", // Better readability on mobile
    xs: "0.875rem",
    sm: "0.875rem",
    md: "0.875rem",
    lg: "0.875rem",
  });

  const errorFontSize = useBreakpointValue({
    base: "0.8125rem", // Slightly larger for mobile readability
    xs: "0.8125rem",
    sm: "0.75rem",
    md: "0.75rem",
    lg: "0.75rem",
  });

  const inputSpacing = useBreakpointValue({
    base: "1.25rem", // More spacing on mobile
    xs: "1.25rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "1.5rem",
  });

  const topSpacing = useBreakpointValue({
    base: "0.5rem", // Less top spacing on mobile
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1rem",
  });

  // Enhanced input styles with better mobile support
  const inputStyles = {
    bg: "transparent",
    border: "none",
    borderBottom: emailError
      ? "0.0625rem solid #e53e3e"
      : "0.0625rem solid #4285f4",
    borderRadius: "0",
    boxShadow: "none",
    fontSize: inputFontSize,
    color: "#4a5568",
    p: inputPadding,
    w: "100%",
    mb: "0.5rem",
    minH: {
      base: "2rem", // Better touch target on mobile
      xs: "2rem",
      sm: "auto",
      md: "auto",
      lg: "auto",
    },
    _placeholder: {
      color: "#a0aec0",
      fontSize: inputFontSize,
    },
    _focus: {
      borderBottomColor: "#4285f4",
      boxShadow: "none",
      outline: "none",
    },
    _hover: {
      borderBottomColor: "#4285f4",
    },
  };

  // Content for the template
  const pageContent = (
    <Box>
      {/* Description Text - SLOT 1 */}
      <Box mb={inputSpacing} mt={topSpacing}>
        <Text
          color="#4a5568"
          fontSize={descriptionFontSize}
          mb="0.5rem"
          textAlign="left"
          lineHeight="1.4"
          p={{
            base: "0.5rem 0", // Less padding on mobile
            xs: "0.5rem 0",
            sm: "0.75rem 0",
            md: "0.75rem 0",
            lg: "0.75rem 0",
          }}
        >
          We'll send a code to verify your email. Please enter it below.
        </Text>
      </Box>

      {/* Email Input - SLOT 2 */}
      <Box mb={inputSpacing}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
          title="Please enter a valid email address"
          autoComplete="email"
          inputMode="email" // Better mobile keyboard
          {...inputStyles}
        />
        {emailError && (
          <Text
            color="#e53e3e"
            fontSize={errorFontSize}
            mt="0.5rem"
            pl="0"
            lineHeight="1.3"
          >
            {emailError}
          </Text>
        )}
      </Box>

      {/* Link - SLOT 3 */}
      <Box mb={inputSpacing}>
        <Box mb="1rem">
          <Text
            as="span"
            color="#2d3748"
            fontSize={linkFontSize}
            fontWeight="normal"
            lineHeight="1.5"
            display="inline-flex"
            alignItems="baseline"
            flexWrap="wrap"
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
              p="0.25rem 0"
              ml="0.25rem"
              minW="auto"
              h="auto"
              minH={{
                base: "2rem", // Better touch target on mobile
                xs: "2rem",
                sm: "auto",
                md: "auto",
                lg: "auto",
              }}
              _hover={{
                color: "#3367d6",
                textDecoration: "underline",
                bg: "transparent",
              }}
              _focus={{
                boxShadow: "outline",
                outline: "2px solid #4285f4",
                outlineOffset: "2px",
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
    </Box>
  );

  return (
    <Box
      sx={{
        // Enhanced mobile-specific styling with forced shadow
        "& .chakra-card": {
          height: {
            base: "100vh !important", // Full height on mobile
            xs: "100vh !important",
            sm: "auto !important",
            md: "auto !important",
            lg: "auto !important",
          },
          maxHeight: {
            base: "100vh !important", // Constrain to viewport on mobile
            xs: "100vh !important",
            sm: "none !important",
            md: "none !important",
            lg: "none !important",
          },
          minHeight: {
            base: "100vh !important",
            xs: "100vh !important",
            sm: "32rem !important",
            md: "32rem !important",
            lg: "32rem !important",
          },
          borderRadius: {
            base: "0 !important", // Sharp edges everywhere
            xs: "0 !important",
            sm: "0 !important",
            md: "0 !important",
            lg: "0 !important",
          },
          // Force shadow with higher specificity
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4) !important",
        },
        "& .chakra-card.css-0": {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4) !important",
        },
        // Media query for larger screens
        "@media (min-width: 30em)": {
          "& .chakra-card": {
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4) !important",
          },
          "& .chakra-card.css-0": {
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4) !important",
          },
        },
        // Ensure proper viewport handling on mobile
        "@media (max-width: 30em)": {
          minHeight: "100vh",
          height: "100vh",
          overflow: "hidden",
        },
      }}
    >
      <PageLayoutTemplate
        title="Verify your email"
        onNext={handleNext}
        onCancel={handleCancel}
        nextButtonText="Verify"
      >
        {pageContent}
      </PageLayoutTemplate>
    </Box>
  );
};

export default ForgetPasswordPage;
