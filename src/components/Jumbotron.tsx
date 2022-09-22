import React from "react";

const Jumbotron = () => {
  return (
    <div className="h-[410px] bg-blue">
      <div className="w-[1240px] m-auto flex flex-col justify-center">
        <h1 className="text-xl text-white mb-[30px] mt-[60px]">
          Найдите лучшее предложение от
          <br />
          ресторана
        </h1>
        <div className="w-full flex justify-between p-[36px] h-[131px] rounded-lg bg-white"></div>
      </div>
    </div>
  );
};

export default Jumbotron;
