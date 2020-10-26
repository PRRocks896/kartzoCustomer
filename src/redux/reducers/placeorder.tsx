import * as ACTION from "../constant/constant";

const initialState = {
  addressdata: "",
  addaddress:""
};

const placeOrder = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION.placeOrder.GET_ADDRESS_REQUEST:
      return {
        ...state,
      };
    case ACTION.placeOrder.GET_ADDRESS_SUCCESS:
      return {
        ...state,
        addressdata: action.addressdata,
      };
    case ACTION.placeOrder.GET_ADDRESS_FAILURE:
      return {
        ...state,
        addressdata: {},
        error: action.error,
      };

      case ACTION.placeOrder.ADD_ADDRESS_REQUEST:
      return {
        ...state,
      };
    case ACTION.placeOrder.ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        addaddress: action.addaddress,
      };
    case ACTION.placeOrder.ADD_ADDRESS_FAILURE:
      return {
        ...state,
        addaddress: {},
        error: action.error,
      };

    default:
      return state;
  }
};

export default placeOrder;
