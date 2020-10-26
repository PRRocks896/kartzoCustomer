import Constant from '../pages/constant/constant';
import apiUrl from  '../apicontroller/apicontroller';
import WebReqUrl from '../web-req/web-req';
import axios from 'axios';
// import { loginCreateRequest, forgotPasswordRequest, profileGetRequest, resetPasswordRequest, changePasswordRequest, getAllTableDataListRequest, getDataByIdRequest, deleteByIdRequest } from "../modelController";

export default {
    getAddressListData: async function (data:any) {
        return WebReqUrl.post(Constant.apiUrl + apiUrl.addressController.getaddress,data,false);
    },
    addAddressData: async function (data:any) {
        return WebReqUrl.post(Constant.apiUrl + apiUrl.addressController.addaddress,data,false);
    },
    
}