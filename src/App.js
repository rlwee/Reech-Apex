import React from 'react';
import Routes from "./Routes";// eslint-disable-next-line
import ReactDOM from "react-dom";

import 'font-awesome/css/font-awesome.min.css';
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