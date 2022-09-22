import React from "react";

import lens from "../assets/lens.svg";
import { Button } from "../UI";

const Jumbotron = () => {
  return (
    <div className="h-[410px] bg-blue">
      <div className="w-[1240px] m-auto flex flex-col justify-center">
        <h1 className="text-xl text-white mb-[30px] mt-[60px]">
          Найдите лучшее предложение от
          <br />
          ресторана
        </h1>
        <div className="w-full flex justify-between p-[36px] h-[131px] rounded-lg bg-white">
          <div className="border border-lightGray rounded-sm flex px-[18px] w-[410px]">
            <input
              placeholder="Город, адрес, шоссе или ЖК"
              tabIndex={0}
              className="focus:outline-none w-full"
            />
            <img
              src={lens}
              width="20"
              height="20"
              alt="lens"
              className="cursor-pointer"
            />
          </div>
          <Button className="py-5 w-[200px] rounded-sm">Найти</Button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
