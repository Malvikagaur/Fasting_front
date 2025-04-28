import { useContext } from "react";
import { BmiContext } from "../context/BmiContext";

const useBMI = () => {
  return useContext(BmiContext);
};

export default useBMI;
