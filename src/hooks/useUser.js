import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useUser = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);

  return { user, setUser, loading, setLoading };
};

export default useUser;
