import Constant from "../pages/constant/constant";
import apiUrl from "../apicontroller/apicontroller";
import WebReqUrl from "../web-req/web-req";
import axios from "axios";
import { addCartRequest, getCartListRequest, getProductListRequest, removeCartItemRequest, searchProductListRequest } from "../modelController";

export default {
  /**
   * 
   * @param data : get product data
   */
  getProductData: async function (data: getProductListRequest) {
    return axios.post(
      Constant.apiUrl + apiUrl.storeProductController.getProduct,
      data
    );
  },

  /**
   * 
   * @param data : add to cart 
   */
  addtocart: async function (data: addCartRequest) {
    return WebReqUrl.post(
      Constant.apiUrl + apiUrl.storeProductController.addtocart,
      data,
      false
    );
  },

  /**
   * 
   * @param data : get cart all data
   */
  getCartAllData: async function (data: getCartListRequest) {
    return WebReqUrl.post(
      Constant.apiUrl + apiUrl.storeProductController.getcartdata,
      data,
      false
    );
  },

  /**
   * 
   * @param data :  update cart data
   * @param id : product id
   */
  updatecart: async function (data: any, id: any) {
    return WebReqUrl.put(
      Constant.apiUrl + apiUrl.storeProductController.updatecart + id,
      data,
      false
    );
  },

  /**
   * 
   * @param data : remove item from cart
   */
  removeProductFromCart: async function (data: removeCartItemRequest) {
    let queryString = "";
    data.id.map((id: any, index: number) => {
      queryString = queryString + `&id=${id}`;
    });
    return await axios.delete(
      Constant.apiUrl +
        apiUrl.storeProductController.deleteData +
        `?moduleName=${data.moduleName}${queryString}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  },

  /**
   * 
   * @param data : get search product
   */
  getSearchProductData: async function (data: searchProductListRequest) {
    console.log("data",data);
    return axios.get(
      Constant.apiUrl + apiUrl.storeProductController.getsearchproduct + `?name=${data.name}&merchantid=${data.merchantid}`
    );
  },
  
};
