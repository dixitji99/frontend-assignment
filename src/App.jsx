import "./App.css";
import { AssignmentTable } from "./components/AssignmentTable/AssignmentTable";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
import Pagination from "./components/Pagination/Pagination";
import { RECORD_PER_PAGE } from "./constants";
import { useFetchAssignMentApiData, usePagination } from "./hooks";

function App() {
  const { apiData, errors, isLoading, fetchApiData } =
    useFetchAssignMentApiData();
  const {
    currentRecords,
    goToNextPage,
    goToPreviousPage,
    currentPage,
    totalPages,
  } = usePagination(apiData, RECORD_PER_PAGE);

  const showErrorMessage = Boolean(errors);
  const showTableData = apiData.length > 0;

  return (
    <div className="App">
      {isLoading && <div>Loading ...</div>}

      {showErrorMessage && <ErrorComponent onRetry={fetchApiData} />}

      {showTableData && (
        <>
          <AssignmentTable tableData={currentRecords} />
          <Pagination
            currentPage={currentPage}
            onNextPageClick={goToNextPage}
            onPrevPageClick={goToPreviousPage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
}

export default App;
