import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    // BEM Naming Convention \\
    <div className="app">
      <h2>Hello World!</h2>
      <Header />
      <Sidebar />
      {/* React-Router -> Chat Screen*/}
    </div>
  );
}

export default App;
