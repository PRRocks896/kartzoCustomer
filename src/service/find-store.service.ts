import Constant from '../pages/constant/constant';
import apiUrl from  '../apicontroller/apicontroller';
import WebReqUrl from '../web-req/web-req';
import axios from 'axios';
// import { loginCreateRequest, forgotPasswordRequest, profileGetRequest, resetPasswordRequest, changePasswordRequest, getAllTableDataListRequest, getDataByIdRequest, deleteByIdRequest } from "../modelController";

export default {
    getMerchantData: async function (data:any) {
        return axios.post(Constant.apiUrl + apiUrl.findStoreController.getStore,data);
    },
    getlocationData: async function (data:any) {
        return axios.get(Constant.apiUrl + apiUrl.findStoreController.getLocation + `?name=${data.value}`);
    },
    
}