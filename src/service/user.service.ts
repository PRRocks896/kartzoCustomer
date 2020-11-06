import Constant from '../pages/constant/constant';
// import WebReqUrl from '../web-req/web-req';
import apiUrl from  '../apicontroller/apicontroller';
import axios from 'axios';
import WebReqUrl from '../web-req/web-req';
import { getAdminTokenRequest, loginCreateRequest, verifyOtpRequest } from '../modelController';

export default {
    /**
     * 
     * @param data : otp reuqest
     */
    loginUser: async function (data:loginCreateRequest) {
        return axios.post(Constant.apiUrl + apiUrl.userController.createData + `?phone=${data.phone}`);
    },

    /**
     * 
     * @param data : verify otp request
     */
    verifyotp: async function (data:verifyOtpRequest) {
        return axios.post(Constant.apiUrl + apiUrl.userController.verifyotp + `?phone=${data.mobile}&OTP=${data.otp}`);
    },

    /**
     * 
     * @param data : get admin token
     */
    getAdminToken: async function (data:getAdminTokenRequest) {
        return axios.post(Constant.apiUrl + apiUrl.userController.adminToken,data);
    },

    
    /**
     * 
     * @param data : get app link
     */
    getAppLinkData: async function (data:any) {
        return axios.post(Constant.apiUrl + apiUrl.userController.getapplink + `?phone=${data.phone}`);
    }, 
    
      /**
     * 
     * @param data : update profile
     */
    updateprofile: async function (data:any) {
        const config = {     
            headers: { 
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Access-Control-Allow-Origin': true,
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(Constant.apiUrl + apiUrl.userController.updateprofile,data,config);
    },

        
    /**
     * 
     * @param data : get profile
     */
    getprofile: async function (data:any) {
        return WebReqUrl.get(Constant.apiUrl + apiUrl.userController.getprofile + data.id,false);
    }
    
}