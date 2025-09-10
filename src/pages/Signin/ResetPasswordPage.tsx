import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  Card,
  CardBody,
  Flex,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import phishcode_logoo_1 from "../../assets/logo/phishcode_logoo_1.png";

interface FormData {
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  password: string;
  confirmPassword: string;
}

interface FormTouched {
  password: boolean;
  confirmPassword: boolean;
}

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState<FormTouched>({
    password: false,
    confirmPassword: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Enhanced validation functions
  const validatePassword = (password: string): string => {
    if (!password) {
      return "";
    }
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
  ): string => {
    if (!confirmPassword) {
      return "";
    }
    if (confirmPassword !== password) {
      return "Passwords do not match";
    }
    return "";
  };

  const validateRequired = (value: string): boolean => {
    return value.trim().length > 0;
  };

  // Handle input change with real-time validation clearing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (touched[name as keyof FormTouched] && value.trim().length > 0) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Real-time password matching validation
    if (
      name === "password" &&
      formData.confirmPassword &&
      touched.confirmPassword
    ) {
      const confirmError = validateConfirmPassword(
        formData.confirmPassword,
        value
      );
      setErrors((prev) => ({
        ...prev,
        confirmPassword: confirmError,
      }));
    } else if (name === "confirmPassword") {
      const confirmError = validateConfirmPassword(value, formData.password);
      setErrors((prev) => ({
        ...prev,
        confirmPassword: confirmError,
      }));
    }
  };

  // Handle field blur validation
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate the field on blur
    let error = "";
    switch (name) {
      case "password":
        error = validatePassword(value);
        break;
      case "confirmPassword":
        error = validateConfirmPassword(value, formData.password);
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Comprehensive form validation for submission
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      password: "",
      confirmPassword: "",
    };

    // Required field validations
    if (!validateRequired(formData.password)) {
      newErrors.password = "Password is required";
    } else {
      newErrors.password = validatePassword(formData.password);
    }

    if (!validateRequired(formData.confirmPassword)) {
      newErrors.confirmPassword = "Please confirm your password";
    } else {
      newErrors.confirmPassword = validateConfirmPassword(
        formData.confirmPassword,
        formData.password
      );
    }

    setErrors(newErrors);
    setTouched({
      password: true,
      confirmPassword: true,
    });

    // Check if there are any errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleDone = () => {
    setIsSubmitted(true);

    if (validateForm()) {
      console.log("Password reset form submitted:", formData);
      navigate("/signin");
    } else {
      console.log("Form has validation errors:", errors);
    }
  };

  const handleCancel = () => {
    navigate("/signin");
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
            Reset your password
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
                  Your password should be 8 characters minimum; case sensitive
                </Text>
              </Box>

              {/* Password Input */}
              <Box mb={{ base: "1.25rem", md: "1.5rem" }}>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    autoComplete="new-password"
                    bg="transparent"
                    border="none"
                    borderBottom="0.0625rem solid #4285f4"
                    borderRadius="0"
                    boxShadow="none"
                    fontSize={{ base: "1rem", sm: "0.95rem", md: "1rem" }}
                    color="#4a5568"
                    p={{ base: "1rem 0", sm: "0.875rem 0", md: "0.75rem 0" }}
                    w="100%"
                    mb="0.5rem"
                    minH={{ base: "2rem", md: "auto" }}
                    _placeholder={{
                      color: "#a0aec0",
                      fontSize: { base: "1rem", sm: "0.95rem", md: "1rem" },
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
                  <InputRightElement
                    width={{ base: "3.5rem", md: "3rem" }}
                    height={{ base: "2rem", md: "auto" }}
                  >
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      size={{ base: "md", md: "sm" }}
                      variant="ghost"
                      color="gray.500"
                      onClick={() => setShowPassword((p) => !p)}
                      _hover={{
                        bg: "gray.100",
                      }}
                      _focus={{
                        boxShadow: "outline",
                      }}
                    />
                  </InputRightElement>
                </InputGroup>
                {errors.password && (
                  <Text
                    color="#e53e3e"
                    fontSize={{ base: "0.8125rem", md: "0.75rem" }}
                    mt="0.5rem"
                    pl="0"
                    lineHeight="1.3"
                  >
                    {errors.password}
                  </Text>
                )}
              </Box>

              {/* Confirm Password Input */}
              <Box mb={{ base: "1.25rem", md: "1.5rem" }}>
                <InputGroup>
                  <Input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    autoComplete="new-password"
                    bg="transparent"
                    border="none"
                    borderBottom="0.0625rem solid #4285f4"
                    borderRadius="0"
                    boxShadow="none"
                    fontSize={{ base: "1rem", sm: "0.95rem", md: "1rem" }}
                    color="#4a5568"
                    p={{ base: "1rem 0", sm: "0.875rem 0", md: "0.75rem 0" }}
                    w="100%"
                    mb="0.5rem"
                    minH={{ base: "2rem", md: "auto" }}
                    _placeholder={{
                      color: "#a0aec0",
                      fontSize: { base: "1rem", sm: "0.95rem", md: "1rem" },
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
                  <InputRightElement
                    width={{ base: "3.5rem", md: "3rem" }}
                    height={{ base: "2rem", md: "auto" }}
                  >
                    <IconButton
                      aria-label={
                        showConfirm
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                      icon={showConfirm ? <ViewIcon /> : <ViewOffIcon />}
                      size={{ base: "md", md: "sm" }}
                      variant="ghost"
                      color="gray.500"
                      onClick={() => setShowConfirm((p) => !p)}
                      _hover={{
                        bg: "gray.100",
                      }}
                      _focus={{
                        boxShadow: "outline",
                      }}
                    />
                  </InputRightElement>
                </InputGroup>
                {errors.confirmPassword && (
                  <Text
                    color="#e53e3e"
                    fontSize={{ base: "0.8125rem", md: "0.75rem" }}
                    mt="0.5rem"
                    pl="0"
                    lineHeight="1.3"
                  >
                    {errors.confirmPassword}
                  </Text>
                )}
              </Box>
            </Box>
          </Box>

          {/* Buttons - Only Done button (no Cancel button) */}
          <Flex justifyContent="flex-end" mt="auto" gap="0.5rem">
            <Button
              onClick={handleDone}
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
              Done
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ResetPasswordPage;
