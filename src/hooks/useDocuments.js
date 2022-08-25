import { useContext } from "react";
import { DocumentsContext } from "../context/DocumentsContext";

const useDocuments = () => {
  const { documents, setDocuments, fetchingDocs, setFetchingDocs } =
    useContext(DocumentsContext);

  return { documents, setDocuments, fetchingDocs, setFetchingDocs };
};

export default useDocuments;
