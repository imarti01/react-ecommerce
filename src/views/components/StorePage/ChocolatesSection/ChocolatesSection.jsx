import React, { useEffect, useState } from "react";
import { ChocolateCard } from "../ChocolateCard/ChocolateCard";
import "./ChocolatesSection.scss";

export const ChocolatesSection = ({ scrollBoxSection }) => {
  const [chocolatesInfo, setChocolatesInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/chocolates");
      const json = await data.json();
      setChocolatesInfo(json);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="chocolates-section">
      {chocolatesInfo.map((chocolate) => {
        return (
          <ChocolateCard
            key={"CHOC" + chocolate.id}
            name={chocolate.name}
            desc={chocolate.desc}
            src={chocolate.src}
            price={chocolate.price}
            scrollBoxSection={scrollBoxSection}
          />
        );
      })}
    </div>
  );
};
