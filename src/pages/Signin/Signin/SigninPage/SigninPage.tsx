import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  Text,
  Button,
  useBreakpointValue,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import PageLayoutTemplate from "../../../../components/PageLayoutTemplate/PageLayoutTemplate";

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

  // Responsive values for form elements
  const inputFontSize = useBreakpointValue({
    base: "0.85rem",
    xs: "0.85rem",
    sm: "0.9rem",
    md: "clamp(0.9rem, 3vw, 1rem)",
    lg: "clamp(0.9rem, 3vw, 1rem)",
  });

  const linkFontSize = useBreakpointValue({
    base: "0.75rem",
    xs: "0.75rem",
    sm: "0.8rem",
    md: "clamp(0.85rem, 3vw, 0.9375rem)",
    lg: "clamp(0.85rem, 3vw, 0.9375rem)",
  });

  const inputPadding = useBreakpointValue({
    base: "0.75rem 0",
    xs: "0.75rem 0",
    sm: "0.8rem 0",
    md: "0.75rem 0",
    lg: "0.75rem 0",
  });

  const errorFontSize = useBreakpointValue({
    base: "0.75rem",
    xs: "0.75rem",
    sm: "0.75rem",
    md: "clamp(0.75rem, 2.5vw, 0.8rem)",
    lg: "clamp(0.75rem, 2.5vw, 0.8rem)",
  });

  // Input styles - always blue border
  const inputStyles = {
    bg: "transparent",
    border: "none",
    borderBottom: "0.0625rem solid #4285f4",
    borderRadius: "0",
    boxShadow: "none",
    fontSize: inputFontSize,
    color: "#4a5568",
    p: inputPadding,
    w: "100%",
    mb: "0.5rem",
    _placeholder: {
      color: "#a0aec0",
      fontSize: inputFontSize,
    },
    _focus: {
      borderBottomColor: "#4285f4",
      boxShadow: "none",
    },
  };

  // Content for the template
  const pageContent = (
    <Box>
      {/* Email Input - SLOT 1 */}
      <Box mb="1.5rem" mt="1rem">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          title="Please enter a valid email address"
          {...inputStyles}
        />
        {errors.email && (
          <Text
            color="#e53e3e"
            fontSize={errorFontSize}
            mt="0.25rem"
            pl="0"
            lineHeight="1.2"
          >
            {errors.email}
          </Text>
        )}
      </Box>

      {/* Password Input with Eye Toggle - SLOT 2 */}
      <Box mb="1.5rem">
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            title="Password must be at least 8 characters long"
            {...inputStyles}
          />
          <InputRightElement width="3rem">
            <IconButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
              size="sm"
              variant="ghost"
              color="gray.500"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </InputRightElement>
        </InputGroup>
        {errors.password && (
          <Text
            color="#e53e3e"
            fontSize={errorFontSize}
            mt="0.25rem"
            pl="0"
            lineHeight="1.2"
          >
            {errors.password}
          </Text>
        )}
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
    </Box>
  );

  return (
    <Box
      sx={{
        "& .chakra-card": {
          height: "auto !important",
          maxHeight: "none !important",
          minHeight: "32rem !important",
        },
      }}
    >
      <PageLayoutTemplate
        title="Sign in"
        onNext={handleNext}
        onCancel={handleCancel}
        nextButtonText="Next"
        cancelButtonText="Cancel"
      >
        {pageContent}
      </PageLayoutTemplate>
    </Box>
  );
};

export default SignInPage;
