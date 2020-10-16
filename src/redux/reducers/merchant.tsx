import * as ACTION from "../constant/constant";

const initialState = {
  merchant: ""
};

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

    default:
      return state;
  }
};

export default merchant;
