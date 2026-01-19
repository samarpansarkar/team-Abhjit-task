import type { AxiosInstance } from "axios";
import axios from "axios";
import { useState } from "react";

const AxiosAPI: AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com/users/1",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

const ApiInstance = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);
    const response = await AxiosAPI.get("");
    setData(response.data);
    setLoading(false);
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Api Call Using Axios Instance</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {data && (
        <div>
          <p>ID: {data.id}</p>
          <p>First Name: {data.firstName}</p>
          <p>Last Name: {data.lastName}</p>
          <p>Age: {data.age}</p>
        </div>
      )}
    </div>
  );
};

export default ApiInstance;
