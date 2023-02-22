import { useEffect, useState } from "react";
import useCartContext from "../../../../hooks/useCartContext";

import "./NavBar.scss";

export const NavBar = () => {
  const { cart } = useCartContext();
  const [totalBoxes, setTotalBoxes] = useState(0);

  useEffect(() => {
    cart && setTotalBoxes(cart.length);
  }, [cart]);

  return (
    <nav className="navbar">
      <p>CONTACT</p>
      <p className="navbar__gloria">GLÒRIA</p>
      <p>CART({totalBoxes})</p>
    </nav>
  );
};
