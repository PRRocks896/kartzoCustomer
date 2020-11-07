import * as ACTION from "../index";

/** intial state */
const initialState = {
  searchaddressdata: "",
};

/**
 * 
 * @param state : intial state
 * @param action : action response
 */
const sendpackage = (state = initialState, action: any) => {
  switch (action.type) {

    case ACTION.sendpackage.GET_SEARCH_ADDRESS_REQUEST:
      return {
        ...state,
      };
    case ACTION.sendpackage.GET_SEARCH_ADDRESS_SUCCESS:
      return {
        ...state,
        searchaddressdata: action.searchdata,
      };
    case ACTION.sendpackage.GET_SEARCH_ADDRESS_FAILURE:
      return {
        ...state,
        searchaddressdata: {},
        error: action.error,
      };

    default:
      return state;
  }
};

export default sendpackage;
