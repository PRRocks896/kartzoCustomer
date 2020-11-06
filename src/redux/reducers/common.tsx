import * as ACTION from "../index";

const initialState = {
  footerdata: ""
};

/**
 * 
 * @param state : intial state
 * @param action : action response
 */
const footer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION.common.GET_FOOTER_REQUEST:
      return {
        ...state,
      };
    case ACTION.common.GET_FOOTER_SUCCESS:
      return {
        ...state,
        footerdata: action.footerdata
      };
    case ACTION.common.GET_FOOTER_FAILURE:
      return {
        ...state,
        footerdata: {},
        error: action.error,
      };

    default:
      return state;
  }
};

export default footer;
