import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayoutTemplate from "../../../../components/PageLayoutTemplate/PageLayoutTemplate";
import styles from "../../../../components/PageLayoutTemplate/PageLayoutTemplate.module.css";

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

  const handleNext = () => {
    const error = validateEmail(email);

    if (error || email.length === 0) {
      setEmailError(error || "Please enter your email address");
      return;
    }

    console.log("Email submitted:", email);
    alert("We've emailed your password reset link");
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleBackToSignIn = () => {
    navigate("/signin");
  };

  // Content for the template - USING EXACT SAME SLOTS AS SIGN IN
  const pageContent = (
    <>
      {/* Description Text - SLOT 1 (where email input is in Sign In) */}
      <div className={styles.formField}>
        <div className={styles.description}>
          We'll send a code to verify your email. Please enter it below.
        </div>
      </div>

      {/* Email Input - SLOT 2 (where password input is in Sign In) */}
      <div className={styles.formField}>
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
        {emailError && <div className={styles.errorMessage}>{emailError}</div>}
      </div>

      {/* Link - SLOT 3 (where "No account? Create one!" links are in Sign In) */}
      <div className={styles.formField}>
        <div className="mb-2">
          <span className={styles.linkTextNormal}>
            Remember your password?{" "}
            <button
              onClick={handleBackToSignIn}
              className={`btn p-0 ${styles.linkButtonSpaced}`}
            >
              Back to Sign in
            </button>
          </span>
        </div>
      </div>
    </>
  );

  return (
    <PageLayoutTemplate
      title="Verify your email"
      onNext={handleNext}
      onCancel={handleCancel}
      nextButtonText="Verify"
    >
      {pageContent}
    </PageLayoutTemplate>
  );
};

export default ForgetPasswordPage;
