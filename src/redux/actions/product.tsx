import * as ACTION from "../constant/constant";
import {StoreAPI} from "../../service/index";
import { showSuccess } from "../../pages/utils";
// import { showSuccess, showError } from "../../pages/utils/index";

export const productService = {
    getProductsData,
    addToCart,
    getcartData,
    updateToCart
};

/** Get Category Request */
function getProductsData(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    StoreAPI
      .getProductData(data)
      .then((productdata:any) => {
        console.log("productdata", productdata);
        if (productdata.status === 200) {
          dispatch(success(productdata.data.resultObject));
        }
      })
      .catch((err:any) => {
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

    StoreAPI
      .addtocart(data)
      .then((addtocartdata:any) => {
        console.log("addtocartdata", addtocartdata);
        if (addtocartdata.status === 200) {
          dispatch(success(addtocartdata.data.resultObject));
        }
      })
      .catch((err:any) => {
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

    StoreAPI
      .getCartAllData(data)
      .then((getcartData:any) => {
        console.log("getcartData", getcartData);
        if (getcartData.status === 200) {
          dispatch(success(getcartData.resultObject));
        }
      })
      .catch((err:any) => {
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

function updateToCart(data: any,id:any) {
  return (dispatch: any) => {
    dispatch(request({ data,id }));

    StoreAPI
      .updatecart(data,id)
      .then((updateToCart:any) => {
        console.log("updateToCart", updateToCart);
        if (updateToCart.status === 200) {
          dispatch(success(updateToCart.data.resultObject));
        }
      })
      .catch((err:any) => {
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
