import * as ACTION from "../index";
import { StoreAPI } from "../../service/index";
import { showSuccess } from "../../pages/utils";

/** Product service */
export const productService = {
  getProductsData,
  addToCart,
  getcartData,
  updateToCart,
  removeProductFromCart,
  getSearchProduct,
  getProductDataWithSearching,
  reOrder,
  cancelOrderData,
  addRating,
  getRatingCount
};

/**
 *
 * @param data : get product data
 */
export function getProductsData(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.getProductData(data)
      .then(async (productdata: any) => {
        // console.log("productdata", productdata);
        if (productdata.status === 200) {
          dispatch(success(await productdata.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(productdata: any) {
    return { type: ACTION.product.GET_PRODUCT_REQUEST, productdata };
  }
  function success(productdata: any) {
    return { type: ACTION.product.GET_PRODUCT_SUCCESS, productdata };
  }
  function failure(error: any) {
    return { type: ACTION.product.GET_PRODUCT_FAILURE, error };
  }
}

/**
 *
 * @param data : add to cart
 */
function addToCart(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.addtocart(data)
      .then(async (addtocartdata: any) => {
        // console.log("addtocartdata", addtocartdata);
        if (addtocartdata.status === 200) {
          dispatch(success(await addtocartdata));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(addtocartdata: any) {
    return { type: ACTION.product.ADD_CART_REQUEST, addtocartdata };
  }
  function success(addtocartdata: any) {
    return { type: ACTION.product.ADD_CART_SUCCESS, addtocartdata };
  }
  function failure(error: any) {
    return { type: ACTION.product.ADD_CART_FAILURE, error };
  }
}

/**
 *
 * @param data : get cart data
 */
function getcartData(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.getCartAllData(data)
      .then(async (getcartData: any) => {
        // console.log("getcartData", getcartData);
        if (getcartData.status === 200) {
          dispatch(success(await getcartData.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(getcartData: any) {
    return { type: ACTION.product.GET_CART_REQUEST, getcartData };
  }
  function success(getcartData: any) {
    return { type: ACTION.product.GET_CART_SUCCESS, getcartData };
  }
  function failure(error: any) {
    return { type: ACTION.product.GET_CART_FAILURE, error };
  }
}

/**
 *
 * @param data : update cart data
 * @param id : update product id
 */
function updateToCart(data: any, id: any) {
  return (dispatch: any) => {
    dispatch(request({ data, id }));

    StoreAPI.updatecart(data, id)
      .then(async (updateToCart: any) => {
        console.log("updateToCart", updateToCart);
        if (updateToCart.status === 200) {
          dispatch(success(await updateToCart));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(updateToCart: any) {
    return { type: ACTION.product.UPDATE_CART_REQUEST, updateToCart };
  }
  function success(updateToCart: any) {
    return { type: ACTION.product.UPDATE_CART_SUCCESS, updateToCart };
  }
  function failure(error: any) {
    return { type: ACTION.product.UPDATE_CART_FAILURE, error };
  }
}

/**
 *
 * @param data : reomove product from cart
 */
function removeProductFromCart(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.removeProductFromCart(data)
      .then(async (removedata: any) => {
        // console.log("removedata", removedata);
        if (removedata.status === 200) {
          dispatch(success(await removedata.data));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(removedata: any) {
    return { type: ACTION.product.DELETE_CART_REQUEST, removedata };
  }
  function success(removedata: any) {
    return { type: ACTION.product.DELETE_CART_SUCCESS, removedata };
  }
  function failure(error: any) {
    return { type: ACTION.product.DELETE_CART_FAILURE, error };
  }
}

/**
 *
 * @param data : get search product
 */
function getSearchProduct(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.getSearchProductData(data)
      .then(async (searchdata: any) => {
        // console.log("searchdata", searchdata);
        if (searchdata.status === 200) {
          dispatch(success(await searchdata.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(searchdata: any) {
    return { type: ACTION.product.SEARCH_PRODUCT_REQUEST, searchdata };
  }
  function success(searchdata: any) {
    return { type: ACTION.product.SEARCH_PRODUCT_SUCCESS, searchdata };
  }
  function failure(error: any) {
    return { type: ACTION.product.SEARCH_PRODUCT_FAILURE, error };
  }
}

/**
 *
 * @param data : get product with searching
 */
function getProductDataWithSearching(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.getProductData(data)
      .then(async (searchdatadetail: any) => {
        // console.log("searchdatadetail", searchdatadetail);
        if (searchdatadetail.status === 200) {
          dispatch(success(await searchdatadetail.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(searchdatadetail: any) {
    return {
      type: ACTION.product.SEARCH_PRODUCT_DETAILS_REQUEST,
      searchdatadetail,
    };
  }
  function success(searchdatadetail: any) {
    return {
      type: ACTION.product.SEARCH_PRODUCT_DETAILS_SUCCESS,
      searchdatadetail,
    };
  }
  function failure(error: any) {
    return { type: ACTION.product.SEARCH_PRODUCT_DETAILS_FAILURE, error };
  }
}

/**
 *
 * @param data : get product with searching
 */
function reOrder(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.reOrder(data)
      .then(async (reOrder: any) => {
        // console.log("reOrder", reOrder);
        if (reOrder.status === 200) {
          dispatch(success(await reOrder.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(reOrder: any) {
    return { type: ACTION.product.ADD_REORDER_REQUEST, reOrder };
  }
  function success(reOrder: any) {
    return { type: ACTION.product.ADD_REORDER_SUCCESS, reOrder };
  }
  function failure(error: any) {
    return { type: ACTION.product.ADD_REORDER_FAILURE, error };
  }
}

/**
 *
 * @param data : get product with searching
 */
function cancelOrderData(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.cancelOrder(data)
      .then(async (cancelorder: any) => {
        console.log("cancelorder", cancelorder);
        if (cancelorder.status === 200) {
          showSuccess(cancelorder.message);
          dispatch(success(await cancelorder));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(cancelorder: any) {
    return { type: ACTION.product.CANCEL_ORDER_REQUEST, cancelorder };
  }
  function success(cancelorder: any) {
    return { type: ACTION.product.CANCEL_ORDER_SUCCESS, cancelorder };
  }
  function failure(error: any) {
    return { type: ACTION.product.CANCEL_ORDER_FAILURE, error };
  }
}

/**
 *
 * @param data : get product with searching
 */
function addRating(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.addRatingData(data)
      .then(async (addrating: any) => {
        console.log("addrating", addrating);
        if (addrating.status === 200) {
          dispatch(success(await addrating));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(addrating: any) {
    return { type: ACTION.product.ADD_RATING_REQUEST, addrating };
  }
  function success(addrating: any) {
    return { type: ACTION.product.ADD_RATING_SUCCESS, addrating };
  }
  function failure(error: any) {
    return { type: ACTION.product.ADD_RATING_FAILURE, error };
  }
}

/**
 *
 * @param data : get product with searching
 */
function getRatingCount(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.getRatingCountData(data)
      .then(async (getratingdata: any) => {
        console.log("getratingdata", getratingdata);
        if (getratingdata.status === 200) {
          dispatch(success(await getratingdata));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(getratingdata: any) {
    return { type: ACTION.product.GET_RATING_DATA_REQUEST, getratingdata };
  }
  function success(getratingdata: any) {
    return { type: ACTION.product.GET_RATING_DATA_SUCCESS, getratingdata };
  }
  function failure(error: any) {
    return { type: ACTION.product.GET_RATING_DATA_FAILURE, error };
  }
}


