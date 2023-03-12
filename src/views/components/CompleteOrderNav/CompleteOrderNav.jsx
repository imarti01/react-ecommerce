import "./CompleteOrderNav.scss";

export const CompleteOrderNav = ({ activeClass }) => {
  return (
    <div className="complete-order-nav">
      <h3
        className={
          activeClass === "address" ? "complete-order-nav__address" : ""
        }
      >
        ADDRESS
      </h3>
      <img
        src="https://res.cloudinary.com/duokspzx0/image/upload/v1678624918/icons/next_1_hsicrc.png"
        alt="/"
      />
      <h3
        className={
          activeClass === "confirm" ? "complete-order-nav__confirm" : ""
        }
      >
        CONFIRM ORDER
      </h3>
      <img
        src="https://res.cloudinary.com/duokspzx0/image/upload/v1678624918/icons/next_1_hsicrc.png"
        alt="/"
      />
      <h3
        className={
          activeClass === "payment" ? "complete-order-nav__payment" : ""
        }
      >
        PAYMENT
      </h3>
    </div>
  );
};
