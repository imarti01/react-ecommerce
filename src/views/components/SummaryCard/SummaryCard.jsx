import Swal from "sweetalert2";
import { useCartContext } from "../../../hooks";
import { UnitsBox } from "../UnitsBox/UnitsBox";
import "./SummaryCard.scss";

export const SummaryCard = ({ id, units, pcs, total, chocolates }) => {
  const { changeUnitsBoxOnCart, deleteBoxToCart, closeCart } = useCartContext();

  const deleteBox = () => {
    Swal.fire({
      title: "Are you sure to delete this box?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBoxToCart(id);
        closeCart();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <h3>BOX {pcs} PCS</h3>
      <p>
        {chocolates &&
          chocolates.map((chocolate, idx) => {
            const unitsName = chocolate.units + " " + chocolate.name;
            return idx === 0 ? unitsName : ", " + unitsName;
          })}
      </p>
      <UnitsBox
        changeUnitsBoxProvider={changeUnitsBoxOnCart}
        id={id}
        units={units}
        total={total}
      />
      <button onClick={deleteBox}>Delete</button>
    </div>
  );
};
