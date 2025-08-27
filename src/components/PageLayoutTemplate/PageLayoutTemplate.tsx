import React from "react";
import styles from "./PageLayoutTemplate.module.css";
import phishcode_logoo_1 from "../../assets/logo/phishcode_logoo_1.png";

interface PageLayoutTemplateProps {
  title: string;
  children: React.ReactNode;
  onCancel: () => void;
  onNext: () => void;
  cancelButtonText?: string;
  nextButtonText?: string;
  showCancelButton?: boolean;
}

const PageLayoutTemplate: React.FC<PageLayoutTemplateProps> = ({
  title,
  children,
  onCancel,
  onNext,
  cancelButtonText = "Cancel",
  nextButtonText = "Next",
  showCancelButton = true,
}) => {
  return (
    <div
      className={`min-vh-100 d-flex align-items-center justify-content-center ${styles.container}`}
    >
      <div className={`card shadow-lg border-0 ${styles.card}`}>
        <div className="card-body p-0 d-flex flex-column">
          {/* Logo */}
          <div className="text-start mb-4">
            <img src={phishcode_logoo_1} alt="PhishCode Logo" className={styles.logo} />
          </div>

          {/* Title */}
          <h2 className={`text-start ${styles.title}`}>{title}</h2>

          {/* Content Area */}
          <div className={styles.contentArea}>{children}</div>

          {/* Buttons */}
          <div className="d-flex justify-content-end mt-auto" style={{ gap: "0.5rem" }}>
            {showCancelButton && (
              <button
                type="button"
                onClick={onCancel}
                className={`btn ${styles.cancelBtn}`}
              >
                {cancelButtonText}
              </button>
            )}
            <button
              type="button"
              onClick={onNext}
              className={`btn ${styles.nextBtn}`}
            >
              {nextButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayoutTemplate;
