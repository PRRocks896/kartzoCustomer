import Constant from '../pages/constant/constant';
// import WebReqUrl from '../web-req/web-req';
import apiUrl from  '../apicontroller/apicontroller';
import axios from 'axios';
import WebReqUrl from '../web-req/web-req';
// import { loginCreateRequest, forgotPasswordRequest, profileGetRequest, resetPasswordRequest, changePasswordRequest, getAllTableDataListRequest, getDataByIdRequest, deleteByIdRequest } from "../modelController";

export default {
    loginUser: async function (data:any) {
        return axios.post(Constant.apiUrl + apiUrl.userController.createData + `?phone=${data.phone}`);
    },
    verifyotp: async function (data:any) {
        return axios.post(Constant.apiUrl + apiUrl.userController.verifyotp + `?phone=${data.mobile}&OTP=${data.otp}`);
    },
    getAdminToken: async function (data:any) {
        return axios.post(Constant.apiUrl + apiUrl.userController.adminToken,data);
    },
    
}