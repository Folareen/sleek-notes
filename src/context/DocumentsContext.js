import { createContext, useState, useEffect } from "react";
import getAllDocuments from "../utils/getAllDocuments";
import useUser from "../hooks/useUser";

export const DocumentsContext = createContext();

const DocumentsContextProvider = ({ children }) => {
  const [documents, setDocuments] = useState();
  const { user } = useUser();

  useEffect(() => {
    setDocuments(getAllDocuments(user.uid));
  }, []);

  return (
    <DocumentsContext.Provider value={{ documents, setDocuments }}>
      {children}
    </DocumentsContext.Provider>
  );
};

export default DocumentsContextProvider;
