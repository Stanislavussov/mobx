import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Office from "./Office";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ padding: "40px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/office" element={<Office />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
