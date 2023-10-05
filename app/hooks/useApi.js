import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    // Handling errors - for testing, close the backend server
    if (!response.ok) {
      setError(true);
      return;
    }

    setError(false);
    setListings(response.data);
  };

  return { data, error, loading, request };
};
