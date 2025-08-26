import { MdCheck } from "react-icons/md";
import styles from "./Step3Confirmation.module.css";
import logo from "../../../images/phishcode logoo 1.png";

const Step3Confirmation = () => {
  const handleGetStarted = () => {
    console.log("Get Started clicked");
    // Handle redirect to dashboard or next action
  };

  return (
    <div className={`min-vh-100 ${styles.container}`}>
      {/* Logo - Fixed position on left */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="PhishCode Logo" className={styles.headerLogo} />
      </div>

      {/* Header - Centered */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          PHISHCODE Phishing Attack Simulation - Premium Trial
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
                  <div className={`${styles.stepIcon} ${styles.stepCompleted}`}>
                    <MdCheck className={styles.checkIcon} />
                  </div>
                  <span className={styles.stepLabel}>Sign-in details</span>
                </div>
                <div className={styles.progressStep}>
                  <div className={`${styles.stepIcon} ${styles.stepCompleted}`}>
                    <MdCheck className={styles.checkIcon} />
                  </div>
                  <span
                    className={`${styles.stepLabel} ${styles.stepLabelActive}`}
                  >
                    Complete & get started
                  </span>
                </div>
              </div>
            </div>

            {/* Form Title */}
            <h2 className={styles.formTitle}>Confirmation details</h2>

            {/* Thank you message */}
            <h3 className={styles.thankYouTitle}>
              Thanks for signing up for PHISHCODE Attack Simulation Trial
            </h3>

            {/* User details */}
            <div className={styles.userDetails}>
              <p className={styles.detailText}>
                Your username is{" "}
                <span className={styles.boldText}>
                  Loremipsum.phishcode.com
                </span>
              </p>
              <p className={styles.detailText}>
                We've sent a confirmation email to{" "}
                <span className={styles.boldText}>loremipsum@gmail.com</span>
              </p>
            </div>

            {/* Get Started Button */}
            <div
              className={`d-flex justify-content-start ${styles.getStartedBtnContainer}`}
            >
              <button
                type="button"
                onClick={handleGetStarted}
                className={`btn ${styles.getStartedBtn}`}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3Confirmation;
