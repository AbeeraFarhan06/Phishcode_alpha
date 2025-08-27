import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayoutTemplate from "../../../components/PageLayoutTemplate/PageLayoutTemplate";
import styles from "../../../components/PageLayoutTemplate/PageLayoutTemplate.module.css";
import { MdCheck } from "react-icons/md";

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
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  // Content for the template - USING EXACT SAME SLOTS AS SIGN IN
  const pageContent = (
    <>
      {/* Description Text - SLOT 1 (where email input is in Sign In) */}
      <div className={styles.formField}>
        <div className={styles.description}>
          Your password should be 8 characters minimum; case sensitive
        </div>
      </div>

      {/* Password Input - SLOT 2 (where password input is in Sign In) */}
      <div className={styles.formField}>
        <input
          type="password"
          name="password"
          className={`form-control ${styles.input} ${
            validationErrors.password ? styles.inputError : ""
          }`}
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {validationErrors.password && (
          <div className={styles.errorMessage}>{validationErrors.password}</div>
        )}
      </div>

      {/* Confirm Password Input - SLOT 3 (where links are in Sign In) */}
      <div className={styles.formField}>
        <input
          type="password"
          name="confirmPassword"
          className={`form-control ${styles.input} ${
            validationErrors.confirmPassword ? styles.inputError : ""
          }`}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {validationErrors.confirmPassword && (
          <div className={styles.errorMessage}>
            {validationErrors.confirmPassword}
          </div>
        )}
      </div>
    </>
  );

  return (
    <PageLayoutTemplate
      title="Reset Your Password"
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
