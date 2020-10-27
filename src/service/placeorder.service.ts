import Constant from '../pages/constant/constant';
import apiUrl from  '../apicontroller/apicontroller';
import WebReqUrl from '../web-req/web-req';
import axios from 'axios';
import { addAddressRequest, getAddressListRequest } from '../modelController';

export default {
    getAddressListData: async function (data:getAddressListRequest) {
        return WebReqUrl.post(Constant.apiUrl + apiUrl.addressController.getaddress,data,false);
    },
    addAddressData: async function (data:addAddressRequest) {
        return WebReqUrl.post(Constant.apiUrl + apiUrl.addressController.addaddress,data,false);
    },
    
}