import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

const useActivity = () => {
  return useContext(ActivityContext);
};

export default useActivity;
