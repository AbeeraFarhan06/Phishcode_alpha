import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Input, Text, useBreakpointValue } from "@chakra-ui/react";
import PageLayoutTemplate from "../../../../components/PageLayoutTemplate/PageLayoutTemplate";

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const validatePassword = (password: string) => {
    if (password.length === 0) return "";
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/(?=.*\d)/.test(password)) {
      return "Password must contain at least one number";
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      return "Password must contain at least one special character (@$!%*?&)";
    }
    return "";
  };

  const validateConfirmPassword = (
    confirmPassword: string,
    password: string
  ) => {
    if (confirmPassword.length === 0) return "";
    if (confirmPassword !== password) {
      return "Passwords do not match";
    }
    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    if (name === "password") {
      const passwordError = validatePassword(value);
      const confirmPasswordError = validateConfirmPassword(
        formData.confirmPassword,
        value
      );
      setValidationErrors((prev) => ({
        ...prev,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      }));
    } else if (name === "confirmPassword") {
      const confirmPasswordError = validateConfirmPassword(
        value,
        formData.password
      );
      setValidationErrors((prev) => ({
        ...prev,
        confirmPassword: confirmPasswordError,
      }));
    }
  };

  const handleDone = () => {
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(
      formData.confirmPassword,
      formData.password
    );

    if (passwordError || confirmPasswordError) {
      setValidationErrors({
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
      return;
    }

    console.log("Password reset form submitted:", formData);
    navigate("/signin");
  };

  const handleCancel = () => {
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
    xs: "0.8rem", // very small
    sm: "0.85rem", // sm
    md: "clamp(0.9rem, 3vw, 1rem)",
    lg: "clamp(0.9rem, 3vw, 1rem)",
  });

  const inputPadding = useBreakpointValue({
    base: "0.75rem 0", // xs
    xs: "0.75rem 0",
    sm: "0.75rem 0", // sm
    md: "0.75rem 0",
    lg: "0.75rem 0",
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
          fontSize="1.125rem"
          mb="0.5rem"
          textAlign="left"
          lineHeight="1.4"
          p="0.75rem 0"
        >
          Your password should be 8 characters minimum; case sensitive
        </Text>
      </Box>

      {/* Password Input - SLOT 2 (where password input is in Sign In) */}
      <Box mb="1.5rem">
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          bg="transparent"
          border="none"
          borderBottom={
            validationErrors.password
              ? "0.0625rem solid #e53e3e"
              : "0.0625rem solid #4285f4"
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
        {validationErrors.password && (
          <Text
            color="#e53e3e"
            fontSize={errorFontSize}
            mt="0.25rem"
            pl="0"
            lineHeight="1.2"
          >
            {validationErrors.password}
          </Text>
        )}
      </Box>

      {/* Confirm Password Input - SLOT 3 (where links are in Sign In) */}
      <Box mb="1.5rem">
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          bg="transparent"
          border="none"
          borderBottom={
            validationErrors.confirmPassword
              ? "0.0625rem solid #e53e3e"
              : "0.0625rem solid #4285f4"
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
        {validationErrors.confirmPassword && (
          <Text
            color="#e53e3e"
            fontSize={errorFontSize}
            mt="0.25rem"
            pl="0"
            lineHeight="1.2"
          >
            {validationErrors.confirmPassword}
          </Text>
        )}
      </Box>
    </>
  );

  return (
    <PageLayoutTemplate
      title="Reset your password"
      onNext={handleDone}
      onCancel={handleCancel}
      nextButtonText="Done"
      showCancelButton={false}
    >
      {pageContent}
    </PageLayoutTemplate>
  );
};

export default ResetPasswordPage;
