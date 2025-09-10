import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  Text,
  Button,
  InputGroup,
  InputRightElement,
  IconButton,
  Card,
  CardBody,
  Flex,
  Image,
  Heading,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import phishcode_logoo_1 from "../../assets/logo/phishcode_logoo_1.png";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
}

interface FormTouched {
  email: boolean;
  password: boolean;
}

const SignInPage = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState<FormTouched>({
    email: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  // Enhanced validation functions
  const validateEmail = (email: string): string => {
    if (!email.trim()) {
      return "";
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePassword = (password: string): string => {
    if (!password) {
      return "";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    return "";
  };

  const validateRequired = (value: string): boolean => {
    return value.trim().length > 0;
  };

  // Handle input change with minimal filtering
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Minimal filtering - only remove spaces from email
    if (name === "email") {
      processedValue = value.replace(/\s/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));

    // Clear error when user starts typing
    if (
      touched[name as keyof FormTouched] &&
      processedValue.trim().length > 0
    ) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
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
      case "email":
        error = validateEmail(value);
        break;
      case "password":
        error = validatePassword(value);
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
      email: "",
      password: "",
    };

    // Required field validations
    if (!validateRequired(formData.email)) {
      newErrors.email = "Email is required";
    } else {
      newErrors.email = validateEmail(formData.email);
    }

    if (!validateRequired(formData.password)) {
      newErrors.password = "Password is required";
    } else {
      newErrors.password = validatePassword(formData.password);
    }

    setErrors(newErrors);
    setTouched({
      email: true,
      password: true,
    });

    // Check if there are any errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleNext = () => {
    setIsSubmitted(true);

    if (validateForm()) {
      console.log("Form submitted:", formData);
      navigate("/otp-verification");
    } else {
      console.log("Form has validation errors:", errors);
    }
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
        // Using responsive props directly instead of useBreakpointValue
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
          // Using responsive padding directly
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
            Sign in
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
              {/* Email Input */}
              <Box
                mb={{ base: "1.25rem", md: "1.5rem" }}
                mt={{ base: "0.5rem", md: "1rem" }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  title="Please enter a valid email address"
                  autoComplete="email"
                  inputMode="email"
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
                  minH={{ base: "3rem", md: "auto" }}
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
                {errors.email && (
                  <Text
                    color="#e53e3e"
                    fontSize={{ base: "0.8125rem", md: "0.75rem" }}
                    mt="0.5rem"
                    pl="0"
                    lineHeight="1.3"
                  >
                    {errors.email}
                  </Text>
                )}
              </Box>

              {/* Password Input with Eye Toggle */}
              <Box mb={{ base: "1.25rem", md: "1.5rem" }}>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    title="Password must be at least 8 characters long"
                    autoComplete="current-password"
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
                    minH={{ base: "3rem", md: "auto" }}
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
                    height={{ base: "3rem", md: "auto" }}
                  >
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      size={{ base: "md", md: "sm" }}
                      variant="ghost"
                      color="gray.500"
                      onClick={() => setShowPassword((prev) => !prev)}
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

              {/* Links */}
              <Box mb={{ base: "1.25rem", md: "1.5rem" }}>
                <Box mb="1rem">
                  <Text
                    as="span"
                    color="#2d3748"
                    fontSize="0.875rem"
                    fontWeight="normal"
                    lineHeight="1.5"
                    display="inline-flex"
                    alignItems="baseline"
                    flexWrap="wrap"
                  >
                    No account?{" "}
                    <Button
                      onClick={handleCreateAccount}
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
                      ml="0.25rem"
                      minW="auto"
                      h="auto"
                      minH={{ base: "2.5rem", md: "auto" }}
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
                      Create one!
                    </Button>
                  </Text>
                </Box>
                <Box>
                  <Button
                    onClick={handleForgotPassword}
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
                    minW="auto"
                    h="auto"
                    minH={{ base: "2.5rem", md: "auto" }}
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
                    Forgotten password?
                  </Button>
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
              onClick={handleNext}
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
              Next
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

export default SignInPage;
