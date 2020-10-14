import axios from 'axios';
// import Constant from '../pages/constant/constant';
// // import {utils} from '../pages/utils/index';

const WebReqUrl = {
    get: async function (url: string,isMerchant:boolean) {
        try {
            let response;
            if(isMerchant === true){
                response = await axios.get(url)
            } else {
                response = await axios.get(url)
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
    delete: async function (url: string,isMerchant:boolean) {
        try {
            let response;
            if(isMerchant === true){
                response = await axios.delete(url)
            } else {
                response = await axios.delete(url)
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
    put: async function (url: string, body: any,isMerchant:boolean) {
        try {
            let response;
            if(isMerchant === true){
                response = await axios.put(url, body)
            } else {
                response = await axios.put(url, body)
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
    post: async function (url: string, body: any,isMerchant:boolean) {
        try {
            let response;
            if(isMerchant === true){
                response = await axios.post(url, body)
            } else {
                response = await axios.post(url, body)
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