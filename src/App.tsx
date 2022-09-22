import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Main from "./components/Main";
import { CloseBtn, ModalBox, ModalPanel, ModalTitle } from "./UI";

const App = () => {
  return (
    <div className="relative">
      <ModalBox>
        <ModalPanel>
          <CloseBtn />
          <ModalTitle>Войти</ModalTitle>
        </ModalPanel>
      </ModalBox>
      <Header />
      <Jumbotron />
      <Main />
    </div>
  );
};

export default App;
