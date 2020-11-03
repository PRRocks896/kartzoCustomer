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
  searchAddressData: async function (data: any) {
    return WebReqUrl.get(
      Constant.apiUrl + apiUrl.packageController.getaddress + `?address=${data.address}`,
      false
    );
  },
};
