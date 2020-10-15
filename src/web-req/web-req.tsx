import axios from 'axios';
// import Constant from '../constant/constant';
import { getAdminDetail, getHeaderDetail } from '../pages/utils/index';

const WebReqUrl = {
    get: async function (url: string,isAdmin:boolean) {
        try {
            let response;
            if(isAdmin === true){
                response = await axios.get(url,{headers: getAdminDetail()})
            } else {
                response = await axios.get(url,{headers: getHeaderDetail()})
            }
           
            // console.log("response",response);
            if(response) {
                try {
                    if (response.status === 200) {
                        // console.log(response);
                        return response?.data;
                    } else {
                        // console.log(response);
                        return [];
                    }
                } catch (err) {
                    console.error(err);
                }
            } else {
                // console.log("err");
            }
        } catch (err) {
            console.error(err);
        }
    },
    delete: async function (url: string,isAdmin:boolean) {
        try {
            let response;
            if(isAdmin === true){
                response = await axios.delete(url, {headers: getAdminDetail()})
            } else {
                response = await axios.delete(url, {headers: getHeaderDetail()})
            }
           
            // console.log("response",response);
            if(response) {
                try {
                    if (response.status === 200) {
                        // console.log(response);
                        return response?.data;
                    } else {
                        // console.log(response);
                        return [];
                    }
                } catch (err) {
                    console.error(err);
                }
            } else {
                // console.log("err");
            }
        } catch (err) {
            console.error(err);
        }
    },
    put: async function (url: string, body: any,isAdmin:boolean) {
        try {
            let response;
            if(isAdmin === true){
                response = await axios.put(url, body, {headers: getAdminDetail()})
            } else {
                response = await axios.put(url, body, {headers: getHeaderDetail()})
            }
            // console.log("response",response);
            if(response) {
                try {
                    if (response.status === 200) {
                        // console.log(response);
                        return response?.data;
                    } else {
                        // console.log(response);
                        return [];
                    }
                } catch (err) {
                    console.error(err);
                }
            } else {
                // console.log("err");
            }
        } catch (err) {
            console.error(err);
        }
    },
    post: async function (url: string, body: any,isAdmin:boolean) {
        try {
            let response;
            if(isAdmin === true){
                response = await axios.post(url, body, {headers: getAdminDetail()})
            } else {
                response = await axios.post(url, body, {headers: getHeaderDetail()})
            }
            // console.log("response",response);
            if(response) {
                try {
                    if (response.status === 200) {
                        // console.log(response);
                        return response?.data;
                    } else {
                        // console.log(response);
                        return [];
                    }
                } catch (err) {
                    console.error(err);
                }
            } else {
                // console.log("err");
            }
        } catch (err) {
            console.error(err);
        }
    }
}

export default WebReqUrl;