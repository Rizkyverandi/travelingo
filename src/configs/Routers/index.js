import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default Routers;
