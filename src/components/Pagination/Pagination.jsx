import React from "react";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  onNextPageClick,
  onPrevPageClick,
  totalPages,
}) => {
  return (
    <div className="pagination-container">
      <button
        className={`page-button ${currentPage === 1 ? "disabled" : ""}`}
        onClick={onPrevPageClick}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={`page-button ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={onNextPageClick}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
