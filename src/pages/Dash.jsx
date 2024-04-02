import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from  '../context/Authcontext.jsx'
axios.defaults.withCredentials = true;

let firstRender = true;

const D = () => {
  const { user, setUser } = useContext(AuthContext);
 
  const refreshToken = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE}/api/refresh`, {
        withCredentials: true,
      });
      const data = await res.data;
      if(res.status=200){
        setUser(true);
        console.log("refreshing")
      }
      else{
        setUser(false);
      }
      return data;
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  const sendRequest = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE}/api/user`, {
        withCredentials: true,
      });
      const data = await res.data;
      setUser(data.message);
      if(res.status=200){
        setUser(true);
      }else{
        setUser(false);
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sendRequest();
    }
    let interval = setInterval(() => {
      refreshToken();
     }, 1000 * 29);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      {user && <div className='text-black grid place-content-center text-9xl h-screen w-full'>Dash</div>}
      {!user && (<div className='text-black grid place-content-center text-9xl h-screen w-full'>not authorized</div>)}
    </div>
  );  
};

export default D;
