import axios from 'axios';
import React, { useState, useContext } from "react";
import Authcontext from '../context/Authcontext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuth,isAuth } = useContext(Authcontext);

  const loginWithGoogle = () => {
    window.open("http://localhost:3000/auth/google/callback", "_self");
  }

  const loginBtn = async () => {
    try {
      console.log(import.meta.env.VITE_BASE)
      const lodata = await axios.post(`${import.meta.env.VITE_BASE}/api/l`, {
        email,
        password,
      });
      const data = await lodata.data;
      console.log(data);
      setIsAuth(true);
      window.location.replace('/dash'); 
  
       
    } catch (error) {
      console.error(error);  
    }
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center ">
        <div className="max-w-md w-full rounded-xl border-black border-2 space-y-8 p-16">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Login to your account</h2>
          </div>
          <form className="mt-8   space-y-6"  method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-6">
              <div>
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                <input  autoComplete="on"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input  autoComplete="on"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none"
                />
              </div>
            </div>
            <div>
              <button
              type="button"
                onClick={loginBtn} // Use loginBtn directly as onClick handler
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
            <div>
              <button
               type="button"
                onClick={loginWithGoogle}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Login With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
