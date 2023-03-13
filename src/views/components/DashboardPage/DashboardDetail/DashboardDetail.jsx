import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
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
      const box = purchaseHistory
        .map(({ boxes }) => boxes)
        .flat()
        .find(({ id }) => id === boxId);

      setBoxDetail({ ...box, units: 1, id: uuid() });
    }
  }, [boxId, purchaseHistory]);

  const addBoxCart = () => {
    addBoxToCart(boxDetail);
    navigate("/store");
  };

  const backDashboard = () => {
    navigate("/dashboard");
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
                {chocData ? (
                  <img src={chocData.src} alt="choc" />
                ) : (
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="20"
                    visible={true}
                  />
                )}
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
      <button className="dashboard-detail__back" onClick={backDashboard}>
        BACK
      </button>
    </div>
  );
};
