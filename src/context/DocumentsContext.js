import { createContext, useEffect, useReducer } from "react";
import getAllDocuments from "../utils/getAllDocuments";
import useUser from "../hooks/useUser";
import reducer from "../reducers/reducer";
import { initialState } from "../reducers/initialState";
import { ACTIONS } from "../reducers/actions";

export const DocumentsContext = createContext();

const DocumentsContextProvider = ({ children }) => {
  const { user } = useUser();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async function () {
      try {
        dispatch({
          type: ACTIONS.FETCH_DOCS,
          payload: await getAllDocuments(user),
        });
      } catch {
        dispatch({
          type: ACTIONS.ERROR_OCCURRED,
        });
      } finally {
        dispatch({ type: ACTIONS.FETCHED_DOCS });
      }
    })();
  }, [user]);

  return (
    <DocumentsContext.Provider value={{ state, dispatch }}>
      {children}
    </DocumentsContext.Provider>
  );
};

export default DocumentsContextProvider;
