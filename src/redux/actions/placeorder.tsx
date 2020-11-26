import * as ACTION from "../index";
import { PlaceOrderAPI } from "../../service/index";

/** Place order service */
export const placeOrderService = {
  getAddressList,
  addAddress,
  updateAddress,
  deleteAddress,
  addCard,
  getcard,
  updateCard,
  deleteCard,
  createOrder
};

/**
 * 
 * @param data : get address data response
 */
function getAddressList(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.getAddressListData(data)
      .then(async (addressdata: any) => {
        // console.log("addressdata", addressdata);
        if (addressdata.status === 200) {
          dispatch(success(await addressdata.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(addressdata: any) {
    return { type: ACTION.placeOrder.GET_ADDRESS_REQUEST, addressdata };
  }
  function success(addressdata: any) {
    return { type: ACTION.placeOrder.GET_ADDRESS_SUCCESS, addressdata };
  }
  function failure(error: any) {
    return { type: ACTION.placeOrder.GET_ADDRESS_FAILURE, error };
  }
}

/**
 * 
 * @param data : add address
 */
function addAddress(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.addAddressData(data)
      .then(async (addaddress: any) => {
        // console.log("addaddress", addaddress);
        if (addaddress.status === 200) {
          dispatch(success(await addaddress.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(addaddress: any) {
    return { type: ACTION.placeOrder.ADD_ADDRESS_REQUEST, addaddress };
  }
  function success(addaddress: any) {
    return { type: ACTION.placeOrder.ADD_ADDRESS_SUCCESS, addaddress };
  }
  function failure(error: any) {
    return { type: ACTION.placeOrder.ADD_ADDRESS_FAILURE, error };
  }
}

/**
 * 
 * @param data : update address
 */
function updateAddress(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.updateAddress(data)
      .then(async (updateaddress: any) => {
        // console.log("updateaddress", updateaddress);
        if (updateaddress.status === 200) {
          dispatch(success(await updateaddress.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(updateaddress: any) {
    return { type: ACTION.placeOrder.EDIT_ADDRESS_REQUEST, updateaddress };
  }
  function success(updateaddress: any) {
    return { type: ACTION.placeOrder.EDIT_ADDRESS_SUCCESS, updateaddress };
  }
  function failure(error: any) {
    return { type: ACTION.placeOrder.EDIT_ADDRESS_FAILURE, error };
  }
}

/**
 * 
 * @param data : delete address
 */
function deleteAddress(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.deleteAddress(data)
      .then(async (deleteaddress: any) => {
        // console.log("deleteaddress", deleteaddress);
        if (deleteaddress.status === 200) {
          dispatch(success(await deleteaddress.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(deleteaddress: any) {
    return { type: ACTION.placeOrder.DELETE_ADDRESS_REQUEST, deleteaddress };
  }
  function success(deleteaddress: any) {
    return { type: ACTION.placeOrder.DELETE_ADDRESS_SUCCESS, deleteaddress };
  }
  function failure(error: any) {
    return { type: ACTION.placeOrder.DELETE_ADDRESS_FAILURE, error };
  }
}

/**
 * 
 * @param data : add card 
 */
function addCard(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.addCardData(data)
      .then(async (addcard: any) => {
        // console.log("addcard", addcard);
        if (addcard.status === 200) {
          dispatch(success(await addcard.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(addcard: any) {
    return { type: ACTION.card.ADD_CARD_REQUEST, addcard };
  }
  function success(addcard: any) {
    return { type: ACTION.card.ADD_CARD_SUCCESS, addcard };
  }
  function failure(error: any) {
    return { type: ACTION.card.ADD_CARD_FAILURE, error };
  }
}

/**
 * 
 * @param data : get card details
 */
function getcard(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.getcarddata(data)
      .then(async (getcard: any) => {
        // console.log("getcard", getcard);
        if (getcard.status === 200) {
          dispatch(success(await getcard.resultObject.data));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(getcard: any) {
    return { type: ACTION.card.GET_CARD_REQUEST, getcard };
  }
  function success(getcard: any) {
    return { type: ACTION.card.GET_CARD_SUCCESS, getcard };
  }
  function failure(error: any) {
    return { type: ACTION.card.GET_CARD_FAILURE, error };
  }
}

/**
 * 
 * @param data : update card 
 */
function updateCard(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.updateCardData(data)
      .then(async (updatecard: any) => {
        // console.log("updatecard", updatecard);
        if (updatecard.status === 200) {
          dispatch(success(await updatecard.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(updatecard: any) {
    return { type: ACTION.card.EDIT_CARD_REQUEST, updatecard };
  }
  function success(updatecard: any) {
    return { type: ACTION.card.EDIT_CARD_SUCCESS, updatecard };
  }
  function failure(error: any) {
    return { type: ACTION.card.EDIT_CARD_FAILURE, error };
  }
}

/**
 * 
 * @param data : delete card
 */
function deleteCard(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.deletecard(data)
      .then(async (deletecard: any) => {
        // console.log("deletecard", deletecard);
        if (deletecard.status === 200) {
          dispatch(success(await deletecard.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(deletecard: any) {
    return { type: ACTION.card.DELETE_CARD_REQUEST, deletecard };
  }
  function success(deletecard: any) {
    return { type: ACTION.card.DELETE_CARD_SUCCESS, deletecard };
  }
  function failure(error: any) {
    return { type: ACTION.card.DELETE_CARD_FAILURE, error };
  }
}

/**
 * 
 * @param data : delete card
 */
function createOrder(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.createorder(data)
      .then(async (orderdata: any) => {
        console.log("orderdata", orderdata);
        if (orderdata.status === 200) {
          dispatch(success(await orderdata.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(orderdata: any) {
    return { type: ACTION.order.CREATE_ORDER_REQUEST, orderdata };
  }
  function success(orderdata: any) {
    return { type: ACTION.order.CREATE_ORDER_SUCCESS, orderdata };
  }
  function failure(error: any) {
    return { type: ACTION.order.CREATE_ORDER_FAILURE, error };
  }
}

