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

  // Responsive values for form elements
  const inputFontSize = useBreakpointValue({
    base: "0.85rem",
    xs: "0.8rem",
    sm: "0.85rem",
    md: "clamp(0.9rem, 3vw, 1rem)",
    lg: "clamp(0.9rem, 3vw, 1rem)",
  });

  const inputPadding = useBreakpointValue({
    base: "0.75rem 0",
    xs: "0.75rem 0",
    sm: "0.75rem 0",
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

  // Input styles - always blue border to match other pages
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
    <>
      {/* Description Text - SLOT 1 */}
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

      {/* Password Input - SLOT 2 */}
      <Box mb="1.5rem">
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            {...inputStyles}
          />
          <InputRightElement width="3rem">
            <IconButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
              size="sm"
              variant="ghost"
              color="gray.500"
              onClick={() => setShowPassword((p) => !p)}
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

      {/* Confirm Password Input - SLOT 3 */}
      <Box mb="1.5rem">
        <InputGroup>
          <Input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            {...inputStyles}
          />
          <InputRightElement width="3rem">
            <IconButton
              aria-label={
                showConfirm ? "Hide confirm password" : "Show confirm password"
              }
              icon={showConfirm ? <ViewIcon /> : <ViewOffIcon />}
              size="sm"
              variant="ghost"
              color="gray.500"
              onClick={() => setShowConfirm((p) => !p)}
            />
          </InputRightElement>
        </InputGroup>
        {errors.confirmPassword && (
          <Text
            color="#e53e3e"
            fontSize={errorFontSize}
            mt="0.25rem"
            pl="0"
            lineHeight="1.2"
          >
            {errors.confirmPassword}
          </Text>
        )}
      </Box>
    </>
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
