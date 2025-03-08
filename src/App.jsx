import "./App.css";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { IoCopy } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import apiRequest from "./Axios/axiosHandler";
import { Toaster } from "sonner";
import { errorToast, successToast } from "./Utility/sooner";




function App() {

  const [urlData,setUrlData]=useState('');
  const [response,setResponse]=useState([]);




  const generateUrl=async()=>{
    const url=`${import.meta.env.VITE_BACKEND_URL}`
    try{
      const response = await apiRequest(url,"post",urlData);
      successToast("Url generated successfully.")
      setResponse((prev)=>[...prev,response.data])
      setUrlData('');
    }catch(error){
      errorToast(error.message);
    }
    
  }

  const redirectUrl= (url)=>{
    try {
      window.open(`https://${url}`)
    } catch (error) {
      errorToast(error.message);
    }
  }

  const copyToClipboard=(url)=>{
    window.navigator.clipboard.writeText(url);
    successToast("Copied to clipboard.")
  }




  return (
    <div className="bg-slate-900 h-screen w-full">
    <Toaster theme="light" richColors={true} expand={true} position="top-left" closeButton={true}  />
      <div className="heading w-full h-44  flex items-center justify-center text-white text-[5rem]">
        <h1>URL Shortner</h1>
      </div>

      <div
        className="input w-[70%] p-8
        m-auto flex justify-around items-center"
      >
        <TextInput
          id="email1"
          type="url"
          placeholder="Enter url..."
          required
          className="dark w-[80%]"
          value={urlData}
          onChange={(e)=>setUrlData(e.target.value)}
        />
        <Button type="click" onClick={generateUrl} title="generate url">Generate</Button>
      </div>

      <div className="F w-[70%] m-auto min-h-96 p-4 flex flex-col justify-start items-center">
      {
        response.map((value,index)=>(
          <div key={index} className="w-[80%] m-2 bg-slate-800 h-20 rounded-2xl text-white text-xl flex items-center justify-around p-3 ">
          <div className=" w-[80%] h-full">
          <h1 className=" ">https://{value.shortUrl}</h1>
          <p className="text-gray-500 text-sm">{value.destination}</p>
          </div>
          <Button type="click" title="copy" onClick={()=>copyToClipboard(value.shortUrl)}><IoCopy />
          </Button>
          <Button title="Redirect"  type="click" onClick={()=>redirectUrl(value.shortUrl)}><FaExternalLinkSquareAlt />
          </Button>

        </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
