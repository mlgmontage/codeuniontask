import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <div className="w-[1240px] m-auto py-[60px] text-dark">
      <h2 className="text-xl">Популярные предложения</h2>
      <div className="text-base mb-[28px]">
        Предложения, которые любят наши клиенты
      </div>
      <div className="w-[1240px] m-auto grid grid-cols-4 gap-[14px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;
