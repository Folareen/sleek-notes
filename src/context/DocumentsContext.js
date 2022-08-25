import { createContext, useState, useEffect } from "react";
import getAllDocuments from "../utils/getAllDocuments";
import useUser from "../hooks/useUser";

export const DocumentsContext = createContext();

const DocumentsContextProvider = ({ children }) => {
  const [documents, setDocuments] = useState();
  const [fetchingDocs, setFetchingDocs] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    (async function () {
      setDocuments(await getAllDocuments(user));
      setFetchingDocs(false);
    })();

    console.log(getAllDocuments(user));
  }, [user]);

  return (
    <DocumentsContext.Provider
      value={{ documents, setDocuments, fetchingDocs, setFetchingDocs }}
    >
      {children}
    </DocumentsContext.Provider>
  );
};

export default DocumentsContextProvider;
