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
    case ACTIONS.CREATE_NEW_DOC:
      return {
        ...state,
        documents: action.payload,
      };

    default:
      return state;
  }
}
