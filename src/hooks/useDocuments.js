import { useContext } from "react";
import { DocumentsContext } from "../context/DocumentsContext";

const useDocuments = () => {
  const { state, dispatch } = useContext(DocumentsContext);
  const { fetchingDocs, documents } = state;

  return { dispatch, fetchingDocs, documents };
};

export default useDocuments;
