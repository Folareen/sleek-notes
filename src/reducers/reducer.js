import { ACTIONS } from "./actions";
export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_DOCS:
      return {
        ...state,
        fetchingDocs: true,
        documents: action.payload,
      };
    case ACTIONS.FETCHED_DOCS:
      return {
        ...state,
        fetchingDocs: false,
      };
    case ACTIONS.ERROR_OCCURRED:
      return {
        ...state,
        error: true,
      };
    case ACTIONS.CREATE_NEW_DOC:
      return {
        ...state,
        documents: action.payload,
        error: false,
      };
    case ACTIONS.DELETE_DOC:
      return {
        ...state,
        documents: action.payload[1],
        deletedDocument: action.payload[0],
      };
    case ACTIONS.DELETED_DOC:
      return {
        ...state,
        deletedDocument: true,
      };
    case ACTIONS.CLOSE_DELETION_ALERT:
      return {
        ...state,
        deletedDocument: false,
      };

    default:
      return state;
  }
}
