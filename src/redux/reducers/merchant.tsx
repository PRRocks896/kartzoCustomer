import * as ACTION from "../constant/constant";

const initialState = {
  merchant: "",
  locationdata: "",
};

/**
 * 
 * @param state : intial state
 * @param action : action response
 */
const merchant = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION.merchant.GET_MERCHANT_REQUEST:
      return {
        ...state,
      };
    case ACTION.merchant.GET_MERCHANT_SUCCESS:
      return {
        ...state,
        merchant: action.merchantdata,
      };
    case ACTION.merchant.GET_MERCHANT_FAILURE:
      return {
        ...state,
        merchant: {},
        error: action.error,
      };

    case ACTION.location.GET_LOCATION_REQUEST:
      return {
        ...state,
      };
    case ACTION.location.GET_LOCATION_SUCCESS:
      return {
        ...state,
        locationdata: action.locationdata,
      };
    case ACTION.location.GET_LOCATION_FAILURE:
      return {
        ...state,
        locationdata: {},
        error: action.error,
      };

    default:
      return state;
  }
};

export default merchant;
