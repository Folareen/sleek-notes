import { useContext } from "react";
import { DocumentsContext } from "../context/DocumentsContext";

const useDocuments = () => {
  const { documents, setDocuments } = useContext(DocumentsContext);

  return { documents, setDocuments };
};

export default useDocuments;
