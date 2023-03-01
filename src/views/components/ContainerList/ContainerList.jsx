import { AddNewBox, ListWishes } from "../";
import "./ContainerList.scss";

export const ContainerList = ({ listToRender }) => {
  return (
    <div className="container-list">
      <AddNewBox />
      {listToRender.length > 0 ? (
        <ListWishes listToRender={listToRender} />
      ) : (
        <div className="container-list__message">
          <h3>You don't have any boxes on this list yet.</h3>
        </div>
      )}
    </div>
  );
};
