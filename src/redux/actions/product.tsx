import * as ACTION from "../constant/constant";
import { StoreAPI } from "../../service/index";
import { showSuccess } from "../../pages/utils";
// import { showSuccess, showError } from "../../pages/utils/index";

export const productService = {
  getProductsData,
  addToCart,
  getcartData,
  updateToCart,
  removeProductFromCart,
  getSearchProduct,
  getProductDataWithSearching
};

/** Get Category Request */
function getProductsData(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.getProductData(data)
      .then((productdata: any) => {
        // console.log("productdata", productdata);
        if (productdata.status === 200) {
          dispatch(success(productdata.data.resultObject));
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

function addToCart(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.addtocart(data)
      .then((addtocartdata: any) => {
        // console.log("addtocartdata", addtocartdata);
        if (addtocartdata.status === 200) {
          dispatch(success(addtocartdata.data.resultObject));
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

function getcartData(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.getCartAllData(data)
      .then((getcartData: any) => {
        // console.log("getcartData", getcartData);
        if (getcartData.status === 200) {
          dispatch(success(getcartData.resultObject));
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

function updateToCart(data: any, id: any) {
  return (dispatch: any) => {
    dispatch(request({ data, id }));

    StoreAPI.updatecart(data, id)
      .then((updateToCart: any) => {
        // console.log("updateToCart", updateToCart);
        if (updateToCart.status === 200) {
          dispatch(success(updateToCart.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(updateToCart: any) {
    return { type: ACTION.product.ADD_CART_REQUEST, updateToCart };
  }
  function success(updateToCart: any) {
    return { type: ACTION.product.ADD_CART_SUCCESS, updateToCart };
  }
  function failure(error: any) {
    return { type: ACTION.product.ADD_CART_FAILURE, error };
  }
}

function removeProductFromCart(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.removeProductFromCart(data)
      .then((removedata: any) => {
        // console.log("removedata", removedata);
        if (removedata.status === 200) {
          dispatch(success(removedata.data.resultObject));
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

function getSearchProduct(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.getSearchProductData(data)
      .then((searchdata: any) => {
        // console.log("searchdata", searchdata);
        if (searchdata.status === 200) {
          dispatch(success(searchdata.data.resultObject));
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

function getProductDataWithSearching(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI.getProductData(data)
      .then((searchdatadetail: any) => {
        console.log("searchdatadetail", searchdatadetail);
        if (searchdatadetail.status === 200) {
          dispatch(success(searchdatadetail.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(searchdatadetail: any) {
    return { type: ACTION.product.SEARCH_PRODUCT_DETAILS_REQUEST, searchdatadetail };
  }
  function success(searchdatadetail: any) {
    return { type: ACTION.product.SEARCH_PRODUCT_DETAILS_SUCCESS, searchdatadetail };
  }
  function failure(error: any) {
    return { type: ACTION.product.SEARCH_PRODUCT_DETAILS_FAILURE, error };
  }
}
