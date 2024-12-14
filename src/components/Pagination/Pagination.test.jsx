import React from "react";
import Pagination from "./Pagination";
import { fireEvent, render } from "@testing-library/react";

describe("Pagination component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Pagination
        currentPage={1}
        onNextPageClick={jest.fn()}
        onPrevPageClick={jest.fn()}
        totalPages={5}
      />
    );

    expect(getByText("Page 1 of 5")).toBeInTheDocument();
    expect(getByText("Prev")).toBeInTheDocument();
    expect(getByText("Next")).toBeInTheDocument();
  });

  it("calls onNextPageClick when Next button is clicked", () => {
    const onNextPageClick = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={1}
        onNextPageClick={onNextPageClick}
        onPrevPageClick={jest.fn()}
        totalPages={5}
      />
    );

    fireEvent.click(getByText("Next"));
    expect(onNextPageClick).toHaveBeenCalledTimes(1);
  });

  it("calls onPrevPageClick when Prev button is clicked", () => {
    const onPrevPageClick = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={2}
        onNextPageClick={jest.fn()}
        onPrevPageClick={onPrevPageClick}
        totalPages={5}
      />
    );

    fireEvent.click(getByText("Prev"));
    expect(onPrevPageClick).toHaveBeenCalledTimes(1);
  });

  it("disables Prev button when currentPage is 1", () => {
    const { getByText } = render(
      <Pagination
        currentPage={1}
        onNextPageClick={jest.fn()}
        onPrevPageClick={jest.fn()}
        totalPages={5}
      />
    );

    expect(getByText("Prev")).toBeDisabled();
  });

  it("disables Next button when currentPage is totalPages", () => {
    const { getByText } = render(
      <Pagination
        currentPage={5}
        onNextPageClick={jest.fn()}
        onPrevPageClick={jest.fn()}
        totalPages={5}
      />
    );

    expect(getByText("Next")).toBeDisabled();
  });
});
