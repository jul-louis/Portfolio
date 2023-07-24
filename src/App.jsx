import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./styles.css";
import Cursor from "./components/Cursor";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <Cursor />
      <NavigationBar />
    </div>
  );
}

export default App;
