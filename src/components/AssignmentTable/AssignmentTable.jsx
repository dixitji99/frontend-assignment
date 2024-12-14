import "./AssignmentTable.css";

export const AssignmentTable = ({ tableData }) => {
  return (
    <div className="assignment-table">
      <table className="table">
        <thead className="table-heading">
          <tr>
            <td>S. No.</td>
            <td>Percentage funded </td>
            <td>Amount pledged</td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data["s.no"]}>
              <td>{data["s.no"]}</td>
              <td>{data["percentage.funded"]}</td>
              <td>{data["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
