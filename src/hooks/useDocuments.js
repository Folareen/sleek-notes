import { useContext, useEffect } from "react";
import { DocumentsContext } from "../context/DocumentsContext";
import { ACTIONS } from "../reducers/actions";

const useDocuments = () => {
  const { state, dispatch } = useContext(DocumentsContext);
  const { fetchingDocs, documents, error, deletedDocument, updatedDocument } =
    state;

  useEffect(() => {
    if (documents?.length < 1) {
      dispatch({
        type: ACTIONS.ERROR_OCCURRED,
      });
    }
    // eslint-disable-next-line
  }, [documents]);

  return {
    dispatch,
    fetchingDocs,
    documents,
    error,
    deletedDocument,
    updatedDocument,
  };
};

export default useDocuments;
