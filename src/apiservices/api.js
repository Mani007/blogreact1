import { API_NOTIFICATION_MESSAGES } from '../constants/errorMessage';
import { SERVICE_URLS } from '../constants/apiServiceCalls';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7000/api/v1/',
    timeout: 10000,
    //validateStatus: function (status) {
    headers: {
        //'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
        "content-type": 'application/json',

    }
})
axiosInstance.interceptors.request.use(
    function (response){
        return processResponse(response)
    },
    function (error) {
        return Promise.reject(processError(error))
    }
)
/////
// is success -> return {isSuccess: true, data:object}
// is failure -> return {isFailure:true, status:string, msg:string, code: int}
//////////
const processResponse = (response) => {
    if (response?.status === 200){
        return {isSuccess: true, data: response.data}
    } else {
        return {isFailure: true, status: response?.status, msg: response?.message, code: response?.code}
    }
}

const processError = (error) => {
    if (error.response){
        console.log('Error in response: ', error.toJSON());
        return {isFailure: true, 
            msg: API_NOTIFICATION_MESSAGES.responseFailure.message, code: error.response.status}
    } else if (error.request){
        console.log('Error in request: ', error.toJSON());
        return {isFailure: true, 
            msg: API_NOTIFICATION_MESSAGES.requestFailure.message,
        code: 'No code available as it does not reach your server'}
    } else {
        console.log('Error in Network connecting: ', error.toJSON());
        return {isFailure: true,  
            msg: API_NOTIFICATION_MESSAGES.networkError.message, 
            code: 'No code available as it does not reach your server'}
    }

}
 
const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)){
    API[key] = (body, showUploadProgress,showDownloadProgress) => {
        axiosInstance({
            method: value.method,
            url: value.url,
            data:body,
            reaponseType: value.reaponseType,
            onUploadProgress: function(progressEvent){
                if (showUploadProgress){
                    let percentageComplete = Math.round((progressEvent.loaded*100) / progressEvent.total)
                    showUploadProgress(percentageComplete)
                }
            },
            onDownloadProgress: function(progressEvent){
                if (showUploadProgress){
                    let percentageComplete = Math.round((progressEvent.loaded*100) / progressEvent.total)
                    showUploadProgress(percentageComplete)
                }
            },

        })
    }
}
export {API}
