import { createContext, useEffect, useReducer } from "react";
import getAllNotes from "../utils/getAllNotes";
import useUser from "../hooks/useUser";
import reducer from "../reducers/reducer";
import { initialState } from "../reducers/initialState";
import { ACTIONS } from "../reducers/actions";

export const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const { user } = useUser();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async function () {
      try {
        dispatch({
          type: ACTIONS.FETCH_NOTES,
          payload: await getAllNotes(user),
        });
      } catch {
        dispatch({
          type: ACTIONS.ERROR_OCCURRED,
        });
      } finally {
        dispatch({ type: ACTIONS.FETCHED_NOTES });
      }
    })();
  }, [user]);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
