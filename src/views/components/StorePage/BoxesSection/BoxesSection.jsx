import "./BoxesSection.scss";
import {
  useCartContext,
  useCurrentBoxContext,
  useFetch,
} from "../../../../hooks";
import uuid from "react-uuid";

export const BoxesSection = ({ refProps }) => {
  const { openCart } = useCartContext();
  const { chooseSize } = useCurrentBoxContext();

  const newId = uuid();

  const sizeBoxes = useFetch("http://localhost:3004/sizeBoxes");

  const chooseSizeBox = (pcs) => {
    chooseSize(pcs, newId);
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
