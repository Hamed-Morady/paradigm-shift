import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home";

function App() {
  return <Home />;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
