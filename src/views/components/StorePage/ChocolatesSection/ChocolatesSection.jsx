import { useFetch } from "../../../../hooks";
import { ChocolateCard } from "../ChocolateCard/ChocolateCard";
import "./ChocolatesSection.scss";

export const ChocolatesSection = ({ scrollBoxSection }) => {
  const chocolatesInfo = useFetch("http://localhost:3004/chocolates");

  return (
    <div className="chocolates-section">
      {chocolatesInfo.length > 0 &&
        chocolatesInfo.map((chocolate) => {
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
