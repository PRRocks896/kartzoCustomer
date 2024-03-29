import Constant from '../pages/constant/constant';
// import WebReqUrl from '../web-req/web-req';
import apiUrl from  '../apicontroller/apicontroller';
import axios from 'axios';
import WebReqUrl from '../web-req/web-req';

export default {
    /**
     * 
     * @param data : get category data
     */
    getfooterdata: async function () {
        return WebReqUrl.get(Constant.apiUrlAdmin + apiUrl.commonController.getfooterdata,true);
    },
       /**
     * 
     * @param data : get category data
     */
    getfooterlinkdata: async function () {
        return WebReqUrl.get(Constant.apiUrlAdmin + apiUrl.commonController.getfooterlinkdata,true);
    },
    
}