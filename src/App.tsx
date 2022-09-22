import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="text-red-500">
      <Header />
      <Jumbotron />
      <Main />
    </div>
  );
};

export default App;
