import Constant from '../pages/constant/constant';
// import WebReqUrl from '../web-req/web-req';
import apiUrl from  '../apicontroller/apicontroller';
import axios from 'axios';
import WebReqUrl from '../web-req/web-req';
import { getAdminTokenRequest, loginCreateRequest, verifyOtpRequest } from '../modelController';

export default {
    loginUser: async function (data:loginCreateRequest) {
        return axios.post(Constant.apiUrl + apiUrl.userController.createData + `?phone=${data.phone}`);
    },
    verifyotp: async function (data:verifyOtpRequest) {
        return axios.post(Constant.apiUrl + apiUrl.userController.verifyotp + `?phone=${data.mobile}&OTP=${data.otp}`);
    },
    getAdminToken: async function (data:getAdminTokenRequest) {
        return axios.post(Constant.apiUrl + apiUrl.userController.adminToken,data);
    },
    
}