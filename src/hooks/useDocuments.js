import { useContext } from "react";
import { DocumentsContext } from "../context/DocumentsContext";

const useDocuments = () => {
  const { state, dispatch } = useContext(DocumentsContext);
  const { fetchingDocs, documents, deletedDocument } = state;

  return { dispatch, fetchingDocs, documents, deletedDocument };
};

export default useDocuments;
