import React, { useEffect } from "react";
import styled from "styled-components";
import close from "./assets/close.svg";

// NOTE: Here's UI kit
// TODO: Extract colors and valus to "css" constants

export const Button = styled.button`
  border: none;
  background-color: #3782da;
  color: #f9fafb;
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  text-align: center;
`;

const ModalBoxUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

type ModalBoxProps = {
  children?: React.ReactNode;
};

export const ModalBox: React.FC<ModalBoxProps> = ({ children }) => {
  // NOTE: removing scrolling when modal is opened
  useEffect(() => {
    const body = document.getElementById("body");
    body?.classList.add("overflow-hidden");
    console.warn("overflow");

    return () => {
      body?.classList.remove("overflow-hidden");
    };
  }, []);

  return <ModalBoxUI>{children}</ModalBoxUI>;
};

export const ModalPanel = styled.div`
  position: relative;
  background-color: #f9fafb;
  border-radius: 25px;
  width: 526px;
  padding: 54px 60px;
`;

export const ModalTitle = styled.h2`
  font-size: 34px;
  line-height: 34px;
  font-weight: 600;
  text-align: center;
  color: #424f5e;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: url(${close}) center center;
`;
