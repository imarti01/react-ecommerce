import "./BoxesSection.scss";
import { useCartContext } from "../../../../hooks/useCartContext";
import { useEffect, useState } from "react";

export const BoxesSection = ({ refProps }) => {
  const { currentBox, setCurrentBox, setIsCartOpen } = useCartContext();

  const [sizeBoxes, setSizeBoxes] = useState([]);

  const chooseBoxSize = (pcs) => {
    setCurrentBox({ ...currentBox, pcs });
    setIsCartOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/sizeBoxes");
      const json = await data.json();
      setSizeBoxes(json);
    };
    fetchData().catch(console.error);
  }, []);

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
            <p key={pcs + "pcs"} onClick={() => chooseBoxSize(pcs)}>
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
