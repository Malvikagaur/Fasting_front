import { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";

const useProgress = () => {
  return useContext(ProgressContext);
};

export default useProgress;
