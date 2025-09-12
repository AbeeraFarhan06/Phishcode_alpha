import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdRadioButtonUnchecked } from "react-icons/md";
import styles from "./Step1AboutYou.module.css";
import phishcode_logoo_1 from "../../../assets/logo/phishcode_logoo_1.png";
import { MdCheck } from "react-icons/md";
import { Link } from "react-router-dom";

// Type definitions
interface Country {
  name: {
    common: string;
  };
}

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  businessPhone: string;
  companyName: string;
  companySize: string;
  hasWebsite: string;
  websiteUrl: string;
  country: string;
  agreeToContact: boolean;
  receiveInfo: boolean;
}

interface ValidationErrors {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  businessPhone: string;
  companyName: string;
  companySize: string;
  hasWebsite: string;
  websiteUrl: string;
  country: string;
}

const Step1AboutYou = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState<string[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    businessPhone: "",
    companyName: "",
    companySize: "",
    hasWebsite: "",
    websiteUrl: "",
    country: "",
    agreeToContact: false,
    receiveInfo: false,
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    businessPhone: "",
    companyName: "",
    companySize: "",
    hasWebsite: "",
    websiteUrl: "",
    country: "",
  });

  // Handle logo click to navigate to landing page
  const handleLogoClick = () => {
    navigate("/");
  };

  // Enhanced validation functions
  const validateName = (name: string, fieldName: string): string => {
    if (name.length === 0) return "";

    const nameRegex = /^[a-zA-Z\s'-]+$/;
    if (!nameRegex.test(name)) {
      return `${fieldName} should only contain letters, spaces, hyphens, and apostrophes`;
    }
    if (name.length < 2) {
      return `${fieldName} must be at least 2 characters long`;
    }
    if (name.length > 50) {
      return `${fieldName} must be less than 50 characters`;
    }
    return "";
  };

  const validateEmail = (email: string): string => {
    if (email.length === 0) return "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhone = (phone: string): string => {
    if (phone.length === 0) return "";

    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 7) {
      return "Phone number must be at least 7 digits";
    }
    if (digitsOnly.length > 15) {
      return "Phone number must be less than 15 digits";
    }
    return "";
  };

  const validateJobTitle = (jobTitle: string): string => {
    if (jobTitle.length === 0) return "";

    const jobTitleRegex = /^[a-zA-Z0-9\s.,-/&()]+$/;
    if (!jobTitleRegex.test(jobTitle)) {
      return "Job title contains invalid characters";
    }
    if (jobTitle.length < 2) {
      return "Job title must be at least 2 characters long";
    }
    if (jobTitle.length > 100) {
      return "Job title must be less than 100 characters";
    }
    return "";
  };

  const validateCompanyName = (companyName: string): string => {
    if (companyName.length === 0) return "";

    const companyRegex = /^[a-zA-Z0-9\s.,&'-]+$/;
    if (!companyRegex.test(companyName)) {
      return "Company name contains invalid characters";
    }
    if (companyName.length < 2) {
      return "Company name must be at least 2 characters long";
    }
    if (companyName.length > 200) {
      return "Company name must be less than 200 characters";
    }
    return "";
  };

  const validateWebsiteUrl = (url: string): string => {
    if (url.length === 0) return "";

    try {
      new URL(url);
      return "";
    } catch {
      return "Please enter a valid website URL (e.g., https://www.example.com)";
    }
  };

  const validateRequired = (value: string): boolean => {
    return value.trim().length > 0;
  };

  // Fetch countries from REST Countries API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoadingCountries(true);
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name"
        );
        const data: Country[] = await response.json();

        const sortedCountries = data
          .map((country: Country) => country.name.common)
          .sort()
          .filter((name: string) => name);

        setCountries(sortedCountries);

        if (sortedCountries.includes("United States")) {
          setFormData((prev) => ({ ...prev, country: "United States" }));
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
        const fallbackCountries: string[] = [
          "United States",
          "Canada",
          "United Kingdom",
          "Australia",
          "Germany",
          "France",
          "Japan",
          "India",
          "Brazil",
          "Other",
        ];
        setCountries(fallbackCountries);
        setFormData((prev) => ({ ...prev, country: "United States" }));
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  // Handle input changes with real-time filtering
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
      return;
    }

    let processedValue = value;

    // Apply input filtering based on field type
    switch (name) {
      case "firstName":
      case "lastName":
      case "middleName":
        // Only allow letters, spaces, hyphens, apostrophes
        processedValue = value.replace(/[^a-zA-Z\s'-]/g, "");
        break;
      case "email":
        // Remove spaces and convert to lowercase
        processedValue = value.toLowerCase().replace(/\s/g, "");
        break;
      case "businessPhone":
        // Only allow numbers, spaces, hyphens, plus, and parentheses
        processedValue = value.replace(/[^0-9\s\-\+\(\)]/g, "");
        break;
      case "jobTitle":
        // Allow letters, numbers, spaces, and common job title punctuation
        processedValue = value.replace(/[^a-zA-Z0-9\s.,-/&()]/g, "");
        break;
      case "companyName":
        // Allow letters, numbers, spaces, and common business punctuation
        processedValue = value.replace(/[^a-zA-Z0-9\s.,&'-]/g, "");
        break;
      default:
        processedValue = value;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));

    // Clear error when user starts typing (if field was previously invalid)
    if (
      Object.keys(validationErrors).includes(name) &&
      processedValue.trim().length > 0
    ) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle field blur validation
  const handleFieldBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "firstName":
        error = validateName(value, "First name");
        break;
      case "lastName":
        error = validateName(value, "Last name");
        break;
      case "middleName":
        error = value ? validateName(value, "Middle name") : "";
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "jobTitle":
        error = validateJobTitle(value);
        break;
      case "businessPhone":
        error = validatePhone(value);
        break;
      case "companyName":
        error = validateCompanyName(value);
        break;
      case "websiteUrl":
        error = validateWebsiteUrl(value);
        break;
    }

    if (Object.keys(validationErrors).includes(name)) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  // Handle phone input blur (remove + from start if present)
  const handlePhoneBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let cleanedValue = value;

    // Remove + from the start if present
    if (cleanedValue.startsWith("+")) {
      cleanedValue = cleanedValue.substring(1);
    }

    setFormData((prev) => ({
      ...prev,
      businessPhone: cleanedValue,
    }));

    // Validate the cleaned value
    const error = validatePhone(cleanedValue);
    setValidationErrors((prev) => ({
      ...prev,
      businessPhone: error,
    }));
  };

  // Comprehensive form validation for submission
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      businessPhone: "",
      companyName: "",
      companySize: "",
      hasWebsite: "",
      websiteUrl: "",
      country: "",
    };

    // Required field validations
    if (!validateRequired(formData.firstName)) {
      newErrors.firstName = "First name is required";
    } else {
      newErrors.firstName = validateName(formData.firstName, "First name");
    }

    if (!validateRequired(formData.lastName)) {
      newErrors.lastName = "Last name is required";
    } else {
      newErrors.lastName = validateName(formData.lastName, "Last name");
    }

    if (!validateRequired(formData.email)) {
      newErrors.email = "Email is required";
    } else {
      newErrors.email = validateEmail(formData.email);
    }

    if (!validateRequired(formData.jobTitle)) {
      newErrors.jobTitle = "Job title is required";
    } else {
      newErrors.jobTitle = validateJobTitle(formData.jobTitle);
    }

    if (!validateRequired(formData.businessPhone)) {
      newErrors.businessPhone = "Business phone number is required";
    } else {
      newErrors.businessPhone = validatePhone(formData.businessPhone);
    }

    if (!validateRequired(formData.companyName)) {
      newErrors.companyName = "Company name is required";
    } else {
      newErrors.companyName = validateCompanyName(formData.companyName);
    }

    if (!validateRequired(formData.companySize)) {
      newErrors.companySize = "Company size is required";
    }

    if (!validateRequired(formData.hasWebsite)) {
      newErrors.hasWebsite = "Please select whether your company has a website";
    }

    if (
      formData.hasWebsite === "yes" &&
      !validateRequired(formData.websiteUrl)
    ) {
      newErrors.websiteUrl = "Website URL is required when you select 'Yes'";
    } else if (formData.hasWebsite === "yes") {
      newErrors.websiteUrl = validateWebsiteUrl(formData.websiteUrl);
    }

    if (!validateRequired(formData.country)) {
      newErrors.country = "Country or Region is required";
    }

    setValidationErrors(newErrors);

    // Check if there are any errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleNext = () => {
    setIsSubmitted(true);

    if (validateForm()) {
      console.log("Form submitted:", formData);
      navigate("/signup/step2");
    } else {
      console.log("Form has validation errors:", validationErrors);
    }
  };

  return (
    <div className={`min-vh-100 ${styles.container}`}>
      {/* Logo - Fixed position on left with click functionality */}
      <div className={styles.logoContainer}>
        <img
          src={phishcode_logoo_1}
          alt="PhishCode Logo"
          className={styles.headerLogo}
          onClick={handleLogoClick}
          style={{
            cursor: "pointer",
          }}
        />
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
                  <MdRadioButtonUnchecked
                    className={`${styles.stepIcon} ${styles.stepActive}`}
                  />
                  <span
                    className={`${styles.stepLabel} ${styles.stepLabelActive}`}
                  >
                    About you
                  </span>
                </div>
                <div className={styles.progressStep}>
                  <MdRadioButtonUnchecked className={styles.stepIcon} />
                  <span className={styles.stepLabel}>Sign-in details</span>
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
            <h2 className={styles.formTitle}>Tell us about yourself</h2>

            {/* Form Content */}
            <div className={styles.formContent}>
              {/* Form Fields */}
              <div className="row">
                {/* First Name */}
                <div className="col-md-6 mb-3">
                  <label className={styles.label}>
                    First name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className={`form-control ${styles.input} ${
                      validationErrors.firstName ? styles.inputError : ""
                    }`}
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    maxLength={50}
                    placeholder="Enter your first name"
                  />
                  {validationErrors.firstName && (
                    <div className={styles.errorMessage}>
                      {validationErrors.firstName}
                    </div>
                  )}
                </div>

                {/* Middle Name */}
                <div className="col-md-6 mb-3">
                  <label className={styles.label}>Middle name (Optional)</label>
                  <input
                    type="text"
                    name="middleName"
                    className={`form-control ${styles.input}`}
                    value={formData.middleName}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    maxLength={50}
                    placeholder="Enter your middle name"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="mb-3">
                <label className={styles.label}>
                  Last name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  className={`form-control ${styles.input} ${
                    validationErrors.lastName ? styles.inputError : ""
                  }`}
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  maxLength={50}
                  placeholder="Enter your last name"
                />
                {validationErrors.lastName && (
                  <div className={styles.errorMessage}>
                    {validationErrors.lastName}
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${styles.input} ${
                    validationErrors.email ? styles.inputError : ""
                  }`}
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  placeholder="Enter your email address"
                />
                {validationErrors.email && (
                  <div className={styles.errorMessage}>
                    {validationErrors.email}
                  </div>
                )}
              </div>

              {/* Job Title */}
              <div className="mb-3">
                <label className={styles.label}>
                  Job title <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  className={`form-control ${styles.input} ${
                    validationErrors.jobTitle ? styles.inputError : ""
                  }`}
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  maxLength={100}
                  placeholder="Enter your job title"
                />
                {validationErrors.jobTitle && (
                  <div className={styles.errorMessage}>
                    {validationErrors.jobTitle}
                  </div>
                )}
              </div>

              {/* Business Phone - Simple Input */}
              <div className="mb-3">
                <label className={styles.label}>
                  Business phone number{" "}
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="businessPhone"
                  className={`form-control ${styles.input} ${
                    validationErrors.businessPhone ? styles.inputError : ""
                  }`}
                  value={formData.businessPhone}
                  onChange={handleInputChange}
                  onBlur={handlePhoneBlur}
                  placeholder="Enter phone number"
                />
                {validationErrors.businessPhone && (
                  <div className={styles.errorMessage}>
                    {validationErrors.businessPhone}
                  </div>
                )}
              </div>

              <div className="row">
                {/* Company Name */}
                <div className="col-md-6 mb-3">
                  <label className={styles.label}>
                    Company name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    className={`form-control ${styles.input} ${
                      validationErrors.companyName ? styles.inputError : ""
                    }`}
                    value={formData.companyName}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    maxLength={200}
                    placeholder="Enter your company name"
                  />
                  {validationErrors.companyName && (
                    <div className={styles.errorMessage}>
                      {validationErrors.companyName}
                    </div>
                  )}
                </div>

                {/* Company Size */}
                <div className="col-md-6 mb-3">
                  <label className={styles.label}>
                    Company size <span className={styles.required}>*</span>
                  </label>
                  <select
                    name="companySize"
                    className={`form-select ${styles.select} ${
                      styles.smoothDropdown
                    } ${validationErrors.companySize ? styles.inputError : ""}`}
                    value={formData.companySize}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select one from below
                    </option>
                    <option value="1 person">1 person</option>
                    <option value="2-4 people">2-4 people</option>
                    <option value="5-9 people">5-9 people</option>
                    <option value="10-24 people">10-24 people</option>
                    <option value="25-49 people">25-49 people</option>
                    <option value="50-249 people">50-249 people</option>
                    <option value="250-999 people">250-999 people</option>
                    <option value="1000+ people">1000+ people</option>
                  </select>
                  {validationErrors.companySize && (
                    <div className={styles.errorMessage}>
                      {validationErrors.companySize}
                    </div>
                  )}
                </div>
              </div>

              {/* Company Website */}
              <div className="row mb-3">
                <div
                  className={
                    formData.hasWebsite === "yes" ? "col-md-6" : "col-12"
                  }
                  style={{ transition: "all 0.3s ease" }}
                >
                  <label className={styles.label}>
                    Does your company have a website?{" "}
                    <span className={styles.required}>*</span>
                  </label>
                  <select
                    name="hasWebsite"
                    className={`form-select ${styles.select} ${
                      styles.smoothDropdown
                    } ${validationErrors.hasWebsite ? styles.inputError : ""}`}
                    value={formData.hasWebsite}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select one from below
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="not sure">Not sure</option>
                  </select>
                  {validationErrors.hasWebsite && (
                    <div className={styles.errorMessage}>
                      {validationErrors.hasWebsite}
                    </div>
                  )}
                </div>

                {/* Conditional Website URL Input */}
                {formData.hasWebsite === "yes" && (
                  <div
                    className="col-md-6"
                    style={{ animation: "slideIn 0.3s ease-in-out" }}
                  >
                    <label className={styles.label}>Enter your website</label>
                    <input
                      type="url"
                      name="websiteUrl"
                      className={`form-control ${styles.input} ${
                        validationErrors.websiteUrl ? styles.inputError : ""
                      }`}
                      value={formData.websiteUrl}
                      onChange={handleInputChange}
                      onBlur={handleFieldBlur}
                      placeholder="https://www.example.com"
                    />
                    {validationErrors.websiteUrl && (
                      <div className={styles.errorMessage}>
                        {validationErrors.websiteUrl}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Country */}
              <div className="mb-4">
                <label className={styles.label}>
                  Country or Region <span className={styles.required}>*</span>
                </label>
                <select
                  name="country"
                  className={`form-select ${styles.select} ${
                    styles.smoothDropdown
                  } ${validationErrors.country ? styles.inputError : ""}`}
                  value={formData.country}
                  onChange={handleInputChange}
                  disabled={loadingCountries}
                >
                  {loadingCountries ? (
                    <option value="">Loading countries...</option>
                  ) : (
                    <>
                      <option value="" disabled>
                        Select your country
                      </option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </>
                  )}
                </select>
                {validationErrors.country && (
                  <div className={styles.errorMessage}>
                    {validationErrors.country}
                  </div>
                )}
              </div>

              {/* Checkboxes */}
              <div className="mb-3">
                <div className={`${styles.checkboxContainer} mb-3`}>
                  <input
                    type="checkbox"
                    name="agreeToContact"
                    className={styles.checkboxInput}
                    id="agreeToContact"
                    checked={formData.agreeToContact}
                    onChange={handleInputChange}
                  />
                  <label
                    className={styles.checkboxLabel}
                    htmlFor="agreeToContact"
                  >
                    I understand that PHISHCODE may contact me about my trial.
                  </label>
                </div>

                <div className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    name="receiveInfo"
                    className={styles.checkboxInput}
                    id="receiveInfo"
                    checked={formData.receiveInfo}
                    onChange={handleInputChange}
                  />
                  <label className={styles.checkboxLabel} htmlFor="receiveInfo">
                    I will receive information, tips, and offers about solutions
                    for businesses and organizations, and other PHISHCODE
                    products and services.{" "}
                    <Link to="/privacy-statement" className={styles.privacyLink}>
                      Privacy Statement
                    </Link>
                  </label>
                </div>
              </div>

              {/* Next Button */}
              <div className="d-flex justify-content-start">
                <button
                  type="button"
                  onClick={handleNext}
                  className={styles.nextBtn}
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

export default Step1AboutYou;
