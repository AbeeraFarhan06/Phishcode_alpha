import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Input, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import PageLayoutTemplate from "../../../../components/PageLayoutTemplate/PageLayoutTemplate";

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

  // Enhanced responsive values for better mobile support
  const descriptionFontSize = useBreakpointValue({
    base: "1rem", // Better readability on mobile
    xs: "1rem",
    sm: "1.0625rem",
    md: "1.125rem",
    lg: "1.125rem",
  });

  const otpInputFontSize = useBreakpointValue({
    base: "1rem", // Standard readable size on mobile
    xs: "1rem", // Prevents zoom on iOS
    sm: "0.95rem",
    md: "1rem",
    lg: "1rem",
  });

  const otpInputPadding = useBreakpointValue({
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

  const linkFlexDirection = useBreakpointValue<"row" | "column">({
    base: "column", // Stack vertically on mobile
    xs: "column",
    sm: "column",
    md: "row", // Inline on desktop
    lg: "row",
  });

  const linkGap = useBreakpointValue({
    base: "0.25rem",
    xs: "0.25rem",
    sm: "0.25rem",
    md: "0",
    lg: "0",
  });

  const linkMarginLeft = useBreakpointValue({
    base: "0",
    xs: "0",
    sm: "0",
    md: "0.375rem",
    lg: "0.375rem",
  });

  const linkMarginTop = useBreakpointValue({
    base: "0.25rem",
    xs: "0.25rem",
    sm: "0.25rem",
    md: "0",
    lg: "0",
  });

  // Enhanced input styles with better mobile support
  const inputStyles = {
    bg: "transparent",
    border: "none",
    borderBottom: "0.0625rem solid #4285f4",
    borderRadius: "0",
    boxShadow: "none",
    fontSize: otpInputFontSize,
    color: "#4a5568",
    p: otpInputPadding,
    w: "100%",
    letterSpacing: "0.125rem",
    minH: {
      base: "2rem", // Better touch target on mobile
      xs: "2rem",
      sm: "auto",
      md: "auto",
      lg: "auto",
    },
    _placeholder: {
      color: "#a0aec0",
      fontSize: otpInputFontSize,
      textAlign: "left",
      letterSpacing: "normal",
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
          A code has been sent to your email. Please enter it to sign in.
        </Text>
      </Box>

      {/* OTP Input - SLOT 2 */}
      <Box mb={inputSpacing}>
        <Input
          type="text"
          name="otpCode"
          placeholder="Enter Code"
          value={otpCode}
          onChange={handleInputChange}
          maxLength={10}
          autoComplete="one-time-code"
          inputMode="numeric" // Better mobile keyboard
          {...inputStyles}
        />
      </Box>

      {/* Resend Link - SLOT 3 */}
      <Box mb={inputSpacing}>
        <Box mb="1rem">
          <Box
            display="inline-flex"
            alignItems="baseline"
            flexWrap="wrap"
            justifyContent="flex-start"
            flexDirection={linkFlexDirection}
            gap={linkGap}
          >
            <Text
              as="span"
              color="#2d3748"
              fontSize={linkFontSize}
              fontWeight="normal"
              lineHeight="1.5"
            >
              Did not receive code?
            </Text>
            <Button
              onClick={handleResendCode}
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
              ml={linkMarginLeft}
              mt={linkMarginTop}
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
              Resend code
            </Button>
          </Box>
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
        title="Enter code to verify your identity"
        onNext={handleVerify}
        onCancel={handleCancel}
        nextButtonText="Verify"
      >
        {pageContent}
      </PageLayoutTemplate>
    </Box>
  );
};

export default OTPVerificationPage;
