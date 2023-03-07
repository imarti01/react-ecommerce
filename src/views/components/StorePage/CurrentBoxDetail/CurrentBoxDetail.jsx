import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCurrentBoxContext } from "../../../../hooks";
import "./CurrentBoxDetail.scss";

export const CurrentBoxDetail = () => {
  const { addChocolate, removeChocolate, currentBox } = useCurrentBoxContext();
  const { units, pcs, chocolates, total, counterPcs } = currentBox;

  const navigate = useNavigate();

  const addToCart = () => {
    //falta afegir funció addCart
    Swal.fire({
      title: "The box has been added to the cart!",
      text: "What do you want do now?",
      icon: "success",
      showCancelButton: "success",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "CONTINUE WITH THE PURCHASE",
      cancelButtonText: "KEEP BUYING",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/order");
      }
    });
  };

  return (
    <div className="box-card">
      <div className="box-car__summary">
        <h6>{pcs - counterPcs} chocolates are missing to fill the box</h6>
        <h3 className="box-card__summary--title">BOX {pcs} PCS</h3>
        {chocolates.map((chocolate) => {
          return (
            <div className="box-card__summary--list" key={chocolate.name}>
              <p className="box-card__summary--list--name">{chocolate.name}</p>
              <div className="box-card__summary--list--units-price">
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
        <p>
          <span>-</span>
          {units}
          <span>+</span>
          {total.toFixed(2)}€
        </p>
        <div>
          <button>Discard</button>
          <button disabled={pcs !== counterPcs} onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
