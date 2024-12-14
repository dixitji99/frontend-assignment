import React from "react";
import "./ErrorComponent.css";

const ErrorComponent = ({ onRetry }) => {
  return (
    <div className="error-container">
      <h1 className="error-header">Oops! Something went wrong.</h1>
      <button className="retry-button" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
};

export default ErrorComponent;
