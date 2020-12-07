import Constant from "../pages/constant/constant";
import apiUrl from "../apicontroller/apicontroller";
import WebReqUrl from "../web-req/web-req";
import axios from "axios";
// import * as btoa from 'btoa';
import { getAddressListRequest } from "../modelController";
const btoa = require('btoa')

export default {
  /**
   *
   * @param data : get order data
   */
  getOrderListData: async function (data: getAddressListRequest) {
    return WebReqUrl.post(
      Constant.apiUrl + apiUrl.orderController.getorder,
      data,
      false
    );
  },

    /**
   *
   * @param data : get order data
   */
  getOrderData: async function (data: any) {
      // const authMain = {
      //   Username: 'rzp_test_WnyFW6axxBffc1',
      //   Password: 'ZpQQylsVyOUcfejR53v12vVC'
      // }
       const config = {     
            headers: { 
                Authorization: 'Basic ' + btoa('rzp_test_WnyFW6axxBffc1 : ZpQQylsVyOUcfejR53v12vVC'),
                'Access-Control-Allow-Origin': true,
                "Content-Type": "application/json",

            }
        }
        return await axios.post('https://api.razorpay.com/v1/orders',data,config);
  }
};
