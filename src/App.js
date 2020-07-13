import React from 'react';
import Routes from "./Routes";// eslint-disable-next-line
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;