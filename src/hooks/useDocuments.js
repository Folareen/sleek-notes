import { useContext, useEffect } from "react";
import { DocumentsContext } from "../context/DocumentsContext";
import { ACTIONS } from "../reducers/actions";

const useDocuments = () => {
  const { state, dispatch } = useContext(DocumentsContext);
  const { fetchingDocs, documents, error, deletedDocument } = state;

  useEffect(() => {
    if (documents?.length < 1) {
      dispatch({
        type: ACTIONS.ERROR_OCCURRED,
      });
    }
  }, [documents]);

  return { dispatch, fetchingDocs, documents, error, deletedDocument };
};

export default useDocuments;
