import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResetPasswordPage.module.css";
import phishcode_logoo_1 from "../../../assets/logo/phishcode_logoo_1.png";

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

  return (
    <div
      className={`min-vh-100 d-flex align-items-center justify-content-center ${styles.container}`}
    >
      <div className={`card shadow-lg border-0 ${styles.card}`}>
        <div className="card-body p-4 d-flex flex-column justify-content-center">
          {/* Logo - Left aligned and smaller */}
          <div className="text-start mb-3">
            <img src={phishcode_logoo_1} alt="PhishCode Logo" className={styles.logo} />
          </div>

          {/* Main heading - Bold */}
          <h2 className={`text-start mb-4 ${styles.title}`}>
            Reset Your Password
          </h2>

          {/* Description */}
          <p className={`text-start mb-4 ${styles.description}`}>
            Your password should be 8 characters minimum; case sensitive
          </p>

          {/* Form Fields */}
          <div>
            {/* Password Input - With real-time validation */}
            <div className="mb-4">
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
                <div className={styles.errorMessage}>
                  {validationErrors.password}
                </div>
              )}
            </div>

            {/* Confirm Password Input - With real-time validation */}
            <div className="mb-4">
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

            {/* Done Button - Right aligned like other pages */}
            <div className="d-flex justify-content-end mt-4">
              <button
                type="button"
                onClick={handleDone}
                className={`btn ${styles.doneBtn}`}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
