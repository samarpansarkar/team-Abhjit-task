import ApiCallUsingAxios from "./api/ApiCallUsingAxios";
import ApiInstance from "./api/ApiInstance";
import UserPromise from "./promise/userPromise";

const App = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#84f708",
        color: "white",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "blue",
          width: "300px",
          height: "300px",
          padding: "10px",
        }}
      >
        <ApiCallUsingAxios />
      </div>
      <div
        style={{
          marginLeft: "20px",
          backgroundColor: "blue",
          width: "300px",
          height: "300px",
          padding: "10px",
        }}
      >
        <ApiInstance />
      </div>
      <div
        style={{
          marginLeft: "20px",
          backgroundColor: "blue",
          width: "300px",
          height: "300px",
          padding: "10px",
        }}
      >
        <UserPromise />
      </div>
    </section>
  );
};

export default App;
