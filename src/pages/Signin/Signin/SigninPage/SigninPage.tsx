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

  // Enhanced responsive values for better mobile support
  const inputFontSize = useBreakpointValue({
    base: "1rem", // Standard readable size on mobile
    xs: "1rem", // Prevents zoom on iOS
    sm: "0.95rem",
    md: "1rem",
    lg: "1rem",
  });

  const linkFontSize = useBreakpointValue({
    base: "0.875rem", // Better readability on mobile
    xs: "0.875rem",
    sm: "0.875rem",
    md: "0.875rem",
    lg: "0.875rem",
  });

  const inputPadding = useBreakpointValue({
    base: "1rem 0", // Better touch target on mobile
    xs: "1rem 0",
    sm: "0.875rem 0",
    md: "0.75rem 0",
    lg: "0.75rem 0",
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

  const eyeIconSize = useBreakpointValue({
    base: "md", // Larger icon for better mobile touch
    xs: "md",
    sm: "sm",
    md: "sm",
    lg: "sm",
  });

  // Enhanced input styles with better mobile support
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
    minH: {
      base: "3rem", // Better touch target on mobile
      xs: "3rem",
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
      {/* Email Input - SLOT 1 */}
      <Box mb={inputSpacing} mt={topSpacing}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          title="Please enter a valid email address"
          autoComplete="email"
          inputMode="email" // Better mobile keyboard
          {...inputStyles}
        />
        {errors.email && (
          <Text
            color="#e53e3e"
            fontSize={errorFontSize}
            mt="0.5rem"
            pl="0"
            lineHeight="1.3"
          >
            {errors.email}
          </Text>
        )}
      </Box>

      {/* Password Input with Eye Toggle - SLOT 2 */}
      <Box mb={inputSpacing}>
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
            {...inputStyles}
          />
          <InputRightElement
            width={{
              base: "3.5rem", // Larger touch target on mobile
              xs: "3.5rem",
              sm: "3rem",
              md: "3rem",
              lg: "3rem",
            }}
            height={{
              base: "3rem", // Match input height on mobile
              xs: "3rem",
              sm: "auto",
              md: "auto",
              lg: "auto",
            }}
          >
            <IconButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
              size={eyeIconSize}
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
            fontSize={errorFontSize}
            mt="0.5rem"
            pl="0"
            lineHeight="1.3"
          >
            {errors.password}
          </Text>
        )}
      </Box>

      {/* Links - SLOT 3 */}
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
              p="0.25rem 0"
              ml="0.25rem"
              minW="auto"
              h="auto"
              minH={{
                base: "2.5rem", // Better touch target on mobile
                xs: "2.5rem",
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
            p="0.25rem 0"
            minW="auto"
            h="auto"
            minH={{
              base: "2.5rem", // Better touch target on mobile
              xs: "2.5rem",
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
            Forgotten password?
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        // Enhanced mobile-specific styling
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
          // Force the same shadow as PageLayoutTemplate
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4) !important",
          "@media (min-width: 30em)": {
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
