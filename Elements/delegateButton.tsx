import React from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import "../CSS/registerButton.css";

const DelegateButton: React.FC = () => {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLScsZYgGQoJuCv4X-6eJbBxPTiNhN68_6QcBlN2NBGg7j2IZSA/viewform"
      className="register-button"
      aria-label="Register as delegate"
    >
      <div className = "register-button-inner">
        <span className="register-text">Delegate Registration</span>
        <BsPersonFillAdd className="register-icon" />
      </div>
    </a>
  );
};

export default DelegateButton;