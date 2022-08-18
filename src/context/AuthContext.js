import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  return <AuthContext value={{ user, setUser }}>{children}</AuthContext>;
};

export default AuthContextProvider;
