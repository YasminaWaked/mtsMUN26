import React from "react";
import { FaGavel } from "react-icons/fa";
import "../CSS/registerButton.css";

const ChairButton: React.FC = () => {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeuSaOTjm2oECAUjv6pkMp9MRXXNgZbDk4j4s6Tvcgz6qYiqA/viewform?pli=1"
      className="register-button"
      aria-label="Register as chair"
    >
       <div className = "register-button-inner">
        <span className="register-text">Chair Registration</span>
        <FaGavel className="register-icon" />
       </div>
    </a>
  );
};

export default ChairButton;