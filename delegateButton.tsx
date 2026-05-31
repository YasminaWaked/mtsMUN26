import React from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import "./registerButton.css";

const DelegateButton: React.FC = () => {
  return (
    <a
      href="/delegate-registration"
      className="register-button"
      aria-label="Register as delegate"
    >
      <span className="register-text">Delegate Registration</span>
      <BsPersonFillAdd className="register-icon" />
    </a>
  );
};

export default DelegateButton;