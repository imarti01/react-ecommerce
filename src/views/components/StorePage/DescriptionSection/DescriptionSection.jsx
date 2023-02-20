import "./DescriptionSection.scss";

export const DescriptionSection = () => {
  return (
    <div className="description-section">
      <p className="description-section__title">
        create your own box of chocolates
      </p>
      <div className="description-section__img"></div>
      <div className="description-section__container-text">
        <p>
          no one knows your own tastes better than you, that's why in GLÒRIA we
          bet you decide how your perfect box is going to be, so
        </p>
        <p className="description-section__container-text--start">
          LET'S START!
        </p>
      </div>
    </div>
  );
};
