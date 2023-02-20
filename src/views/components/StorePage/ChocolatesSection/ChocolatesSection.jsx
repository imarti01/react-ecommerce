import React from "react";
import { ChocolatesInfo } from "../../../../db/db";
import { ChocolateCard } from "../ChocolateCard/ChocolateCard";
import "./ChocolatesSection.scss";

export const ChocolatesSection = () => {
  return (
    <div className="chocolates-section">
      {ChocolatesInfo.map((chocolate) => {
        return (
          <ChocolateCard
            key={"CHOC" + chocolate.id}
            name={chocolate.name}
            desc={chocolate.desc}
            src={chocolate.src}
            price={chocolate.price}
          />
        );
      })}
    </div>
  );
};
