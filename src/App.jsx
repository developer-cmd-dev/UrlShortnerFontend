import "./App.css";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { IoCopy } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import apiRequest from "./Axios/axiosHandler";




function App() {

  const [urlData,setUrlData]=useState('');
  const [response,setResponse]=useState([]);




  const generateUrl=async()=>{
    const url=`${import.meta.env.VITE_BACKEND_URL}url-shortner`
    const response = await apiRequest(url,"post",urlData);
    console.log(response)
    setResponse((prev)=>[...prev,response.data])
    setUrlData('');
    
  }

  const redirectUrl= (url)=>{
    const urlData = JSON.parse(url);
    try {
      window.open(urlData)
    } catch (error) {
      console.log(error)
    }
  }




  return (
    <div className="bg-slate-900 h-screen w-full">
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
          <h1 className=" w-[80%]">{value.hashedUrl}</h1>
          <Button type="click" title="copy"><IoCopy />
          </Button>
          <Button title="Redirect"  type="click" onClick={()=>redirectUrl(value.originalUrl)}><FaExternalLinkSquareAlt />
          </Button>

        </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
