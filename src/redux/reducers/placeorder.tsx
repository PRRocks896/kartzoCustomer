import * as ACTION from "../index";

/** intial state */
const initialState = {
  addressdata: "",
  addaddress: "",
  getaddressdata: "",
  deletedata: "",
  getcarddata:""
};

/**
 * 
 * @param state : intial state
 * @param action : action response
 */
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

    case ACTION.placeOrder.EDIT_ADDRESS_REQUEST:
      return {
        ...state,
      };
    case ACTION.placeOrder.EDIT_ADDRESS_SUCCESS:
      return {
        ...state,
        getaddressdata: action.getaddressbyid,
      };
    case ACTION.placeOrder.EDIT_ADDRESS_FAILURE:
      return {
        ...state,
        getaddressdata: {},
        error: action.error,
      };

    case ACTION.placeOrder.DELETE_ADDRESS_REQUEST:
      return {
        ...state,
      };
    case ACTION.placeOrder.DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        deletedata: action.deleteaddress,
      };
    case ACTION.placeOrder.DELETE_ADDRESS_FAILURE:
      return {
        ...state,
        deletedata: {},
        error: action.error,
      };

      case ACTION.card.ADD_CARD_REQUEST:
        return {
          ...state,
        };
      case ACTION.card.ADD_CARD_SUCCESS:
        return {
          ...state
        };
      case ACTION.card.ADD_CARD_FAILURE:
        return {
          ...state,
          error: action.error,
        };

        case ACTION.card.GET_CARD_REQUEST:
          return {
            ...state,
          };
        case ACTION.card.GET_CARD_SUCCESS:
          return {
            ...state,
            getcarddata: action.getcard
          };
        case ACTION.card.GET_CARD_FAILURE:
          return {
            ...state,
            getcarddata: {},
            error: action.error,
          };

          case ACTION.card.EDIT_CARD_REQUEST:
            return {
              ...state,
            };
          case ACTION.card.EDIT_CARD_SUCCESS:
            return {
              ...state
            };
          case ACTION.card.EDIT_CARD_FAILURE:
            return {
              ...state,
              error: action.error,
            };

    default:
      return state;
  }
};

export default placeOrder;
