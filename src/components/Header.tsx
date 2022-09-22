import React from "react";
import { Button } from "../UI";

const Header = () => {
  return (
    <header className="rounded-b bg-white">
      <div className="w-[1240px] h-[74px] m-auto flex justify-between items-center">
        <a className="ml-5 text-xs text-gray" href="#">
          Главная
        </a>
        <div className="flex gap-5 items-center">
          <a className="text-gray text-xs" href="#">
            Регистрация
          </a>
          <Button className="w-[90px] py-2 rounded-xs">Войти</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
