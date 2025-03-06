import "./App.css";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { IoCopy } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { useState } from "react";



function App() {

  const [url,setUrl]=useState('');



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
          onChange={(e)=>setUrl(e.target.value)}
        />
        <Button type="click" title="generate url">Generate</Button>
      </div>

      <div className="F w-[70%] m-auto min-h-96 p-4 flex justify-center">
        <div className="w-[80%] bg-slate-800 h-20 rounded-2xl text-white text-xl flex items-center justify-around p-3 ">
          <h1 className=" w-[80%]">http://localhost:8080/dfkjdlfjdkljf</h1>
          <Button type="submit" title="copy"><IoCopy />
          </Button>
          <Button title="Redirect"  type="submit"><FaExternalLinkSquareAlt />
          </Button>

        </div>
      </div>
    </div>
  );
}

export default App;
