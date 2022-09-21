import React from "react";

const Header = () => {
  return (
    <header className="w-[1240px] h-[74px] m-auto flex justify-between items-center rounded-b">
      <div className="ml-5">Главная</div>
      <div className="flex gap-5">
        <a className="text-gray" href="#">
          Регистрация
        </a>
        <button>Войти</button>
      </div>
    </header>
  );
};

export default Header;
