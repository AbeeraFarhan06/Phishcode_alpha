import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OTPVerificationPage.module.css";
import logo from "../../../images/phishcode logoo 1.png";

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
    navigate("/dashboard");
  };

  const handleResendCode = () => {
    console.log("Resend OTP code");
    // Handle resend OTP logic
  };

  return (
    <div
      className={`min-vh-100 d-flex align-items-center justify-content-center ${styles.container}`}
    >
      <div className={`card shadow-lg border-0 ${styles.card}`}>
        <div className="card-body p-4 d-flex flex-column justify-content-center">
          {/* Logo - Left aligned and smaller */}
          <div className="text-start mb-3">
            <img src={logo} alt="PhishCode Logo" className={styles.logo} />
          </div>

          {/* OTP heading - Bold */}
          <h2 className={`text-start mb-4 ${styles.title}`}>
            Enter code to verify your identity
          </h2>

          {/* Description */}
          <p className={`text-start mb-4 ${styles.description}`}>
            A code has been sent to your email. Please enter it to sign in.
          </p>

          {/* Form Fields */}
          <div>
            {/* OTP Input - Centered */}
            <div className="mb-4 d-flex justify-content-center">
              <input
                type="text"
                name="otpCode"
                className={`form-control ${styles.otpInput}`}
                placeholder="Enter OTP code"
                value={otpCode}
                onChange={handleInputChange}
                maxLength={10} // Adjust as needed
              />
            </div>

            {/* Resend Link - "Didn't receive OTP code" */}
            <div className="mb-4 text-center">
              <span className={styles.linkTextBold}>
                Didn't receive OTP code?
                <button
                  onClick={handleResendCode}
                  className={`btn p-0 ${styles.linkButton}`}
                >
                  Resend code
                </button>
              </span>
            </div>

            {/* Verify Button - Centered */}
            <div className="d-flex justify-content-center mt-4">
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

export default OTPVerificationPage;
