import React from "react";
import NavBar from "./PrivacyStatement/NavBar";
import Footer from "./PrivacyStatement/Footer";
import TermsAndConditions from "./Terms&Condition/Terms&ConditionBody";

const PrivacyStatement: React.FC = () => {
  return (
    <div>
      <NavBar />
      <TermsAndConditions />
      <Footer />
    </div>
  );
};

export default PrivacyStatement;
