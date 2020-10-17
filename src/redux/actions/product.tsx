import * as ACTION from "../constant/constant";
import {StoreAPI} from "../../service/index";
// import { showSuccess, showError } from "../../pages/utils/index";

export const productService = {
    getProductsData
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
