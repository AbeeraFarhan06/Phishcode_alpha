import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayoutTemplate from "../../../components/PageLayoutTemplate/PageLayoutTemplate";
import styles from "../../../components/PageLayoutTemplate/PageLayoutTemplate.module.css";
import { MdCheck } from "react-icons/md";

const OTPVerificationPage = () => {
  const navigate = useNavigate();

  const [otpCode, setOtpCode] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and limit length if needed
    if (/^\d*$/.test(value)) {
      setOtpCode(value);
    }
  };

  const handleVerify = () => {
    console.log("OTP submitted:", otpCode);
    // Handle OTP verification logic
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleResendCode = () => {
    console.log("Resend OTP code");
    // Handle resend OTP logic
  };

  // Content for the template - USING EXACT SAME SLOTS AS SIGN IN
  const pageContent = (
    <>
      {/* Description Text - SLOT 1 (where email input is in Sign In) */}
      <div className={styles.formField}>
        <div className={styles.description}>
          A code has been sent to your email. Please enter it to sign in.
        </div>
      </div>

      {/* OTP Input - SLOT 2 (where password input is in Sign In) - LEFT ALIGNED */}
      <div className={styles.formField}>
        <input
          type="text"
          name="otpCode"
          className={`form-control ${styles.input}`}
          placeholder="Enter OTP code"
          value={otpCode}
          onChange={handleInputChange}
          maxLength={10}
          style={{ letterSpacing: "0.125rem" }} // Add letter spacing for OTP codes
        />
      </div>

      {/* Resend Link - SLOT 3 (where "No account? Create one!" links are in Sign In) */}
      <div className={styles.formField}>
        <div className="mb-2">
          <span className={styles.linkTextNormal}>
            Didn't receive OTP code?{" "}
            <button
              onClick={handleResendCode}
              className={`btn p-0 ${styles.linkButtonSpaced}`}
            >
              Resend code
            </button>
          </span>
        </div>
      </div>
    </>
  );

  return (
    <PageLayoutTemplate
      title="Enter code to verify your identity"
      onNext={handleVerify}
      onCancel={handleCancel}
      nextButtonText="Verify"
    >
      {pageContent}
    </PageLayoutTemplate>
  );
};

export default OTPVerificationPage;
