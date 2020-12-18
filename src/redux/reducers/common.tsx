import * as ACTION from "../index";

/** Intial state */
const initialState = {
  footerdata: "",
  footerlinkdata: "",
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
        footerdata: action.footerdata,
      };
    case ACTION.common.GET_FOOTER_FAILURE:
      return {
        ...state,
        footerdata: {},
        error: action.error,
      };

    case ACTION.common.GET_FOOTER_LINK_REQUEST:
      return {
        ...state,
      };
    case ACTION.common.GET_FOOTER_LINK_SUCCESS:
      return {
        ...state,
        footerlinkdata: action.footerlinkdata,
      };
    case ACTION.common.GET_FOOTER_LINK_FAILURE:
      return {
        ...state,
        footerlinkdata: {},
        error: action.error,
      };

    default:
      return state;
  }
};

export default footer;
