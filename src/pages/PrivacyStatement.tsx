import React from "react";
import NavBar from "./PrivacyStatement/NavBar";
import PrivacyStatementBody from "./PrivacyStatement/PrivacyStatementBody";
import Footer from "./PrivacyStatement/Footer";

const PrivacyStatement: React.FC = () => {
  return (
    <div>
      <NavBar />
      <PrivacyStatementBody />
      <Footer />
    </div>
  );
};

export default PrivacyStatement;
