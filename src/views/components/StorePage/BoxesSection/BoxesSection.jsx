import "./BoxesSection.scss";

export const BoxesSection = () => {
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
        <p>6pcs</p>
        <p>10pcs</p>
        <p>16pcs</p>
        <p>24pcs</p>
        <p>32pcs</p>
        <p>48pcs</p>
      </div>
      <p className="boxes-section__text">
        Now, keep picking out the chocolates that will hold your box
      </p>
    </div>
  );
};
