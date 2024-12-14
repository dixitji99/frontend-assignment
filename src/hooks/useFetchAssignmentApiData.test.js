import { renderHook, act } from "@testing-library/react";
import { useFetchAssignMentApiData } from "./useFetchAssignmentApiData.hook";

describe("useFetchAssignmentApiData hook", () => {
  it("returns initial state with empty data and no errors", () => {
    const { result } = renderHook(() => useFetchAssignMentApiData());
    expect(result.current.apiData).toEqual([]);
    expect(result.current.errors).toBeNull();
  });
});
