import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayoutTemplate from "../../../../components/PageLayoutTemplate/PageLayoutTemplate";
import styles from "../../../../components/PageLayoutTemplate/PageLayoutTemplate.module.css";

const SignInPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    console.log("Form submitted:", formData);
    navigate("/otp-verification");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleCreateAccount = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/signup/step1");
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/forget-password");
  };

  // Content for the template
  const pageContent = (
    <>
      {/* Email Input - SLOT 1 */}
      <div className={styles.formField}>
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

      {/* Password Input - SLOT 2 */}
      <div className={styles.formField}>
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

      {/* Links - SLOT 3 */}
      <div className={styles.formField}>
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
    </>
  );

  return (
    <PageLayoutTemplate
      title="Sign in"
      onNext={handleNext}
      onCancel={handleCancel}
      nextButtonText="Next"
      cancelButtonText="Cancel"
    >
      {pageContent}
    </PageLayoutTemplate>
  );
};

export default SignInPage;
