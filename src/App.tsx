import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Main from "./components/Main";
import Login from "./modals/Login";
import Register from "./modals/Register";

const App = () => {
  return (
    <div className="relative">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Header />
      <Jumbotron />
      <Main />
    </div>
  );
};

export default App;
