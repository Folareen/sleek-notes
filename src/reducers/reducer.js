import { ACTIONS } from "./actions";
export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_NOTES:
      return {
        ...state,
        fetchingNotes: true,
        notes: action.payload,
      };
    case ACTIONS.FETCHED_NOTES:
      return {
        ...state,
        fetchingNotes: false,
      };
    case ACTIONS.ERROR_OCCURRED:
      return {
        ...state,
        error: true,
      };
    case ACTIONS.CREATE_NEW_NOTE:
      return {
        ...state,
        notes: action.payload,
        error: false,
      };
    case ACTIONS.DELETE_NOTE:
      return {
        ...state,
        notes: action.payload,
        deletedNote: true,
      };
    case ACTIONS.UPDATE_NOTE:
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
}
