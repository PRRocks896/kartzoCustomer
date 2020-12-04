import Constant from "../pages/constant/constant";
import apiUrl from "../apicontroller/apicontroller";
import WebReqUrl from "../web-req/web-req";
import axios from "axios";
import {
  addAddressRequest,
  getAddressListRequest,
  removeCartItemRequest,
} from "../modelController";

export default {
  /**
   *
   * @param data : get address data
   */
  getAddressListData: async function (data: getAddressListRequest) {
    return WebReqUrl.post(
      Constant.apiUrl + apiUrl.addressController.getaddress,
      data,
      false
    );
  },

  /**
   *
   * @param data : add address
   */
  addAddressData: async function (data: addAddressRequest) {
    return WebReqUrl.post(
      Constant.apiUrl + apiUrl.addressController.addaddress,
      data,
      false
    );
  },

  /**
   *
   * @param data : get address details
   */
  getAddressByIdDetails: async function (data: any) {
    return WebReqUrl.put(
      Constant.apiUrl + apiUrl.addressController.getaddressbyid + data,
      {},
      false
    );
  },

  /**
   *
   * @param data : update address
   */
  updateAddress: async function (data: any) {
    return WebReqUrl.put(
      Constant.apiUrl + apiUrl.addressController.updateAddress + data.addressID,
      data,
      false
    );
  },

  /**
   *
   * @param data : delete address
   */
  deleteAddress: async function (data: removeCartItemRequest) {
    let queryString = "";
    data.id.map((id: any, index: number) => {
      queryString = queryString + `&id=${id}`;
    });
    return await WebReqUrl.delete(
      Constant.apiUrl +
        apiUrl.addressController.deleteData +
        `?moduleName=${data.moduleName}${queryString}`,
      false
    );
  },

  /**
   *
   * @param data : add card
   */
  addCardData: async function (data: any) {
    return WebReqUrl.post(
      Constant.apiUrl + apiUrl.cardController.addcard,
      data,
      false
    );
  },

  /**
   *
   * @param data : get card details
   */
  getcarddata: async function (data: any) {
    return WebReqUrl.post(
      Constant.apiUrl + apiUrl.cardController.getcard,
      data,
      false
    );
  },

  /**
   *
   * @param data : update card
   */
  updateCardData: async function (data: any) {
    return WebReqUrl.put(
      Constant.apiUrl + apiUrl.cardController.updatecard + data.cardID,
      data,
      false
    );
  },

  /**
   *
   * @param data : delete card
   */
  deletecard: async function (data: any) {
    let queryString = "";
    data.id.map((id: any, index: number) => {
      queryString = queryString + `&id=${id}`;
    });
    return await WebReqUrl.delete(
      Constant.apiUrl +
        apiUrl.cardController.deleteData +
        `?moduleName=${data.moduleName}${queryString}`,
      false
    );
  },

  /**
   *
   * @param data : create order
   */
  createorder: async function (data: any) {
    return WebReqUrl.post(
      Constant.apiUrl + apiUrl.orderController.createorder,
      data,
      false
    );
  },

    /**
   *
   * @param data : get coupon list
   */
  getCouponList: async function (data: any) {
    return WebReqUrl.post(
      Constant.apiUrlAdmin + apiUrl.orderController.getcoupon,
      data,
      true
    );
  },

      /**
   *
   * @param data : get coupon list
   */
  applyCoupon: async function (data: any) {
    return WebReqUrl.post(
      Constant.apiUrl + apiUrl.orderController.applycoupon,
      data,
      false
    );
  },

  
      /**
   *
   * @param data : get coupon list
   */
  getApplyCoupon: async function (data: any) {
    return WebReqUrl.get(
      Constant.apiUrl + apiUrl.orderController.getapplycoupon + data.userID,
      false
    );
  },

    
      /**
   *
   * @param data : get coupon list
   */
  removeAppliedCoupon: async function (data: any) {
    return await WebReqUrl.delete(
      Constant.apiUrl +
        apiUrl.storeProductController.deletecouponData +
        `?CouponId=${data.CouponId}&userid=${data.userid}`,false
    );
  }
};
