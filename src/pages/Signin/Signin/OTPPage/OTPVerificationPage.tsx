import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayoutTemplate from "../../../../components/PageLayoutTemplate/PageLayoutTemplate";
import styles from "../../../../components/PageLayoutTemplate/PageLayoutTemplate.module.css";

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

  // Content for the template - USING DIRECT INLINE STYLES TO FORCE CHANGES
  const pageContent = (
    <>
      {/* Description Text - SLOT 1 with forced spacing */}
      <div className={styles.formField} style={{ marginBottom: "0.5rem" }}>
        <div
          style={{
            color: "#4a5568",
            fontSize: "1.125rem", // 18px
            marginBottom: "0.25rem", // Very tight spacing before input
            marginTop: "0",
            textAlign: "left",
            lineHeight: "1.4",
            padding: "0.75rem 0",
          }}
        >
          A code has been sent to your email. Please enter it to sign in.
        </div>
      </div>

      {/* OTP Input - SLOT 2 with forced positioning */}
      <div className={styles.formField} style={{ marginBottom: "1.5rem" }}>
        <input
          type="text"
          name="otpCode"
          className={`form-control ${styles.input}`}
          placeholder="Enter Code"
          value={otpCode}
          onChange={handleInputChange}
          maxLength={10}
          style={{
            letterSpacing: "0.125rem",
            marginTop: "0", // Force no top margin
            paddingTop: "0.5rem", // Reduce top padding
          }}
        />
      </div>

      {/* Resend Link - SLOT 3 with minimal spacing to match sign-in exactly */}
      <div className={styles.formField}>
        <div className="mb-2">
          <span className={styles.linkTextNormal}>
            Did not receive code?{" "}
            <button
              onClick={handleResendCode}
              className={`btn p-0 ${styles.linkButtonSpaced}`}
            >
              Resend code
            </button>
          </span>
        </div>
        {/* Minimal space to match sign-in button positioning exactly */}
        <div style={{ height: "0.25rem" }}></div>
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
