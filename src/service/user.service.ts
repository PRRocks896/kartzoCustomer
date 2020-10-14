import Constant from '../pages/constant/constant';
// import WebReqUrl from '../web-req/web-req';
import apiUrl from  '../apicontroller/apicontroller';
import axios from 'axios';
import WebReqUrl from '../web-req/web-req';
// import { loginCreateRequest, forgotPasswordRequest, profileGetRequest, resetPasswordRequest, changePasswordRequest, getAllTableDataListRequest, getDataByIdRequest, deleteByIdRequest } from "../modelController";

const config = {     
    headers: { 
        'Access-Control-Allow-Origin': true
    }
}
export default {
    loginUser: async function (data:any) {
        return WebReqUrl.post(Constant.apiUrl + apiUrl.userController.createData + `?phone=${data.phone}`,{},false);
    },
    verifyotp: async function (data:any) {
        return WebReqUrl.post(Constant.apiUrl + apiUrl.userController.verifyotp + `?phone=${data.mobile}&OTP=${data.otp}`,{},false);
    }
}