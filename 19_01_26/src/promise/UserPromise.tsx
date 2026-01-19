import type React from "react";

interface User {
  name: string;
  id: number;
  age: number;
  role: string;
}

const userPromiseFn: Promise<User> = new Promise((res, rej) => {
  const status: string = "success";
  const user: User = {
    name: "samarpan",
    id: 1,
    age: 24,
    role: "developer",
  };
  if (status === "success") {
    setTimeout(() => {
      res(user);
    }, 5000);
  } else {
    setTimeout(() => {
      rej("failed");
    }, 4000);
  }
});

const UserPromise: React.FC = () => {
  const promiseCall = async (): Promise<void> => {
    try {
      const response = await userPromiseFn;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={promiseCall}>call the Promise</button>
    </div>
  );
};

export default UserPromise;
