import React from "react";
import { FaGavel } from "react-icons/fa";
import "../CSS/registerButton.css";

const ChairButton: React.FC = () => {
  return (
    <a
      href="/chair-registration"
      className="register-button"
      aria-label="Register as chair"
    >
      <span className="register-text">Chair Registration</span>
      <FaGavel className="register-icon" />
    </a>
  );
};

export default ChairButton;