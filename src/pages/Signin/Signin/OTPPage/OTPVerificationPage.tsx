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

  // Responsive values for form elements
  const descriptionFontSize = useBreakpointValue({
    base: "0.8rem", // xs
    xs: "0.8rem",
    sm: "0.8rem", // sm
    md: "1.125rem", // 18px - keep larger for OTP page
    lg: "1.125rem",
  });

  const otpInputFontSize = useBreakpointValue({
    base: "0.85rem", // xs
    xs: "0.85rem",
    sm: "0.9rem", // sm
    md: "clamp(0.9rem, 3vw, 1rem)", // SAME AS SIGNIN
    lg: "clamp(0.9rem, 3vw, 1rem)",
  });

  const otpInputWidth = useBreakpointValue({
    base: "95%", // xs
    xs: "95%",
    sm: "90%", // sm
    md: "min(15.625rem, 80vw)", // 250px max, 80% on small screens
    lg: "min(15.625rem, 80vw)",
  });

  const otpInputPadding = useBreakpointValue({
    base: "1rem 0", // xs
    xs: "1rem 0",
    sm: "1rem 0", // sm
    md: "0.75rem 0", // 12px
    lg: "0.75rem 0",
  });

  const linkFontSize = useBreakpointValue({
    base: "0.75rem", // xs
    xs: "0.75rem",
    sm: "0.8rem", // sm
    md: "clamp(0.85rem, 3vw, 0.9375rem)", // SAME AS SIGNIN
    lg: "clamp(0.85rem, 3vw, 0.9375rem)",
  });

  const linkFlexDirection = useBreakpointValue<"row" | "column">({
    base: "column", // xs - stack vertically
    xs: "column",
    sm: "column", // sm
    md: "row", // desktop - inline
    lg: "row",
  });

  const linkGap = useBreakpointValue({
    base: "0.25rem", // xs
    xs: "0.25rem",
    sm: "0.25rem", // sm
    md: "0", // no gap on desktop
    lg: "0",
  });

  const linkMarginLeft = useBreakpointValue({
    base: "0", // xs
    xs: "0",
    sm: "0", // sm
    md: "0.375rem", // desktop spacing
    lg: "0.375rem",
  });

  const linkMarginTop = useBreakpointValue({
    base: "0.25rem", // xs
    xs: "0.25rem",
    sm: "0.25rem", // sm
    md: "0", // no top margin on desktop
    lg: "0",
  });

  // Content for the template
  const pageContent = (
    <>
      {/* Description Text - SLOT 1 with forced spacing */}
      <Box mb="0.5rem">
        <Text
          color="#4a5568"
          fontSize={descriptionFontSize}
          mb="0.25rem" // Very tight spacing before input
          mt="0"
          textAlign="left"
          lineHeight="1.4"
          p="0.75rem 0"
        >
          A code has been sent to your email. Please enter it to sign in.
        </Text>
      </Box>

      {/* OTP Input - SLOT 2 with forced positioning */}
      <Box mb="1.5rem">
        <Input
          type="text"
          name="otpCode"
          placeholder="Enter Code"
          value={otpCode}
          onChange={handleInputChange}
          maxLength={10}
          bg="transparent"
          border="none"
          borderBottom="0.0625rem solid #4285f4"
          borderRadius="0"
          boxShadow="none"
          fontSize={otpInputFontSize}
          color="#4a5568"
          p={otpInputPadding}
          pt="0.5rem" // Reduce top padding
          textAlign="left"
          w="100%"
          letterSpacing="0.125rem" // 2px
          _placeholder={{
            color: "#a0aec0",
            fontSize: otpInputFontSize, // MATCH INPUT FONT SIZE
            textAlign: "left",
            letterSpacing: "normal",
          }}
          _focus={{
            borderBottomColor: "#4285f4",
            boxShadow: "none",
            outline: "none",
          }}
        />
      </Box>

      {/* Resend Link - SLOT 3 with minimal spacing to match sign-in exactly */}
      <Box mb="1.5rem">
        <Box mb="2">
          <Box
            display="inline-flex"
            alignItems="baseline"
            flexWrap="wrap"
            justifyContent="center"
            flexDirection={linkFlexDirection}
            gap={linkGap}
          >
            <Text
              as="span"
              color="#2d3748"
              fontSize={linkFontSize}
              fontWeight="normal"
              lineHeight="1.4"
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
              p="0.125rem 0"
              ml={linkMarginLeft}
              mt={linkMarginTop}
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
              Resend code
            </Button>
          </Box>
        </Box>
        {/* Minimal space to match sign-in button positioning exactly */}
        <Box h="0.25rem" />
      </Box>
    </>
  );

  return (
    <PageLayoutTemplate
      title="Enter code to verify your identity"
      onNext={handleVerify}
      onCancel={handleCancel}
      nextButtonText="Verify"
    >
      {pageContent}
    </PageLayoutTemplate>
  );
};

export default OTPVerificationPage;
