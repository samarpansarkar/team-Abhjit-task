import axios from "axios";
import { useState } from "react";

type user = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const ApiCallUsingAxios = () => {
  const [data, setData] = useState<user>();
  const [loader, setLoader] = useState(false);

  const callApi = async () => {
    setLoader(true);
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log(res.data);
    setData(res.data);
    setLoader(false);
  };

  if (loader) {
    return <h1>loading............</h1>;
  }
  return (
    <div>
      <h1>ApiCallUsingAxios</h1>
      <button onClick={callApi}>Featch the data</button>
      <div>
        <p>userId:{data?.userId}</p>
        <p>Id:{data?.id}</p>
        <p>title:{data?.title}</p>
        <p>Complete:{data?.completed}</p>
      </div>
    </div>
  );
};

export default ApiCallUsingAxios;
