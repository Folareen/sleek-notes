import { useContext, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";
import { ACTIONS } from "../reducers/actions";

const useNotes = () => {
  const { state, dispatch } = useContext(NotesContext);
  const { fetchingNotes, notes, error } = state;

  useEffect(() => {
    if (notes?.length < 1) {
      dispatch({
        type: ACTIONS.ERROR_OCCURRED,
      });
    }
    // eslint-disable-next-line
  }, [notes]);

  return {
    dispatch,
    fetchingNotes,
    notes,
    error,
  };
};

export default useNotes;
