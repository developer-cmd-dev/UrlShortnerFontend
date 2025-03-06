
import axios from 'axios';
import { useState,useEffect } from 'react';

const useAxios=(config)=>{
const [data,setData]=useState(null);
const [error,setError]=useState(null);
const [loading,setLoading]=useState(false);


const fetchData= async ()=>{

    try {
        setLoading(true);
        const response=axios(config);
        setData((await response).data);
        setError(null);
    } catch (error) {
        setError(error.message);
    }finally{
        setLoading(false);
    }

}

useEffect(() => {
    if(config.autoFetch){
        fetchData();
    }
}, [config.url])

return{data,error,loading};

}

export default useAxios;

