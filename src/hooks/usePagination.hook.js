import { useState } from "react";

export const usePagination = (data, recordsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  const totalPages = Math.ceil(data.length / recordsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage === totalPages) {
        return;
      }
      return prevPage + 1;
    });
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return {
    currentRecords,
    goToNextPage,
    goToPreviousPage,
    currentPage,
    totalPages,
  };
};
