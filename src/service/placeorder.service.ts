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
  getAddressListData: async function (data: getAddressListRequest) {
    return WebReqUrl.post(
      Constant.apiUrl + apiUrl.addressController.getaddress,
      data,
      false
    );
  },
  addAddressData: async function (data: addAddressRequest) {
    return WebReqUrl.post(
      Constant.apiUrl + apiUrl.addressController.addaddress,
      data,
      false
    );
  },
  getAddressByIdDetails: async function (data: any) {
    return WebReqUrl.put(
      Constant.apiUrl + apiUrl.addressController.getaddressbyid + data,
      {},
      false
    );
  },
  updateAddress: async function (data: any) {
    return WebReqUrl.put(
      Constant.apiUrl + apiUrl.addressController.updateAddress + data.addressID,
      data,
      false
    );
  },
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
};
