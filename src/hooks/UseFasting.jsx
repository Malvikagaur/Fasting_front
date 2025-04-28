import { useContext } from "react";
import { FastingContext } from "../context/FastingContext";

const useFasting = () => {
  return useContext(FastingContext);
};

export default useFasting;
