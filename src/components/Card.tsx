import React from "react";

import geomark from "../assets/geomark.svg";
import { Button } from "../UI";

const Card: React.FC = () => {
  return (
    <div className="w-[300px] h-[445px] bg-white rounded">
      <img
        className="h-[200px] rounded-t w-full"
        src="https://i.insider.com/596e3d09dde1891cc024879d?width=700"
        alt="restaraunt"
      />
      <div className="p-[30px] flex flex-col gap-4">
        <div className="text-boldBase">Infinity Plaza</div>
        <div className="flex gap-2">
          <img src={geomark} alt="geomark" />
          <span className="text-xs">Анталья, Турция</span>
        </div>
        <div className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">
          Один из крупнейших ресторанов Казахстана
        </div>
        <div className="text-boldBase">от $56 000 000</div>
        <Button className="py-2 w-[160px] rounded-xs mt-2">Подробнее</Button>
      </div>
    </div>
  );
};

export default Card;
