import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  Text,
  useBreakpointValue,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import PageLayoutTemplate from "../../../../components/PageLayoutTemplate/PageLayoutTemplate";

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

  // Enhanced responsive values for better mobile support
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

  const descriptionFontSize = useBreakpointValue({
    base: "1rem", // Better readability on mobile
    xs: "1rem",
    sm: "1.0625rem",
    md: "1.125rem",
    lg: "1.125rem",
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
          Your password should be 8 characters minimum; case sensitive
        </Text>
      </Box>

      {/* Password Input - SLOT 2 */}
      <Box mb={inputSpacing}>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoComplete="new-password"
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
              base: "2rem", // Match input height on mobile
              xs: "2rem",
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
            fontSize={errorFontSize}
            mt="0.5rem"
            pl="0"
            lineHeight="1.3"
          >
            {errors.password}
          </Text>
        )}
      </Box>

      {/* Confirm Password Input - SLOT 3 */}
      <Box mb={inputSpacing}>
        <InputGroup>
          <Input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoComplete="new-password"
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
              base: "2rem", // Match input height on mobile
              xs: "2rem",
              sm: "auto",
              md: "auto",
              lg: "auto",
            }}
          >
            <IconButton
              aria-label={
                showConfirm ? "Hide confirm password" : "Show confirm password"
              }
              icon={showConfirm ? <ViewIcon /> : <ViewOffIcon />}
              size={eyeIconSize}
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
            fontSize={errorFontSize}
            mt="0.5rem"
            pl="0"
            lineHeight="1.3"
          >
            {errors.confirmPassword}
          </Text>
        )}
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
        title="Reset your password"
        onNext={handleDone}
        onCancel={handleCancel}
        nextButtonText="Done"
        showCancelButton={false}
      >
        {pageContent}
      </PageLayoutTemplate>
    </Box>
  );
};

export default ResetPasswordPage;
