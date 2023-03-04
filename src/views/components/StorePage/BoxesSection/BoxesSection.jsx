import "./BoxesSection.scss";
import { useCartContext, useCurrentBoxContext } from "../../../../hooks";
import { useEffect, useState } from "react";

export const BoxesSection = ({ refProps }) => {
  const { openCart } = useCartContext();
  const { chooseSize } = useCurrentBoxContext();

  const [sizeBoxes, setSizeBoxes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3004/sizeBoxes");
      const json = await data.json();
      setSizeBoxes(json);
    };
    fetchData().catch(console.error);
  }, []);

  const chooseSizeBox = (pcs) => {
    chooseSize(pcs);
    openCart();
  };

  return (
    <div className="boxes-section" ref={refProps}>
      <img
        className="boxes-section__img"
        src="https://res.cloudinary.com/duokspzx0/image/upload/v1676890814/boxes/caixa16-removebg-preview_dsawv6.png"
        alt="boxes"
      />
      <p className="boxes-section__title">
        Start by choosing the size of your box
      </p>
      <div className="boxes-section__container-sizes">
        {sizeBoxes.map((pcs) => {
          return (
            <p key={pcs + "pcs"} onClick={() => chooseSizeBox(pcs)}>
              {pcs}pcs
            </p>
          );
        })}
      </div>
      <p className="boxes-section__text">
        Now, keep picking out the chocolates that will hold your box
      </p>
    </div>
  );
};
