import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Input, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import PageLayoutTemplate from "../../../../components/PageLayoutTemplate/PageLayoutTemplate";

const SignInPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    console.log("Form submitted:", formData);
    navigate("/otp-verification");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleCreateAccount = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/signup/step1");
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/forget-password");
  };

  // Responsive values for form elements
  const inputFontSize = useBreakpointValue({
    base: "0.85rem", // xs
    xs: "0.85rem",
    sm: "0.9rem", // sm
    md: "clamp(0.9rem, 3vw, 1rem)",
    lg: "clamp(0.9rem, 3vw, 1rem)",
  });

  const linkFontSize = useBreakpointValue({
    base: "0.75rem", // xs
    xs: "0.75rem",
    sm: "0.8rem", // sm
    md: "clamp(0.85rem, 3vw, 0.9375rem)",
    lg: "clamp(0.85rem, 3vw, 0.9375rem)",
  });

  const inputPadding = useBreakpointValue({
    base: "0.75rem 0", // xs
    xs: "0.75rem 0",
    sm: "0.8rem 0", // sm
    md: "0.75rem 0",
    lg: "0.75rem 0",
  });

  // Content for the template
  const pageContent = (
    <>
      {/* Email Input - SLOT 1 */}
      <Box mb="1.5rem" mt="1rem">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
          bg="transparent"
          border="none"
          borderBottom="0.0625rem solid #4285f4"
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
      </Box>

      {/* Password Input - SLOT 2 */}
      <Box mb="1.5rem">
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          minLength={8}
          title="Password must be at least 8 characters long"
          bg="transparent"
          border="none"
          borderBottom="0.0625rem solid #4285f4"
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
      </Box>

      {/* Links - SLOT 3 */}
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
            No account?{" "}
            <Button
              onClick={handleCreateAccount}
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
              Create one!
            </Button>
          </Text>
        </Box>
        <Box>
          <Button
            onClick={handleForgotPassword}
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
            Forgotten password?
          </Button>
        </Box>
      </Box>
    </>
  );

  return (
    <PageLayoutTemplate
      title="Sign in"
      onNext={handleNext}
      onCancel={handleCancel}
      nextButtonText="Next"
      cancelButtonText="Cancel"
    >
      {pageContent}
    </PageLayoutTemplate>
  );
};

export default SignInPage;
