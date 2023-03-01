import { Link } from "react-router-dom";
import "./AddNewBox.scss";

export const AddNewBox = () => {
  return (
    <div className="add">
      <h4>Create a new box and add it to your wish list</h4>
      <Link to="/handleBoxWishList">
        <img
          src="https://res.cloudinary.com/duokspzx0/image/upload/v1677500579/icons/plus_xsd2pk.png"
          alt="add"
        />
      </Link>
    </div>
  );
};
