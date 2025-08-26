import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgetPasswordPage.module.css";
import phishcode_logoo_1 from "../../../assets/logo/phishcode_logoo_1.png";

const ForgetPasswordPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    if (email.length === 0) return "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Real-time email validation
    const error = validateEmail(value);
    setEmailError(error);
  };

  const handleVerify = () => {
    const error = validateEmail(email);

    if (error || email.length === 0) {
      setEmailError(error || "Please enter your email address");
      return;
    }

    console.log("Email submitted:", email);
    alert("We've emailed your password reset link");
    navigate("/reset-password");
  };

  const handleCancel = () => {
    console.log("Form cancelled");
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
            Verify Your Email
          </h2>

          {/* Description */}
          <p className={`text-start mb-4 ${styles.description}`}>
            We'll send a code to verify your email. Please enter it below.
          </p>

          {/* Form Fields */}
          <div>
            {/* Email Input - Left aligned with validation */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className={`form-control ${styles.input} ${
                  emailError ? styles.inputError : ""
                }`}
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
              />
              {emailError && (
                <div className={styles.errorMessage}>{emailError}</div>
              )}
            </div>

            {/* Buttons - Right aligned with adjusted spacing */}
            <div
              className="d-flex justify-content-end mt-4"
              style={{ gap: "0.5rem" }}
            >
              <button
                type="button"
                onClick={handleCancel}
                className={`btn ${styles.cancelBtn}`}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleVerify}
                className={`btn ${styles.verifyBtn}`}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
