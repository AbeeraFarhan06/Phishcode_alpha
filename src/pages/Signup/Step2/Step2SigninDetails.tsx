import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdRadioButtonUnchecked, MdCheck } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./Step2SigninDetails.module.css";
import phishcode_logoo_1 from "../../../assets/logo/phishcode_logoo_1.png";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormTouched {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

const Step2SigninDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState<FormTouched>({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validation functions
  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePassword = (password: string): string => {
    if (!password) {
      return "Password is required";
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
      return "Please confirm your password";
    }
    if (confirmPassword !== password) {
      return "Passwords do not match";
    }
    return "";
  };

  // Handle input change with real-time validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    let error = "";
    if (name === "email") {
      error = validateEmail(value);
    } else if (name === "password") {
      error = validatePassword(value);
      // Also revalidate confirm password if it exists
      if (formData.confirmPassword && touched.confirmPassword) {
        const confirmError = validateConfirmPassword(
          formData.confirmPassword,
          value
        );
        setErrors((prev) => ({
          ...prev,
          confirmPassword: confirmError,
        }));
      }
    } else if (name === "confirmPassword") {
      error = validateConfirmPassword(value, formData.password);
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Handle input blur (when user leaves the field)
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleNext = () => {
    console.log("Form submitted:", formData);
    navigate("/signup/step3");
  };

  return (
    <div className={`min-vh-100 ${styles.container}`}>
      {/* Logo - Fixed position on left */}
      <div className={styles.logoContainer}>
        <img src={phishcode_logoo_1} alt="PhishCode Logo" className={styles.headerLogo} />
      </div>

      {/* Header - Centered */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          PHISHCODE Phishing Attack Simulation - Preview Trial
        </h1>
        <p className={styles.headerSubtitle}>
          Start your free 1-month trial today
        </p>
      </div>

      {/* Main Form Container */}
      <div className="d-flex justify-content-center">
        <div className={`card border-0 ${styles.formCard}`}>
          <div className="card-body p-5">
            {/* Progress Steps */}
            <div className={styles.progressContainer}>
              <div className={styles.progressWrapper}>
                <div className={styles.progressStep}>
                  <div className={`${styles.stepIcon} ${styles.stepCompleted}`}>
                    <MdCheck className={styles.checkIcon} />
                  </div>
                  <span className={styles.stepLabel}>About you</span>
                </div>
                <div className={styles.progressStep}>
                  <MdRadioButtonUnchecked
                    className={`${styles.stepIcon} ${styles.stepActive}`}
                  />
                  <span
                    className={`${styles.stepLabel} ${styles.stepLabelActive}`}
                  >
                    Sign-in details
                  </span>
                </div>
                <div className={styles.progressStep}>
                  <MdRadioButtonUnchecked className={styles.stepIcon} />
                  <span className={styles.stepLabel}>
                    Complete & get started
                  </span>
                </div>
              </div>
            </div>

            {/* Form Title */}
            <h2 className={styles.formTitle}>How you'll sign in</h2>

            {/* Form Description */}
            <p className={styles.formDescription}>
              This email is what you'll use to sign in each time you use your
              apps.
            </p>

            {/* Form Fields */}
            <div>
              {/* Email */}
              <div className="mb-4">
                <label className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${styles.input} ${
                    touched.email && errors.email ? styles.inputError : ""
                  }`}
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  required
                />
                {touched.email && errors.email && (
                  <div className={styles.errorMessage}>{errors.email}</div>
                )}
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className={styles.label}>
                  Password <span className={styles.required}>*</span>
                </label>
                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className={`form-control ${styles.input} ${
                      styles.passwordInput
                    } ${
                      touched.password && errors.password
                        ? styles.inputError
                        : ""
                    }`}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    required
                  />
                  <button
                    type="button"
                    className={styles.eyeButton}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {touched.password && errors.password && (
                  <div className={styles.errorMessage}>{errors.password}</div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label className={styles.label}>
                  Confirm password <span className={styles.required}>*</span>
                </label>
                <div className={styles.passwordContainer}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    className={`form-control ${styles.input} ${
                      styles.passwordInput
                    } ${
                      touched.confirmPassword && errors.confirmPassword
                        ? styles.inputError
                        : ""
                    }`}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    required
                  />
                  <button
                    type="button"
                    className={styles.eyeButton}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className={styles.errorMessage}>
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              {/* Agreement Text */}
              <p className={styles.agreementText}>
                By selecting <strong>Next</strong>, you agree to our{" "}
                <a href="#" className={styles.termsLink}>
                  terms and conditions
                </a>
                .
              </p>

              {/* Next Button */}
              <div
                className={`d-flex justify-content-start ${styles.nextBtnContainer}`}
              >
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
    </div>
  );
};

export default Step2SigninDetails;
