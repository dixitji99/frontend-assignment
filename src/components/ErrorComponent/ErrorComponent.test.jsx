import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ErrorComponent from "./ErrorComponent";

describe("ErrorComponent", () => {
  it("renders error message", () => {
    const errorMessage = "Oops! Something went wrong.";
    const { getByText } = render(<ErrorComponent onRetry={() => {}} />);

    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it("renders retry button", () => {
    const { getByText } = render(<ErrorComponent onRetry={() => {}} />);

    expect(getByText("Retry")).toBeInTheDocument();
  });

  it("calls onRetry when retry button is clicked", () => {
    const onRetry = jest.fn();
    const { getByText } = render(<ErrorComponent onRetry={onRetry} />);

    fireEvent.click(getByText("Retry"));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it("renders error header", () => {
    const { getByText } = render(<ErrorComponent onRetry={() => {}} />);

    expect(getByText("Oops! Something went wrong.")).toBeInTheDocument();
  });
});
