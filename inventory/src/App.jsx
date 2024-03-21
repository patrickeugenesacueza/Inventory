import { useState } from "react";
import Nav from "./Components/Nav";
import Login from "./Pages/Login";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <Nav /> */}
        <Login/>
      </div>
    </>
  );
}

export default App;
