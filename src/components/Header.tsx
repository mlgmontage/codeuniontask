import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../UI";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="rounded-b bg-white">
      <div className="w-[1240px] h-[74px] m-auto flex justify-between items-center">
        <a className="ml-5 text-xs text-gray" href="#">
          Главная
        </a>
        <div className="flex gap-5 items-center">
          <a
            className="text-gray text-xs cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Регистрация
          </a>
          <Button
            className="w-[90px] py-2 rounded-xs"
            onClick={() => navigate("/login")}
          >
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
