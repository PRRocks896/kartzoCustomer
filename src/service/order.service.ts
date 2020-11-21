import Constant from "../pages/constant/constant";
import apiUrl from "../apicontroller/apicontroller";
import WebReqUrl from "../web-req/web-req";
import axios from "axios";
import { getAddressListRequest } from "../modelController";

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
};
