import React from "react";
import { FaSchoolFlag } from "react-icons/fa6";
import "../CSS/registerButton.css";

const DelegateButton: React.FC = () => {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSecCbHcN9zQl5jYmX6CFl8U73GvV1JuGke7bPYzEs2kvFDcuw/viewform?usp=send_form"
      className="register-button"
      aria-label="Register as delegation"
    >
      <div className = "register-button-inner">
        <span className="register-text">Delegation Registration</span>
        <FaSchoolFlag className="register-icon" />
      </div>
    </a>
  );
};

export default DelegateButton;