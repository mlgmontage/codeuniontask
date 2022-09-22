import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalBox, ModalPanel, CloseBtn, ModalTitle } from "../UI";

const Register = () => {
  const navigate = useNavigate();

  return (
    <ModalBox>
      <ModalPanel>
        <CloseBtn onClick={() => navigate(-1)} />
        <ModalTitle>Зарегистрироваться</ModalTitle>
      </ModalPanel>
    </ModalBox>
  );
};

export default Register;
