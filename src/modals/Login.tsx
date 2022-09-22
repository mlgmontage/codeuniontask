import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalBox, ModalPanel, CloseBtn, ModalTitle } from "../UI";

const Login = () => {
  const navigate = useNavigate();

  return (
    <ModalBox>
      <ModalPanel>
        <CloseBtn onClick={() => navigate(-1)} />
        <ModalTitle>Войти</ModalTitle>
      </ModalPanel>
    </ModalBox>
  );
};

export default Login;
