import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders loading message when data is being fetched", () => {
    const { getByText } = render(<App />);
    expect(getByText("Loading ...")).toBeInTheDocument();
  });

  it("renders assignment table when data is fetched successfully", async () => {
    const { getByText } = render(<App />);
    await waitFor(() => expect(getByText("S. No.")).toBeInTheDocument());
  });

  it("renders pagination controls when data is fetched successfully", async () => {
    const { getByText } = render(<App />);
    await waitFor(() => expect(getByText("Prev")).toBeInTheDocument());
    await waitFor(() => expect(getByText("Next")).toBeInTheDocument());
  });
});
