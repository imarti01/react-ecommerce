import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/CartContext";
import "./NavBar.scss";

export const NavBar = () => {
  const { cart } = useContext(CartContext);
  const [totalBoxes, setTotalBoxes] = useState(0);

  useEffect(() => {
    if (cart) setTotalBoxes(cart.length);
  }, [cart]);

  return (
    <nav className="navbar">
      <p>CONTACT</p>
      <p className="navbar__gloria">GLÒRIA</p>
      <p>CART({totalBoxes})</p>
    </nav>
  );
};
