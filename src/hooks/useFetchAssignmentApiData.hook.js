import { useState, useEffect } from "react";
import { getAssignmentData } from "../api/fetchAssignmentData/fetchAssignmentData.service";

export const useFetchAssignMentApiData = () => {
  const [apiData, setApiData] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiData = () => {
    setIsLoading(true);
    setErrors(null);
    getAssignmentData()
      .then((response) => response.json())
      .then((json) => setApiData(json))
      .catch((errors) => {
        setErrors(errors);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return { apiData, errors, isLoading, fetchApiData };
};
