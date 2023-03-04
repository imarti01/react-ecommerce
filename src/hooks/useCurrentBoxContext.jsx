import { useContext } from "react";
import { CurrentBoxContext } from "../context/CurrentBoxContext/CurrentBoxContext";

export const useCurrentBoxContext = () => useContext(CurrentBoxContext);
