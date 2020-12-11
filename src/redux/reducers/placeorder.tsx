import * as ACTION from "../index";

/** intial state */
const initialState = {
  addressdata: "",
  addaddress: "",
  getaddressdata: "",
  deletedata: "",
  getcarddata:"",
  applycoupon:"",
  getcouponapply:"",
  removecoupon:"",
  orderdata:"",
  updateaddress:"",
  addcard:"",
  deletecard:""
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
        updateaddress: action.updateaddress,
      };
    case ACTION.placeOrder.EDIT_ADDRESS_FAILURE:
      return {
        ...state,
        updateaddress: {},
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
          ...state,
          addcard:action.addcard
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

            case ACTION.order.APPLY_COUPON_REQUEST:
              return {
                ...state,
              };
            case ACTION.order.APPLY_COUPON_SUCCESS:
              return {
                ...state,
                applycoupon: action.applyCoupon
              };
            case ACTION.order.APPLY_COUPON_FAILURE:
              return {
                ...state,
                error: action.error,
              };

              case ACTION.order.GET_COUPON_APPLY_REQUEST:
                return {
                  ...state,
                };
              case ACTION.order.GET_COUPON_APPLY_SUCCESS:
                return {
                  ...state,
                  getcouponapply: action.getApplyCoupon
                };
              case ACTION.order.GET_COUPON_APPLY_FAILURE:
                return {
                  ...state,
                  error: action.error,
                };

                case ACTION.order.REMOVE_APPLY_COUPON_REQUEST:
                  return {
                    ...state,
                  };
                case ACTION.order.REMOVE_APPLY_COUPON_SUCCESS:
                  return {
                    ...state,
                    removecoupon: action.removeApplyCoupon
                  };
                case ACTION.order.REMOVE_APPLY_COUPON_FAILURE:
                  return {
                    ...state,
                    error: action.error,
                  };


                  case ACTION.order.CREATE_ORDER_REQUEST:
                    return {
                      ...state,
                    };
                  case ACTION.order.CREATE_ORDER_SUCCESS:
                    return {
                      ...state,
                      orderdata: action.orderdata
                    };
                  case ACTION.order.CREATE_ORDER_FAILURE:
                    return {
                      ...state,
                      error: action.error,
                    };

                    case ACTION.card.DELETE_CARD_REQUEST:
                      return {
                        ...state,
                      };
                    case ACTION.card.DELETE_CARD_SUCCESS:
                      return {
                        ...state,
                        deletecard: action.deletecard
                      };
                    case ACTION.card.DELETE_CARD_FAILURE:
                      return {
                        ...state,
                        error: action.error,
                      };
    
  

    default:
      return state;
  }
};

export default placeOrder;
