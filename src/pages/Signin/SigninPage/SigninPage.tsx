import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SigninPage.module.css";
import phishcode_logoo_1 from "../../../assets/logo/phishcode_logoo_1.png";

const SignInPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      // Email validation - basic format check
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (name === "password") {
      // Password - no special restrictions on input, just store
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleNext = () => {
    console.log("Form submitted:", formData);
    navigate("/otp-verification");
  };

  const handleCancel = () => {
    console.log("Form cancelled");
    // Handle cancel action
  };

  const handleCreateAccount = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/signup/step1");
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/forget-password");
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

          {/* Sign in heading */}
          <h2 className={`text-start mb-4 ${styles.title}`}>Sign in</h2>

          {/* Form Fields */}
          <div>
            {/* Email Input - Email validation */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className={`form-control ${styles.input}`}
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
              />
            </div>

            {/* Password Input - Basic requirements */}
            <div className="mb-4">
              <input
                type="password"
                name="password"
                className={`form-control ${styles.input}`}
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                minLength={8}
                title="Password must be at least 8 characters long"
              />
            </div>

            {/* Links */}
            <div className="mb-4">
              <div className="mb-2">
                <span className={styles.linkTextNormal}>
                  No account?{" "}
                  <button
                    onClick={handleCreateAccount}
                    className={`btn p-0 ${styles.linkButtonSpaced}`}
                  >
                    Create one!
                  </button>
                </span>
              </div>
              <div>
                <button
                  onClick={handleForgotPassword}
                  className={`btn p-0 ${styles.linkButton}`}
                >
                  Forgotten password?
                </button>
              </div>
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
                onClick={handleNext}
                className={`btn ${styles.nextBtn}`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
