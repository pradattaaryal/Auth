import { useState } from "react";
import axios from "axios";

const S = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    

    const handleSignin = async () => {
       try {
        const res = await axios.post(`${import.meta.env.VITE_BASE}/api/signup`, {
          email,
          password,
        });
        const data = await res.data;
        console.log(data);
       
        window.location.replace('/login'); 
        return data;  
       } catch (error) {
       console.log ("axios problem") 
       }     
      };
    
      return (
        <div className="flex flex-col gap-3 rounded-md shadow-md w-fit p-3 mx-auto my-[30vh]">
          
          <input
          autoComplete="on"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none"
          />
          <form  >
          <input
           autoComplete="on"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none"
          /></form>
          <button
            type="submit"
            onClick={handleSignin}
            className="px-3 py-2 bg-purple-500 rounded-full text-white shadow-md"
          >
            Sign up
          </button>
        </div>
      );
};

export default S;
