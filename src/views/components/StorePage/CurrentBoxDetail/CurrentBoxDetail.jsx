import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCartContext, useCurrentBoxContext } from "../../../../hooks";
import { UnitsBox } from "../../UnitsBox/UnitsBox";
import "./CurrentBoxDetail.scss";

export const CurrentBoxDetail = () => {
  const {
    addChocolate,
    removeChocolate,
    currentBox,
    resetCurrentBox,
    changeUnitsBoxOnCurrent,
  } = useCurrentBoxContext();
  const { addBoxToCart, closeCart } = useCartContext();
  const { id, units, pcs, chocolates, total, counterPcs } = currentBox;

  const navigate = useNavigate();

  const addToCart = () => {
    closeCart();
    addBoxToCart(currentBox);
    resetCurrentBox();

    Swal.fire({
      title: "The box has been added to the cart!",
      text: "What do you want do now?",
      icon: "success",
      showCancelButton: "success",
      iconColor: "#6d7505",
      color: "#221a14",
      background: "#DBD5CB",
      confirmButtonColor: "#6d7505",
      cancelButtonColor: "#221a14",
      confirmButtonText: "CONTINUE WITH THE PURCHASE",
      cancelButtonText: "KEEP BUYING",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/address");
      }
    });
  };

  return (
    <div className="box-card">
      <div className="box-card__summary">
        <h6 className="box-card__summary--missing">
          {pcs - counterPcs} chocolates are missing to fill the box
        </h6>
        <h3 className="box-card__summary--title">BOX {pcs} PCS</h3>
        {chocolates.map((chocolate) => {
          return (
            <div className="box-card__summary--list" key={chocolate.name}>
              <p>{chocolate.name}</p>
              <div className="box-card__summary--list__units-price">
                <p>
                  <span
                    onClick={() =>
                      removeChocolate(chocolate.name, chocolate.price)
                    }
                  >
                    -
                  </span>{" "}
                  {chocolate.units} u{" "}
                  <span
                    onClick={() =>
                      addChocolate(chocolate.name, chocolate.price)
                    }
                  >
                    +
                  </span>
                </p>
                <p>{(chocolate.price * chocolate.units).toFixed(2)} €</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="box-card__buy">
        <UnitsBox
          total={total}
          id={id}
          units={units}
          changeUnitsBoxProvider={changeUnitsBoxOnCurrent}
        />
        <div>
          <button className="box-card__buy--btn-discard">Discard</button>
          <button
            className="box-card__buy--btn-add"
            disabled={pcs !== counterPcs}
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
