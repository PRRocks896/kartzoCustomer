import Constant from '../pages/constant/constant';
import apiUrl from  '../apicontroller/apicontroller';
import WebReqUrl from '../web-req/web-req';
import axios from 'axios';
import { getMerchantListRequest, searchCityListRequest } from '../modelController';

export default {
    getMerchantData: async function (data:getMerchantListRequest) {
        return axios.post(Constant.apiUrl + apiUrl.findStoreController.getStore,data);
    },
    getlocationData: async function (data:searchCityListRequest) {
        return axios.get(Constant.apiUrl + apiUrl.findStoreController.getLocation + `?name=${data.value}`);
    },
    
}