import { act, renderHook } from "@testing-library/react";
import { usePagination } from "./usePagination.hook";

describe("usePagination hook", () => {
  it("returns correct initial values", () => {
    const { result } = renderHook(() => usePagination([], 5));

    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(0);
    expect(result.current.currentRecords).toEqual([]);
  });

  it("updates currentPage when goToNextPage is called", () => {
    const { result } = renderHook(() => usePagination([], 5));

    act(() => {
      result.current.goToNextPage();
    });

    expect(result.current.currentPage).toBe(2);
  });

  it("updates currentPage when goToPreviousPage is called", () => {
    const { result } = renderHook(() => usePagination([], 5));

    act(() => {
      result.current.goToNextPage();
      result.current.goToPreviousPage();
    });

    expect(result.current.currentPage).toBe(1);
  });

  it("calculates totalPages correctly", () => {
    const data = Array(10).fill(null);
    const { result } = renderHook(() => usePagination(data, 5));

    expect(result.current.totalPages).toBe(2);
  });

  it("calculates currentRecords correctly", () => {
    const data = Array(10).fill(null);
    const { result } = renderHook(() => usePagination(data, 5));

    expect(result.current.currentRecords).toEqual(data.slice(0, 5));
  });
});
