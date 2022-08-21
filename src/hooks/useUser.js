import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useUser = () => {
  const { user, setUser } = useContext(AuthContext);

  return { user, setUser };
};

export default useUser;
