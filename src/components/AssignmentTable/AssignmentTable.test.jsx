import React from "react";
import { render } from "@testing-library/react";
import { AssignmentTable } from "./AssignmentTable";

describe("AssignmentTable", () => {
  it("renders table with correct headers", () => {
    const tableData = [];
    const { getByText } = render(<AssignmentTable tableData={tableData} />);

    expect(getByText("S. No.")).toBeInTheDocument();
    expect(getByText("Percentage funded")).toBeInTheDocument();
    expect(getByText("Amount pledged")).toBeInTheDocument();
  });

  it("renders table data correctly", () => {
    const tableData = [
      { "s.no": 1, "percentage.funded": 100, "amt.pledged": 1000 },
      { "s.no": 2, "percentage.funded": 50, "amt.pledged": 500 },
    ];
    const { getByText } = render(<AssignmentTable tableData={tableData} />);

    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("100")).toBeInTheDocument();
    expect(getByText("1000")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("50")).toBeInTheDocument();
    expect(getByText("500")).toBeInTheDocument();
  });
});
