import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "././components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route exact path="/">
              <h1>Welcome</h1>
            </Route>
            <Route exact path="/room/:roomId">
              <Chat />
            </Route>
          </Switch>

          {/* React-Router -> Chat Screen*/}
        </div>
      </Router>
    </div>
  );
}

export default App;
