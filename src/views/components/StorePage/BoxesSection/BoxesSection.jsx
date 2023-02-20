import "./BoxesSection.scss";
import { SizeBoxes } from "../../../../db/db";

export const BoxesSection = () => {
  const chooseSizeBox = (e) => {
    const newBox = {
      pcs: parseInt(e.target.innerText, 10),
      chocolates: [],
    };
    console.log(newBox);
  };

  return (
    <div className="boxes-section">
      <img
        className="boxes-section__img"
        src="https://res.cloudinary.com/duokspzx0/image/upload/v1676890814/boxes/caixa16-removebg-preview_dsawv6.png"
        alt="boxes"
      />
      <p className="boxes-section__title">
        Start by choosing the size of your box
      </p>
      <div className="boxes-section__container-sizes">
        {SizeBoxes.map((pcs) => {
          return (
            <p key={pcs + "pcs"} onClick={chooseSizeBox}>
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
