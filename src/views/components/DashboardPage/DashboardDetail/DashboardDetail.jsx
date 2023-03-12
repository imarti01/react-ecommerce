import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import uuid from "react-uuid";
import { useAuthContext, useCartContext, useFetch } from "../../../../hooks";

import "./DashboardDetail.scss";

export const DashboardDetail = () => {
  const { authState } = useAuthContext();
  const { user } = authState;
  const { purchaseHistory } = user;
  const { addBoxToCart } = useCartContext();
  const { boxId } = useParams();
  const navigate = useNavigate();

  const [boxDetail, setBoxDetail] = useState({});
  const { chocolates, pcs, total } = boxDetail;

  const chocolatesData = useFetch("http://localhost:3004/chocolates");

  useEffect(() => {
    if (purchaseHistory) {
      const box = purchaseHistory.map(({ boxes }) =>
        boxes.find(({ id }) => id === boxId)
      );
      setBoxDetail({ ...box[0], units: 1, id: uuid() });
    }
  }, [boxId, purchaseHistory]);

  const addBoxCart = () => {
    addBoxToCart(boxDetail);
    navigate("/store");
  };

  return (
    <div className="dashboard-detail">
      <h2 className="dashboard-detail__title">BOX {pcs} PCS</h2>
      <div className="dashboard-detail__chocolates">
        {chocolates &&
          chocolates.map(({ units, name }) => {
            const chocData = chocolatesData.find((choc) => choc.name === name);
            return (
              <div key={name}>
                <img src={chocData && chocData.src} alt="choc" />
                <h3>
                  {units} /u {name}
                </h3>
              </div>
            );
          })}
      </div>
      <h3 className="dashboard-detail__price">
        Price: {total && total.toFixed(2)}€
      </h3>
      <button className="dashboard-detail__button" onClick={addBoxCart}>
        Add to Cart
      </button>
    </div>
  );
};
