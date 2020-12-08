import Constant from '../pages/constant/constant';
import apiUrl from  '../apicontroller/apicontroller';
import WebReqUrl from '../web-req/web-req';
import axios from 'axios';
import { getMerchantListRequest, searchCityListRequest } from '../modelController';

export default {
    /**
     * 
     * @param data : get merchant data
     */
    getMerchantData: async function (data:getMerchantListRequest) {
        return WebReqUrl.post(Constant.apiUrl + apiUrl.findStoreController.getStore,data,true);
    },

    /**
     * 
     * @param data : get location data
     */
    getlocationData: async function (data:searchCityListRequest) {
        return WebReqUrl.get(Constant.apiUrl + apiUrl.findStoreController.getLocation + `?name=${data.value}`,true);
    },
    
}