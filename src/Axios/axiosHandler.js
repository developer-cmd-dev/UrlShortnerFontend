import axios from "axios";


 const  apiRequest = async(url,method,data)=>{

    try {
        const response = await axios({url,method,data,withCredentials:false,headers:{"Content-Type":"application/json"}});
        return response;
    } catch (error) {
        if(error.code === "ERR_NETWORK" || error.message === 'Network Error'){
            throw new Error('Server is unreachable. Please try again later.')
        }else if(error.response){
            throw{
                status:error.response.status,
                message:error.response.data.message||'Something went wrong.',
                success:false
            }
        }else{
            throw new Error('An expected error occurred.')
        }
    }
}

export default apiRequest