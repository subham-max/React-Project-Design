import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navigation from "./components/navigation"
import Body from "./components/body"
import "./App.css";

function App() {

  return (
    <>
      {/* Header */}
      <div>
        <Navigation/>
        <Body/>
      </div>
    </>
  );
}

export default App;
